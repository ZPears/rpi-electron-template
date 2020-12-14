# TEMPLATE FOR REACT/ELECTRON/RETROPIE APPS

### How to Build

To make an AppImage that can run on Picade retropie, run:

`yarn run electron:retropie`

Your AppImage will then be in dist/ at the top level.

### Working with Picade

This template is designed to make apps to run on a [picade](https://learn.pimoroni.com/picade). There some libraries in `src/picade` to help building apps for the picade (for example, mappings of the picade joystick/button inputs to KeyboardEvent keycodes).
