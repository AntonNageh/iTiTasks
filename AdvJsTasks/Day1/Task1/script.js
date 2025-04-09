var LnkdLstObj = {
    data : [],
    appendVal: function(value) {
        this.data.unshift({ val: value }); //Byzwd fl awl = Enqueue
      },
    pushVal: function(value) {
        this.data.push({ val: value }); //Byzwd fl a5r 
      },
    popVal: function() {
       this.data.pop();  //Removes mn l a5r = Dequeue
    },
    shiftVal: function() {
        this.data.shift(); //Removes mn l awl
    },
    RemoveVal: function(index) {
      if (index >= 0 && index < this.data.length) { //Removes from anywhere
          this.data.splice(index, 1);
      } else {
          throw new Error("Invalid index");
      }
  }
}
function Push(value) {
    if (typeof value === "number" || arguments.length === 1) {
      if (LnkdLstObj.data.length === 0 || LnkdLstObj.data[LnkdLstObj.data.length - 1].val < value) {
        LnkdLstObj.pushVal(value)
      } else {
        return console.log("Entered value is not greater than the last value")
      }
    } else {
      throw new Error("Invalid input type")
    }
  }
function Enqueue(value) {
    if(typeof value === "number" || arguments.length === 1)
    {
        if (LnkdLstObj.data.length === 0 || LnkdLstObj.data[0].val > value) {
            LnkdLstObj.appendVal(value)
        }
        else
        return console.log("Entered value is greater than the first value")
    }
    else 
    throw new Error("Invalid input type")
}
function Pop(value) {
    if(typeof value === "number" || arguments.length === 1)
        {
            if (LnkdLstObj.data.length != 0 && LnkdLstObj.data[LnkdLstObj.data.length - 1].val === value) 
                {
                LnkdLstObj.popVal(value)
                }
            else {
                throw new Error("Value not found")
                }
        }
    else
    throw new Error("Invalid input type")
}
function Display(){
    for (let i = 0; i < LnkdLstObj.data.length; i++) {
        console.log(LnkdLstObj.data[i]);
    }
}
function Remove(value) {
  const index = LnkdLstObj.data.findIndex(item => item.val === value);
  if (index !== -1) {
      LnkdLstObj.RemoveVal(index);
  } else {
      console.log("Value not found in the list");
  }
}

function Dequeue() {
    if (LnkdLstObj.data.length === 0) 
    throw new Error("List is empty");
    LnkdLstObj.data.pop()  
}     

function Insert(index, value) {
    if (typeof index === "number" && typeof value === "number" && arguments.length === 2) {
      if (index < 0) {
        throw new Error("Invalid index");
      }
  
      const existingIndex = LnkdLstObj.data.findIndex((item) => item.val === value);
      if (existingIndex !== -1) {
        throw new Error("Duplicate value");
      }
  
      if (LnkdLstObj.data.length === 0) {
        LnkdLstObj.data.push({ val: value });
        return;
      }
  
      if (index === 0) {
        if (value > LnkdLstObj.data[0].val) {
          throw new Error("Value is not in the correct order");
        }
      } else if (index === LnkdLstObj.data.length) {
        if (value < LnkdLstObj.data[LnkdLstObj.data.length - 1].val) {
          throw new Error("Value is not in the correct order");
        }
      } else {
        if (value < LnkdLstObj.data[index - 1].val || value > LnkdLstObj.data[index].val) {
          throw new Error("Value is not in the correct order");
        }
      }
  
      LnkdLstObj.data.splice(index, 0, { val: value });
    } else {
      throw new Error("Invalid arguments");
    }
  }
