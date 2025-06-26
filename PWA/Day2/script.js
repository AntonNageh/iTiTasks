
Notification.requestPermission((status)=>
console.log("Notification permission status: " + status));

window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
})

document.getElementById("btn").addEventListener("click", event => {
    
    if(Notification.permission == "granted") {
        navigator.serviceWorker.getRegistration()
        .then((registration) => {
            const option = {
                body: "This is a notification message",
                icon: "apple-touch-icon.png",
                vibrate: [100, 50, 100],
                tag: "vibration-sample",
                actions: [
                    {action:'explorer',title:'Open'},
                    {action:'close',title:'Close'}
                ]
            }
            registration.showNotification("Hello",option);
        })
    }
    else{
        alert("Please allow notifications");
    }
})