
#Getting Started
```
git clone https://github.com/mjwheatley/Ionic2-Meteor1.3-Starter.git

cd Ionic2-Meteor1.3-Starter/app/

mkdir public/stylesheets

npm install

npm start
```

`npm install` will load all the dependencies for angular2-meteor, ionic2, and dev dependencies for building the application.


`npm start` will run the scripts in the package.json to build and start the application.

The scripts in package.json help build the application by using "node-sass" to include the ionic-angular and ionicons node modules when compiling the scss files, "copyfiles" to copy the needed fonts to the applications public directory, and "nodemon" to watch for changes in scss files and rebuild on the fly.  Finally they will execute meteor run, passing in a settings.json, to build and start the meteor application.


#Ionic stylesheets
The build script will output platform specific css bundles into the public/stylesheets/ directory that we created.
The client/index.html includes links to these stylesheets.
The method setStyle() in client/app.ts file will set only one of the stylesheets to be active based on the platform style class that Ionic adds to the body tag.

#Changes to original version of mjwheatley
* Updated Meteor to 1.3.4.1
* Fixed typings
* Upgraded to Ionic 2.0.0-beta.9
* Added: npm run meteor-ios
* Tested on ios simulator

##Todo
* Update angular
* Fix args, dev-mode in client/lib/meteor-ionic-app.ts

##Notes
* https://github.com/driftyco/ionic/commit/73635f393974dc6c44f69cf7814d22243f80a5c5
