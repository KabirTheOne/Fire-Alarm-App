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


const alarmSound = document.getElementById('alarmSound');
const activateAlarmButton = document.getElementById('activateAlarm');

activateAlarmButton.addEventListener('click', () => {

    alarmSound.play();
    document.getElementById("activateAlarm").addEventListener("click", activateAlarm);

    function activateAlarm() {
        alert("EVACUATE IMMEDIALTELY!!", "If you have an emergency and need to contact the fire brigade, please dial the local emergency number: 101");

    }
});
if ('Notification' in window) {


    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {

            var notification = new Notification('Title', {
                body: 'This is the body text of the notification.',
                icon: 'path/to/icon.png'
            });


            notification.onclick = function() {
                console.log('Notification clicked');

            };
        } else {
            console.warn('Permission for notifications denied');
        }
    });

} else {
    console.warn('Notifications not supported in this browser');
}