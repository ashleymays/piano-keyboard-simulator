## Folder Structure

The server code is structured as follows:

```py
src
|
+-- audio           # access audio samples for an instrument
|
+-- names           # access the list of available instruments for the keyboard
|
+-- middlewares     # handles actions that happen during the request and response
|
+-- octokit         # configuration for accessing the instruments
|
+-- app.ts          # create the server
|
+-- index.ts        # start the server
|
+-- routes.ts       # add api routes
```

The API is organized into modules so that it's easier to update and understand.