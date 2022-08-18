// import Raven

function init() {
   //RTCTrackEvent.config()......
}

function log(e) {
   //Raven.captureException(e);
   console.log(e);
}

export default {
   init,
   log
}