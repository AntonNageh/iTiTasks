function getTaskDate(task) {
  return new Date(
    parseInt(task.year),
    parseInt(task.month) - 1,
    parseInt(task.day),
    parseInt(task.hours),
    parseInt(task.mins)
  );
}

function checkDueTasks() {
  dbPromise.then(db => {
    const tx = db.transaction('tasks', 'readonly');
    const store = tx.objectStore('tasks');
    return store.getAll();
  }).then(tasks => {
    const now = new Date();
    
    tasks.forEach(task => {
      const dueDate = getTaskDate(task);
      
      if (dueDate <= now && !task.notified) {
        // Show notification
        if (Notification.permission === "granted") {
          navigator.serviceWorker.getRegistration().then(reg => {
            reg.showNotification('Task Due!', {
              body: `${task.title} is due now!`,
              icon: 'apple-touch-icon.png',
              vibrate: [100, 50, 100]
            });
          });
        }
        
        // Update task in DB
        dbPromise.then(db => {
          const tx = db.transaction('tasks', 'readwrite');
          const store = tx.objectStore('tasks');
          task.notified = true;
          store.put(task);
          return tx.complete;
        }).then(() => {
          displayTasks(); 
        });
      }
    });
  });
}

// Update Notification.requestPermission
Notification.requestPermission().then((status) => {
  console.log("Notification permission status: " + status);
  if (document.getElementById("notification-status")) {
    document.getElementById("notification-status").textContent = status;
  }
});

window.addEventListener("load", () => {
  navigator.serviceWorker.register("sw.js");
});

document.getElementById("btn").addEventListener("click", (event) => {
  if (Notification.permission == "granted") {
    navigator.serviceWorker.getRegistration().then((registration) => {
      const option = {
        body: "This is a notification message",
        icon: "apple-touch-icon.png",
        vibrate: [100, 50, 100],
        tag: "vibration-sample",
        actions: [
          { action: "explorer", title: "Open demo2.html" },
          { action: "close", title: "Close" },
        ],
      };
      registration.showNotification("Hello", option);
    });
  } else {
    alert("Please allow notifications");
  }
});

let dbPromise;

// Create DB
document.getElementById("cDB").addEventListener("click", () => {
  dbPromise = idb.openDB("testDB", 2, {
    upgrade(db) {
      productsStore = db.createObjectStore("products", { keyPath: "id" });
      db.createObjectStore("orders", { keyPath: "id" });
      productsStore.createIndex("name", "name", { unique: true });
      TasksStore = db.createObjectStore("tasks", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
});

//Create Products Table
document.getElementById("cPT").addEventListener("click", () => {
  dbPromise.then((db) => {
    var items = [
      {
        name: "Recliner Chair",
        id: "rch-red-lea",
        price: 299.99,
        color: "red",
        material: "leather",
        description: "A comfortable recliner for relaxation",
        quantity: 2,
      },
      {
        name: "Coffee Table",
        id: "ctb-wal-nut",
        price: 129.99,
        color: "walnut",
        material: "wood",
        description: "A stylish coffee table for your living room",
        quantity: 5,
      },
      {
        name: "Floor Lamp",
        id: "flp-sil-chr",
        price: 79.99,
        color: "silver",
        material: "chrome",
        description: "A modern floor lamp for ambient lighting",
        quantity: 1,
      },
      {
        name: "Bookshelf",
        id: "bks- oak-5s",
        price: 199.99,
        color: "oak",
        material: "wood",
        description: "A sturdy bookshelf for your home library",
        quantity: 4,
      },
      {
        name: "Rug",
        id: "rug-bei-8x10",
        price: 99.99,
        color: "beige",
        material: "wool",
        description: "A plush area rug for your living room",
        quantity: 3,
      },
    ];
    
    var tx = db.transaction("products", "readwrite");
    var store = tx.objectStore("products");

    Promise.all(
      items.map((item) => {
        console.log("adding item : ", item);
        return store.add(item);
      })
    )
      .then(() => {
        console.log("Items added successfully");
      })
      .catch((error) => {
        console.error("transaction failed", error);
        tx.abort();
      });
  });
});

// Create Orders Table
document.getElementById("cOT").addEventListener("click", () => {
  dbPromise.then((db) => {
    var items = [
      {
        name: "Recliner Chair",
        id: "rch-red-lea",
        price: 299.99,
        color: "red",
        material: "leather",
        description: "A comfortable recliner for relaxation",
        quantity: 3,
      },
      {
        name: "Coffee Table",
        id: "ctb-wal-nut",
        price: 129.99,
        color: "walnut",
        material: "wood",
        description: "A stylish coffee table for your living room",
        quantity: 5,
      },
      {
        name: "Rug",
        id: "rug-bei-8x10",
        price: 99.99,
        color: "beige",
        material: "wool",
        description: "A plush area rug for your living room",
        quantity: 3,
      },
    ];
    
    var tx = db.transaction("orders", "readwrite");
    var store = tx.objectStore("orders");

    Promise.all(
      items.map((item) => {
        console.log("adding item : ", item);
        return store.add(item);
      })
    )
      .then(() => {
        console.log("Items added successfully");
      })
      .catch((error) => {
        console.error("transaction failed", error);
        tx.abort();
      });
  });
});

// Search functionality
document.getElementById("search").addEventListener("click", () => {
  var ProdName = document.getElementById("prodName").value.toLowerCase();
  ProdName = ProdName.charAt(0).toUpperCase() + ProdName.slice(1);
  dbPromise
    .then((db) => {
      var tx = db.transaction("products", "readonly");
      var store = tx.objectStore("products");
      var indexer = store.index("name");
      return indexer.get(ProdName);
    })
    .then((obj) => {
      const dataContainer = document.getElementById("data");
      if (!obj) {
        dataContainer.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>Product not found</h3>
            <p>No product matches your search</p>
          </div>
        `;
      } else {
        dataContainer.innerHTML = `
          <div class="product-card">
            <h3>${obj.name}</h3>
            <p><strong>ID:</strong> ${obj.id}</p>
            <p><strong>Price:</strong> $${obj.price.toFixed(2)}</p>
            <p><strong>Color:</strong> ${obj.color}</p>
            <p><strong>Material:</strong> ${obj.material}</p>
            <p><strong>Description:</strong> ${obj.description}</p>
            <p><strong>Quantity:</strong> ${obj.quantity}</p>
          </div>
        `;
      }
    });
});

// Display orders
document.getElementById("displayOrders").addEventListener("click", () => {
  getOrders().then((obj) => {
    const ordersData = document.getElementById("ordersData");
    if (obj.length === 0) {
      ordersData.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-file-invoice"></i>
          <h3>No orders available</h3>
          <p>There are no orders to display</p>
        </div>
      `;
    } else {
      ordersData.innerHTML = "";
      obj.map((elem) => {
        ordersData.innerHTML += `
          <div class="order-card">
            <h3>${elem.name}</h3>
            <p><strong>ID:</strong> ${elem.id}</p>
            <p><strong>Price:</strong> $${elem.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> ${elem.quantity}</p>
            <p><strong>Description:</strong> ${elem.description}</p>
            <hr>
          </div>
        `;
      });
    }
  });
});

// Apply orders
document.getElementById("applyOrders").addEventListener("click", () => {
  getOrders()
    .then((orders) => {
      return OrderProcessing(orders);
    })
    .then((listProducts) => {
      UpdateProducts(listProducts);
    });
});

// Task Page Toggle
document.getElementById("task-page-btn").addEventListener("click", function () {
  const taskPage = document.getElementById("task-page");
  taskPage.classList.toggle("show");
  this.innerHTML = taskPage.classList.contains("show") ? 
    '<i class="fas fa-times"></i> Close Form' : 
    '<i class="fas fa-plus"></i> Add New Task';
});

// Initialize date input with today's date
if (document.getElementById('day')) {
  document.getElementById('day').valueAsDate = new Date();
}

// Add task functionality
document.getElementById("add-task-btn").addEventListener("click", function () {
  var taskTitle = document.getElementById("task-title").value;
  var hours = document.getElementById("hours").value;
  var mins = document.getElementById("mins").value;
  var day = document.getElementById("day").value;
  
  if (!taskTitle || !hours || !mins || !day) {
    alert("Please fill all fields");
    return;
  }
  
  // Extract date components
  const dateObj = new Date(day);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are 0-indexed
  const dayNum = dateObj.getDate();
  
  addTask(taskTitle, hours, mins, dayNum, month, year);
});

// Display tasks with improved UI
function displayTasks() {
  const tasksContainer = document.getElementById("tasksContainer");
  dbPromise
    .then((db) => {
      const tx = db.transaction("tasks", "readonly");
      const store = tx.objectStore("tasks");
      return store.getAll();
    })
    .then((tasks) => {
      tasksContainer.innerHTML = "";
      
      if (tasks.length === 0) {
        tasksContainer.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-clipboard-list"></i>
            <h3>No tasks yet</h3>
            <p>Add your first task to get started</p>
          </div>
        `;
        return;
      }
      
      tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-element");
        
        // Check if task is due
        const taskDate = getTaskDate(task);
        const now = new Date();
        const isDue = taskDate <= now;
        
        if (isDue) {
          taskElement.classList.add("due");
        }
        
        // Format date
        const formattedDate = taskDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
        
        taskElement.innerHTML = `
          <div class="task-content">
            <div class="task-title ${isDue ? 'completed' : ''}">
              ${task.title}
              ${isDue ? '<span class="badge badge-danger">Due</span>' : ''}
            </div>
            <div class="task-time">
              <i class="far fa-clock"></i> 
              ${task.hours}:${task.mins} • ${formattedDate}
            </div>
            ${isDue ? '<div class="task-due"><i class="fas fa-exclamation-circle"></i> This task is due now!</div>' : ''}
          </div>
          <button class="delete-icon">
            <i class="fas fa-trash-alt"></i>
          </button>
        `;
        
        tasksContainer.appendChild(taskElement);
        
        // Add delete functionality
        const deleteBtn = taskElement.querySelector(".delete-icon");
        deleteBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          deleteBtn.classList.add("deleting");
          setTimeout(() => removeTask(task.id), 150);
        });
      });
    });
}

// Call displayTasks initially
displayTasks();

// Helper functions
function getOrders() {
  return dbPromise.then((db) => {
    var tx = db.transaction("orders", "readonly");
    var store = tx.objectStore("orders");
    return store.getAll();
  });
}

function OrderProcessing(orders) {
  return dbPromise.then((db) => {
    var tx = db.transaction("products", "readonly");
    var store = tx.objectStore("products");

    return Promise.all(
      orders.map((order) => {
        return store
          .get(order.id)
          .then((product) => {
            return checkQuantity(product, order)
              .then(() => {
                var ordersTx = db.transaction("orders", "readwrite");
                var ordersStore = ordersTx.objectStore("orders");
                return ordersStore.delete(order.id);
              })
              .catch((err) => {
                return null;
              });
          })
          .catch((err) => {
            if (!tx.done) {
              tx.abort();
            }
          });
      })
    );
  });
}

function checkQuantity(product, order) {
  return new Promise(function (resolve, reject) {
    var quantityItem = product.quantity - order.quantity;
    if (quantityItem < 0) {
      reject("Out of stock");
    } else {
      let item = product;
      item.quantity = quantityItem;
      resolve(item);
    }
  });
}

function UpdateProducts(Products) {
  return dbPromise.then((db) => {
    var tx = db.transaction("products", "readwrite");
    var store = tx.objectStore("products");
    return Promise.all(
      Products.map((product) => {
        if (!product) return null;
        return store.put(product);
      })
    )
      .catch((err) => {
        tx.abort();
      })
      .then(() => {
        console.log("Products updated successfully");
      });
  });
}

function addTask(taskTitle, hours, mins, day, month, year) {
  dbPromise
    .then((db) => {
      var tx = db.transaction("tasks", "readwrite");
      var store = tx.objectStore("tasks");
      store.add({
        title: taskTitle,
        hours: hours,
        mins: mins,
        day: day,
        month: month,
        year: year,
        notified: false,
      });
      return tx.complete;
    })
    .then(() => {
      displayTasks();
      checkDueTasks();
      // Clear form
      document.getElementById("task-title").value = "";
      document.getElementById("hours").value = "";
      document.getElementById("mins").value = "";
      document.getElementById("day").valueAsDate = new Date();
    });
}

function removeTask(id) {
  dbPromise
    .then((db) => {
      const tx = db.transaction("tasks", "readwrite");
      const store = tx.objectStore("tasks");
      store.delete(id);
      return tx.complete;
    })
    .then(() => {
      displayTasks();
    });
}

// Run immediately and every minute
window.addEventListener('load', () => {
  checkDueTasks();
  setInterval(checkDueTasks, 60000); // Check every minute
});