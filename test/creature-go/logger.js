(() => {


class Logger {
    constructor(logEl) {
        this.logEl = logEl;
    }

    log(str) {
        const el = document.createElement("div");
        el.innerHTML = str;
        logEl.prepend(el);
    }

    logPos(position, msg) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, lon);

        // new Date().toISOString()
        const date = new Date();
        const h = date.getHours();
        const dateStr = `${h < 10 ? '0' : ''}${h}:${date.getMinutes()}`

        this.log(`${dateStr} - ${lat}, ${lon} (${msg})`);
    }

    logCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.logPos(position, "getPos");
        });
    }
}
window.CreatureGO.Logger = Logger;

})();