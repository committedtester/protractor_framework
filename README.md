# Protractor Disclaimer
* My first protractor based framework. 
* A good excuse to step away from C#/Visual Studio into JavaScript/GitHub.
* The following is designed so that I can repeat this on a clean Windows machine

# To replicate locally
* Install node.js
* Install npm
* Configure Environment Variables to access protractor globally C:\Users\<USERNAME>\AppData\Roaming\npm
* npm install (based on the package.json)

* webdriver-manager start
* if this fails, try webdriver-manager update
* Validate server status via http://localhost:4444/wd/hub/static/resource/hub.html

# Then install your javscript editor of choice
* Eclipse has some good protractor extensions
* I've personally gone to vs code

# To Execute
* Go to the deployment directory, subfolder conf
* protractor conf.js