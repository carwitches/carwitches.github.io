// number of ducks in trail
const ducks = 3;
// delay (ms) between ducks in trail
const delay = 50;
// duck trail id prefix
const duckTrailID = "_ducktrail";
// unsquished duck cursor location
const duckLoc = "/assets/duckcursor.png";
// squished duck cursor location
const duckSquishLoc = "/assets/duckcursorsquish.png";

/**
 * Set coords of duck
 *
 * @param id id of duck
 * @param xc x coordinate
 * @param yc y coordinate
 **/
function setDuck(id, xc, yc) {
    const duck = document.getElementById(`${duckTrailID}${id}`);

    duck.style.left = xc + "px";
    duck.style.top = yc + "px";
}


/**
 * Set cursor shape css (typically url())
 *
 * @param style css location of cursor style
 **/
function setCursor(style) {
    document.getElementsByTagName("body")[0].style.cursor = `${style}, auto`;
}

// queue the trail to change on mouse move
addEventListener("mousemove", (event) => {
    // set up timeouts to set positions in the trail.  on time out one duck
    // schedules the next
    const rec = (n) => {
        setDuck(n, event.clientX, event.clientY);
        if (n + 1 < ducks) {
            setTimeout(() => rec(n + 1), delay);
        }
    }

    rec(0);
});

// set up duck trail and cursor
addEventListener("load", () => {
    if (document.characterSet !== "UTF-8") {
        console.error("character set is not utf-8!  ducks will probably not render correctly :(");
        console.error(`Got ${document.characterSet}`);
    }
    // set cursor initially
    setCursor(`url("${duckLoc}")`);

    // bootstrap duck trail container
    const body = document.getElementsByTagName("body")[0];
    body.innerHTML += `<div id="${duckTrailID}"></div>`

    // initialize that amount of ducks
    const container = document.getElementById(duckTrailID);
    for (let i = 0; i < ducks; i++) {
        container.innerHTML += `<div id="${duckTrailID}${i}" style="position:absolute;left:-100px;top:-100px;pointer-events:none">🦆</div>`;
    }
});

// change cursor on click
addEventListener("mousedown", (event) => {
    if (event.button === 2) {
        // right click brings up an OS window, so mouseup doesn't seem to fire.
        // the right click menu seems to cover the cursor anyway
        return;
    }
    setCursor(`url("${duckSquishLoc}")`);
});

// and change it back
addEventListener("mouseup", () => {
    setCursor(`url("${duckLoc}")`);
});

