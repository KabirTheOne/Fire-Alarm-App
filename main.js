function activateWiFi() {
    alert("Please enable Wi-Fi in your device's settings.");
}

function activateBluetooth() {
    alert("Please enable Bluetooth in your device's settings.");
}

function goToAboutScreen() {

    window.location.href = "about.html";
}

function goToConnectionScreen() {

    window.location.href = "connection.html";
}

function goToAccountScreen() {

    window.location.href = "account.html";
}

function goToSettingsScreen() {

    window.location.href = "settings.html";
}


document.getElementById("settings").addEventListener("click", goToSettingsScreen);
document.getElementById("account").addEventListener("click", goToAccountScreen);

document.getElementById("about").addEventListener("click", goToAboutScreen);
//document.getElementById("wifiButton").addEventListener("click", activateWiFi);//
//document.getElementById("bluetoothButton").addEventListener("click", activateBluetooth); //

document.getElementById("connection").addEventListener("click", goToConnectionScreen);

function goToFormScreen() {

    window.location.href = "former.html";
}

document.getElementById("forms").addEventListener("click", goToFormScreen);



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