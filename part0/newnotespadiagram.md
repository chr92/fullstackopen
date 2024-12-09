sequenceDiagram
    participant User
    participant Browser
    participant Server 
    participant NotesArray

    User ->> Browser: Fill and submit form
    Browser ->> Browser: Handle form submit with JavaScript (preventDefault)
    Browser ->> Browser: Create new note (content & date)
    Browser ->> NotesArray: Add new note
    Browser ->> Browser: Rerender notes list (redrawNotes)
    Browser ->> Server: HTTP POST /new_note_spa (JSON data)
    Server ->> Server: Parse JSON data
    Server ->> NotesArray: Add new note to server array
    Server -->> Browser: HTTP 201 Created
    Browser ->> Browser: No page reload (stays on the same page)
