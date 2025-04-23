
// function delayedMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello, World!");
//         }, 3000);
//     })
// }
    // console.log(delayedMessage());
    // delayedMessage().then((message) => console.log(message)); 

// --------------------------------------------- // -----------------------


// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// fetchData().then((data) => console.log(data.toUpperCase()));

// --------------------------------------------- // -----------------------

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve("Data received");
//             } else {
//                 reject(new Error("Network Error"));
//             }
//         })
//     }, 2000);
// }
// // fetchData().then((message) => console.log(message)); 

// // ----------------------------------------------- // -----------------------

// function fetchUsers() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.responseText);
//             const ul = document.createElement("ul");
//             users.forEach(user => {
//                 const li = document.createElement("li");
//                 li.textContent = user.name;
//                 ul.appendChild(li);
//             });
//             document.body.appendChild(ul);
//         } else {
//             console.error("Error fetching users:", xhr.statusText);
//         }
//     }
//     xhr.send(); 
// }


// function getPosts() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(data => {
//             const posts = data.slice(0, 5);
//             console.log(posts);
//         })
//         .catch(error => console.error("Error fetching posts:", error));
// }

// function getPosts() {
//     async function fetchPosts() {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const data = await response.json();
//             const posts = data.slice(0, 5);
//             console.log(posts);
//         } catch (error) {
//             console.error("Error fetching posts:", error);
//         }
//     }
//     fetchPosts();
// }

//------------------------------------------------- // -----------------------




