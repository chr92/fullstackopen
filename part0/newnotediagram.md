sequenceDiagram
    participant User 
    participant Browser 
    participant Server
    participant NotesArray

    User ->> Browser: Submit form
    Browser ->> Server: HTTP POST /new_note
    Server ->> NotesArray: Add new note
    Server -->> Browser: HTTP 302 Redirect to /notes
    Browser ->> Server: HTTP GET /notes
    Server -->> Browser: Send Notes page (HTML)
    Browser ->> Server: Request main.css
    Server -->> Browser: Send main.css
    Browser ->> Server: Request main.js
    Server -->> Browser: Send main.js
    Browser ->> Server: Request data.json
    Server -->> Browser: Send data.json
