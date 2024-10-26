
self.addEventListener('push', function(event) {
  console.log('esperando la notificacion')
    const data = event.data ? event.data.json() : {};
  
    const title = data.title || 'Notificación';
    const options = {
      body: data.body || 'Tienes una nueva notificación',
      icon: 'assets/logo.png'
    };
    event.notification.close()
    const urlToOpen = data.url || 'http://localhost:1200/';
    
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });
  self.addEventListener("notificationclick", (event) => {
    event.notification.close()
    const urlToOpen = event.notification.data?.url || 'http://localhost:5200/';
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
       
        for (const client of windowClients) {
          console.log(client.url)
          console.log(urlToOpen)
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        } 
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
    );
  });