function displayWindowSize() {
    let currentHeight = window.innerHeight;
    let currentWidht = window.innerWidth;

    document.querySelector('#height').innerHTML = `Height: ${currentHeight}`;
    document.querySelector('#width').innerHTML = ` Width: ${currentWidht} `;
}

window.onresize = displayWindowSize;