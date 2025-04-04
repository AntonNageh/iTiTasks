var LnkdLstObj = {
    data : [],
    pushVal: function(value) {
        this.data.unshift({ val: value });
      },
    appendVal: function(value) {
        this.data.push({ val: value }); 
      },
    popVal: function(value) {
       this.data.pop({ val: value }); 
    },
    shiftVal: function(value) {
        this.data.shift({ val: value });
    }
}

function Enqueue(value) {
    if(typeof value === "number")
    {
        if (LnkdLstObj.data.length === 0 || LnkdLstObj.data[0].val > value) {
            LnkdLstObj.appendVal(value)
        }
    }
    else 
    throw new Error("Invalid input type")
}
function Pop(value) {
    if(typeof value === "number")
        {
            if (LnkdLstObj.data.length === 0 || LnkdLstObj.data[LnkdLstObj.data.length - 1].val === value) 
                LnkdLstObj.popVal(value)
        }
    else
    throw new Error("Invalid input type")
}
function Display(){
    for (let i = 0; i < LnkdLstObj.data.length; i++) {
        console.log(LnkdLstObj.data[i]);
    }
}
function Remove(value){
    for (let i = 0; i < LnkdLstObj.data.length; i++) {
        if(LnkdLstObj.data[i].val === value)
            {
                return LnkdLstObj.data.splice(i,1)
            }
            else
            return console.log("Value not found")
    }
}
function Dequeue(value) {
    if(typeof value === "number")
        {
            if (LnkdLstObj.data.length === 0 || LnkdLstObj.data[0].val === value) 
                LnkdLstObj.shiftVal(value)
        }
    else
    throw new Error("Invalid input type")
}
function Insert(index,value){
    if (typeof index === "number" && typeof value === "number" && arguments.length === 2)
    {
            if (index < 0) 
            throw new Error("Invalid index");

            const existingIndex = LnkdLstObj.data.findIndex((item) => item.val === value);
                if (existingIndex !== -1) {
                    throw new Error("Duplicate value");
                }

        const spliceIndex = LnkdLstObj.data.findIndex((item) => item.val > value);
            let newIndex = spliceIndex === -1 ? LnkdLstObj.data.length : spliceIndex
            LnkdLstObj.data.splice(newIndex, 0, { val: value });
        } 
    else     
    throw new Error("Invalid arguments");
    
}

