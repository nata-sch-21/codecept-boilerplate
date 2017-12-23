# codecept-boilerplate
The boilerplate for automatization tests with CodeceptJS and selenium-standalone

### Requirements
* [Java 8](https://java.com/en/download/help/index_installing.xml)
* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/)

### Installing

- Download packages
```
npm install
npm install -g codeceptjs-webdriverio
```
- Create output directories
```
node index.js
```
- Install selenium-standalone server
```
npm i selenium-standalone@latest -g
```
### Getting Started
- Change configs in codecept.json 
- Run following command and put filename of a new test
```
npm run new
or
codeceptjs gt
```
- Run selenium-standalone server
```
npm start
or
selenium-standalone start
```
- Run tests
```
npm run test
or
codeceptjs run --steps
```
- Get report
```
npm run report
or
codeceptjs run --reporter mochawesome
```