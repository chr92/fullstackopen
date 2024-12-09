sequenceDiagram
    participant User
    participant Browser
    participant Server

    User ->> Browser: Visit SPA URL
    Browser ->> Server: HTTP GET /spa
    Server -->> Browser: Send HTML (SPA layout)
    Browser ->> Server: HTTP GET /spa.js
    Server -->> Browser: Send JavaScript (spa.js)
    Browser ->> Server: HTTP GET /data.json
    Server -->> Browser: Send Notes data (JSON)
    Browser ->> Browser: Render notes using DOM API
    Browser ->> User: Display rendered SPA
