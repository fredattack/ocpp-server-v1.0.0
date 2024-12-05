const WebSocket = require('ws');

const port = 8080; // Choisissez un port pour votre serveur
const server = new WebSocket.Server({ port });

console.log(`OCPP Server started on port ${port}`);

server.on('connection', (ws, req) => {
    console.log('New connection established');

    ws.on('message', (message) => {
        console.log('Received:', message);

        // Réponse simple pour OCPP messages (exemple, personnalisez selon vos besoins)
        const response = JSON.stringify(["3", message[1], {}]);
        ws.send(response);
    });

    ws.on('close', () => {
        console.log('Connection closed');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});
