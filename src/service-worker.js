
self.addEventListener('push', function(event) {
  console.log('esperando la notificacion')
    const data = event.data ? event.data.json() : {};
  
    const title = data.title || 'Notificación';
    const options = {
      body: data.body || 'Tienes una nueva notificación',
      icon: 'assets/logo.png'
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });