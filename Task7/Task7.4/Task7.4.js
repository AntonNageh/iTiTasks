let ans = document.getElementById("Answer")
let result;

function EnterEqual () {
    for(let i=0; i < ans.value.length; i++){
        switch(true){
            case ans.value.includes("+"):
                {
                let newval = ans.value.split("+")
                result = Number(newval[0]) + Number(newval[1])  
                break;
            }
            case ans.value.includes("-"):
                {
                    let newval = ans.value.split("-")
                    result = Number(newval[0]) - Number(newval[1])   
                    break;
                }
                case ans.value.includes("*"):
                    {
                        let newval = ans.value.split("*")
                        result = Number(newval[0]) * Number(newval[1])      
                        break;
                    }
                    case ans.value.includes("/"):
                        {
                            let newval = ans.value.split("/")
                            result = Number(newval[0]) / Number(newval[1])
                            break;
                        }
                    }
                    ans.value = result
                }
}
function EnterNumber (value) {
    ans.value += value;
}
function EnterOperator(value) {
    ans.value += value;
}
function EnterClear() {
    ans.value = ""
}