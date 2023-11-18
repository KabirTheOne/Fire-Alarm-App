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
if ('Notification' in window) {

    // Request permission to show notifications
    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
            // Create a notification
            var notification = new Notification('Title', {
                body: 'This is the body text of the notification.',
                icon: 'path/to/icon.png' // Optional: You can provide an icon for the notification
            });

            // Handle click on the notification
            notification.onclick = function() {
                console.log('Notification clicked');
                // You can add additional actions here
            };
        } else {
            console.warn('Permission for notifications denied');
        }
    });

} else {
    console.warn('Notifications not supported in this browser');
}