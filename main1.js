function activateWiFi() {
    alert("Please enable Wi-Fi in your device's settings.");
}

function activateBluetooth() {
    alert("Please enable Bluetooth in your device's settings.");
}


function goToNextScreen() {

    window.location.href = "index1.html";
}

function goToOldScreen() {

    window.location.href = "index.html";
}




document.getElementById("backButton").addEventListener("click", goToOldScreen);

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

const alarmSound = document.getElementById('alarmSound');
const activateAlarmButton = document.getElementById('activateAlarm');

activateAlarmButton.addEventListener('click', () => {

    alarmSound.play();
    document.getElementById("activateAlarm").addEventListener("click", activateAlarm);

    function activateAlarm() {
        alert("EVACUATE IMMEDIALTELY!!", "If you have an emergency and need to contact the fire brigade, please dial the local emergency number: 101");

    }
});

function activateAlarm() {
    alert("EVACUATE IMMEDIALTELY!!", "If you have an emergency and need to contact the fire brigade, please dial the local emergency number: 101");

}