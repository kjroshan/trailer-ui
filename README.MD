# Trailer UI

A UI app for watching information about movies and watching their trailers.

## Building and Executing

* Clone/Download the repo
* Inside the root folder of the application
```bash
npm install # To install packages
npm start # To to build and run
```
* To create and run a docker image of the application
```bash
docker build -t image-name/tag . -- To make a docker image
docker run --name trailerui -p 8080:8080 image-name/tag -- To create docker container
```
## Accessing Application

* This application depends on the service provided by the **film-trailer** api. Configuration information for the film-trailer app can be found at **https://github.com/kjroshan/film-trailer**

* You can open the application in web browser using any of the following URLs
**http://localhost:8080/**
**http://localhost:8080/pc-se/film**
**http://localhost:8080/pc-se/film/the-vanishing-of-sidney-hall-2017**
```
**NOTE**
Make sure the endpoints given in /src/server/config.js and docker-compose file is correct as per the environment.
Make sure you have configured the film-trailer app before trying the UI.
https://github.com/kjroshan/film-trailer
```

## Building docker containers for for API and UI Interface

* Copy the file named **docker-composer-yml** from **root folder of the film-trailer** repo to **the folder containing both the applications**.

```
**NOTE**
Maintain the indentation as given in the yaml file
Replace the name/tag using preffered name and tag.
Ex for name/tag:  roshan/film-trailer:latest, roshan/trailer-ui:latest
```

* Create a file named **_.sh** inside the folder containing both the applications with the following code or copy the file from root folder of the film-trailer repo into the folder outside.
```bash
docker-compose stop
docker rm $(docker ps -a -f status=exited -q)
docker rmi -f $(docker images -f dangling=true -q)

printf  '\n\n\n\n####### Building trailer-ui #######\n\n'
cd film-trailer && git clean -fxd && git reset --hard && git checkout master && git clean -fxd && git reset --hard
docker build -t name/tag .
cd ..

printf  '\n\n\n\n####### Building film-trailer #######\n\n'
cd trailer-ui && git clean -fxd && git reset --hard && git checkout master && git clean -fxd && git reset --hard
docker build -t name/tag .

pwd

docker-compose up -d
```
```
---
**NOTE**
Replace the name/tag using preffered name and tag.
Ex for name/tag:  roshan/film-trailer:latest, roshan/trailer-ui:latest
---
```
* Your folder structure should like the following
```
.
+-- film-trailer
+-- trailer-ui
+-- docker-compse.yml
+-- _.sh
```
* execute the command **./_.sh**
```
---
**NOTE**
If you are getting permission denied error run **sudo chmod 775 _.sh** and try again
---
```

## Prerequisites

To built, Node.js should be installed on computer.

##  Implementation Details

* The application has used the following framework and libraries
-- react
-- react-router-dom to route between different views in the client side. This could be done from the components as well, but for url based routing using react router is easy and clean.
-- redux - for centralized state management, since we are looking an application which may get more components and features having a centralized store will help. we can also use flux or can create custom data store.
--  redux-thunk - help while using redux in many ways like give a dispatch function to return later, delays the dispatch etc.
-- Express (https://expressjs.com/) as http framework
-- axios -- for making http requests
-- lodash - for performant utility functions like map, forEach, find etc.
-- morgan -- For http logging
-- bluebird -- For promises
-- babel -- for transpiling ES6 code
-- gulp -- task runner used for building the application.
-- browserify - for converting javascript files written in nodejs style modules into a bundle.
-- babel - for converting javascript written later versions of javascript to a target version which is supported by browsers.
-- vinyl-source-stream -- to convert the readable stream returned by browserify into vinyl stream expected by gulp


### Routes
Routes are created using route creator login where incase of new routes we just to provide it with the path the implementation function. This will help us with a central place to change the route creation logic and  passing settings and environment variables common across the routes. Routes are implemented in **/src/server/routes** folder.

### Redux store
A reduc store is created for storing movie list and Youtube video id, components can call the actions and action will get the requested data and dispatch the data to the reducer which will return the updated state. The state update will result in re-rendering the component which is listening to the changes happening in store. This helps in avoiding passing around data from parent to child or from child to parent and can keep the state management outside the components and containers. the store implementation can be found in /src/client/store.

### Assests
Assets are created for components, containers and service requestors. These assets can be found in /src/client/Assets.





