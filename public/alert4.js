const a = await navigator.serviceWorker.getRegistrations();
a.forEach(x => x.unregister())
