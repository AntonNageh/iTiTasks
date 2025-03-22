let Name = prompt("Enter your Name", "")
let phone = prompt("Enter your phone number", "")
let mobile = prompt("Enter your mobile number", "")
let email = prompt("Enter your email", "")
let color = prompt("Enter your favorite color", "")

                    //Validations
if (/^[a-zA-Z]+$/.test(Name))
{
    console.log("%c"+ "Name : " + Name, "color:"+color)
    if(/^(010|011|012|015)[0-9]{8}$/.test(phone) )
        {
            console.log("%c"+ "Phone : " + phone, "color:"+color)
            if(/[1-9][0-9]{7}$/.test(mobile))
                {
                    console.log("%c" + "Mobile : " + mobile, "color:"+color)
                    if(/^[a-zA-Z0-9._%+-]+@[0-9]+\.[a-zA-Z]+$/.test(email))
                        {
                        console.log("%c"+
                            "Email : "+email + "\n" + 
                            "Color : "+ color,
                            "color:"+color
                        )    
                        } else { 
                            console.log("Invalid email")
                        }
                } else { 
                console.log("Invalid mobile number")
                }
        } else {
        console.log("Invalid phone number")
        }
}
else {
    console.log("Invalid name")
}











