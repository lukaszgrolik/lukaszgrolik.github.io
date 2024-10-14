const rootEl = document.querySelector("#root");
const logEl = document.querySelector("#log");
const buttonEl = document.querySelector("#button");

const logger = new CreatureGO.Logger();

if ("geolocation" in navigator) {
    logger.log(`geolocation available`);
} else {
    logger.log(`geolocation NOT available`);
}


// logger.logCurrentPosition();

const watchID = navigator.geolocation.watchPosition((position) => {
    logger.logPos(position, "watchPos");

    if (window.onGeolocationChanged) window.onGeolocationChanged(position);
}, err => {
    logger.log(`error: ${err}`);
    logger.log(`error nessage: ${err.message}`);
    logger.log(`error stack: ${err.stack}`);
});

buttonEl.addEventListener('click', () => {
    logger.logCurrentPosition();
})
