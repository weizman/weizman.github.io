setInterval(() => await navigator.serviceWorker.getRegistrations().forEach(x => x.unregister()));
