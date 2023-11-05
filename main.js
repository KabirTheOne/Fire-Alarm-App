function activateWiFi() {
    alert("Please enable Wi-Fi in your device's settings.");
}

function activateBluetooth() {
    alert("Please enable Bluetooth in your device's settings.");
}


function goToNextScreen() {

    window.location.href = "index1.html";
}




document.getElementById("wifiButton").addEventListener("click", activateWiFi);
document.getElementById("bluetoothButton").addEventListener("click", activateBluetooth);
document.getElementById("navigateButton").addEventListener("click", goToNextScreen);

const cameraFeed = document.getElementById('cameraFeed');
const startCameraButton = document.getElementById('startCamera');
const stopCameraButton = document.getElementById('stopCamera');
let stream;

startCameraButton.addEventListener('click', async() => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraFeed.srcObject = stream;
        cameraFeed.play();
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
});

stopCameraButton.addEventListener('click', () => {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        cameraFeed.srcObject = null;
    }
});