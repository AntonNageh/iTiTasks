self.addEventListener("notificationclick", (event) => {
    console.log(event)
    const notification = event.notification;
    const action = event.action;
    if (action === "explorer") {
        clients.openWindow("demo2.html");
    }
    notification.close();
})