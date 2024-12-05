const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to server');
    ws.send(JSON.stringify(["2", "uniqueId", "BootNotification", {
        "chargePointVendor": "VendorName",
        "chargePointModel": "ModelName"
    }]));
});

ws.on('message', (message) => {
    console.log('Received:', message);
});

ws.on('close', () => {
    console.log('Connection closed');
});
