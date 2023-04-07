#### Exercise 0.4(Tracing https://studies.cs.helsinki.fi/exampleapp/notes) Sequence Diagram
```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser:HTML document (notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: CSS file (main.css)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: JavaScript file (main.js)
    deactivate server

    Note right of browser: The browser now executes the JavaScript code that fetches the JSON from the server.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: [{ "content": "hello world", date: "2023-04-04T18:06:07.319Z"}, ...]
    deactivate server
    
    Note right of browser: The browser executes the callback function that renders the notes.

    user->>browser: User text input.
    Note right of browser: User input activates <form> tag sending a POST to the server at the address location listed below.
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: The server creates a note object with the body of the post request, then pushes it into the array.Then (redirects)<br>calls a GET request to the address listed below. The server responds with status code:302(URL redirect.)
    server->>browser: https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    Note right of browser: This process then follows the diagram at the very top.```