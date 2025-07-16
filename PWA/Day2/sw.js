self.addEventListener("notificationclick", (event) => {
  console.log(event);
  const notification = event.notification;
  const action = event.action;
  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow("demo2.html")
  }
  notification.close();
});
