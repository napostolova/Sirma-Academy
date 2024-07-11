function calculate() {
    let radiusValue = document.querySelector('#radius').value;
    let volumeElement = document.querySelector('#volume');

    let volume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);

    volumeElement.value = volume.toFixed(4);
}