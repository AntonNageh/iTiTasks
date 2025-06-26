window.addEventListener('load', function() {
  let online = document.getElementById("online");
  let offline = document.getElementById("offline");
  if (online && offline) {
    if (navigator.onLine) {
      online.removeAttribute("hidden");
      offline.setAttribute("hidden", true);
    } else {
      offline.removeAttribute("hidden");
      online.setAttribute("hidden", true);
    }
  } else {
    console.log("Elements not found on this page");
  }
});

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

if (installButton) {
  installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
  });
function disableInAppInstallPrompt() {
  installPrompt = null;
  if (installButton) {
    installButton.setAttribute("hidden", "");
  }
}
  installButton.setAttribute("hidden", "");
}

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(function(registration) {
      console.log('Service worker registered:', registration);
    })
    .catch(function(error) {
      console.error('Service worker registration failed:', error);
    });
}