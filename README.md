# word-frequency-counter
A webapp which counts and displays the most recurring words on a page fetched from backend.

## Technologies
<b>Front-end : </b>React

<b>Back-end : </b>nodeJs with express

<b>npm Modules : </b>
- request (for http calls)
- cheerio (for web scrapping)
- concurrently (to run the react app and server at the same time)
- nodemon (to restart the server automatically on file changes)

## Working
- After launching the app, the server.js file request <http://terriblytinytales.com/test.txt> page and cheerio is used to traverse the DOM and extract the page content.

- The extracted content is fetched inside Form.js.

- Then inside Form.js the frequency of words are computed and sorted.

- Based on user's input the required number of words are rendered on the page.

## Demo

![alt text](https://github.com/leonatwork/word-frequency-counter/blob/master/videp/videodemo.gif "Demo")

## How to run
#### Pre-requisites
1. You need to have nodeJs installed in your PC, see : <https://nodejs.org/en/download/>
2. Install yarn, check : <https://yarnpkg.com/lang/en/docs/install/>

3. To check whether node and npm is installed succesfully, open your terminal and enter :
```
$ node --version
$ yarn --version
```
- node version > 6 and yarn version > 1.5 are recommended.

#### Getting the repository
Inside your terminal, run :
```
$ git clone https://github.com/leonatwork/word-frequency-counter.git
```

Then enter the project folder using :
```
$ cd word-frequency-counter
```
To install the required node modules, type
```
$ yarn
```
once inside the root folder to install node dependencies and again inside the client folder to install client and react dependencies.
#### Running the app
While inside the repo's root folder (word-frequency-counter), run :
```
$ yarn dev
```
This would run the web server on port 3000 (http://localhost:3000/).
