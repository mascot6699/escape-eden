Requirements
===========
* [Compass](http://compass-style.org/)
* [Bower](http://bower.io/)

Setup
=====
### Configuration
Copy the default configuration to config.js

`cp html/js/config.example.js html/js/config.js`

Customize the configuration. Make sure to set the correct api url

`nano html/js/config.js`

### Libraries
Get the required libraries with bower

`bower install`

### Stylesheets
Compile the SCSS stylesheets with compass

`compass compile`

### Serving the web app
Serve the files in the `html` folder with any web server that can serve static files (e.g. nginx, apache).

For example, to serve the files with SimpleHTTPServer you would run:

`cd html && python -m SimpleHTTPServer 8000`
