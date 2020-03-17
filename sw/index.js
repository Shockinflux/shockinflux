
// "use stricks";
// import * from 'idb';
// $('#toaster').hide();


if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {

  navigator.serviceWorker.register('caches.js')
  .then((reg)=> {
    if (!navigator.serviceWorker.controller) {
      return;
    }

    if (reg.waiting) {
      console.log("serviceWorker waiting to install");
      updateReady(reg.waiting);
      return;
    }

    if (reg.installing) {
      console.log("serviceWorker installing");
      trackInstalling(reg.installing);
      return;
    }
    // console.log(reg);

    reg.addEventListener('updatefound', function() {
      console.log("updates found");
      trackInstalling(reg.installing);
    });
  })
  .catch((error)=> {
    console.log('Registration failed: ', error);
  });

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
  //
  trackInstalling = (worker) =>{
    worker.addEventListener('statechange',() =>{
      if(worker.state == 'installed'){
        this.updateReady(worker);
      }
    });

  };

  updateReady = (worker) =>{

      // $("#toaster").show("slow");
      //
      // $('#ref').on('click',() =>{
      //   $("#toaster").hide("slow");
      // });

      worker.postMessage({action: 'skipWaiting'});
      // $('#dis').on('click',() =>{
      //   $("#toaster").hide("slow");
      // });

    };

});
}
