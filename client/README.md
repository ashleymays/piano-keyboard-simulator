## Folder Structure

The user interface code is structured as follows:

```py
src
|
+-- components      # the keyboard and all of its parts
|
+-- lib             # code not specific to any component or business logic
|
+-- store           # global states
|
+-- styles          # global styles for the user interface
|
+-- test            # unit and integration test setup
```

Most of the code is contained in the `components` folder. Anything that relates to the component (styles, JSX, etc.) is placed inside the component folder where it's used. This keeps the codebase easy to update and understand.