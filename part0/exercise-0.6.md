#### Exercise 6

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    
    activate server
    Note Right of browser: Payload: Content-type:application/json {content: "I am a legend", date: "2025-04-16T21:08:52.785Z"}
    server-->>browser: HTTP 201 Created {"message":"note created"}
    deactivate server
    

```
