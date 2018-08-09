![Logo of the project](https://storage.googleapis.com/tcc-api-insight.appspot.com/Olist.png)

# Work at Olist - Frontend Test


This repository contains a solution problem provide in: https://github.com/olist/work-at-olist-front, by olist enterprise to evaluate my programming skills 

## Installing / Getting started

### Setting up Dev
This project was created using the Javascript, HTML5 and the CSS preprocessor SASS.

During the development process was used some tools supplied by npm to serve the application local and build files .scss to .css 

And using the Mochajs to implements tests

To run the application local you need to setup some things first:

* First things first, you need to install node in your computer, following these instructions: [Node.js](https://nodejs.org/en/download/)
* Navigate to a folder you want to keep the project, and clone the application through the command `git clone https://gitlab.com/fekawassaki/work-at-olist-front.git` in your terminal.
* After that, run the follow comands in your terminal to install all dependencies for this project (If you using ubuntu add `sudo` in the beginning of each comand):
    - `npm install `
    - `npm install sass`
    - `npm install express`
    - `npm install ejs`

To Run the application local, you need to run the follow command (Your cmd needs to be in the same level as the serve.js file):
- `node serve.js`

Once it is done, you can access the application in your browser on `http://localhost:3000`

That's it!

## Developing

During development to build a file .scss to .css, you need to keep a cmd open running the follow command:
- `sass --watch sass/main.scss style/style.css`

### Prerequisites
If you are using the Microsoft Edge Browser or IE to test this project, you need to setup some configurations in your Windows, so please follow the steps below:

1. Click on **Start**, type **Edit group policy** and select it.
2. Expand the **User Configuration -> Administrative Templates -> Windows Components** folder.
3. Expand the **Microsoft Edge **folder
4. Double-click allows you to run scripts, like Javascript.
5. Choose Disable and click **OK** to confirm.


### Building

During development to build a file .scss to .css, you need to keep a cmd open running the follow command:
    - `sass --watch sass/main.scss style/style.css`

And another one cmd running the follow command (Your cmd needs to be in the same level as the serve.js file): 
    - `node serve.js`

If you change something in the project just reload the page to see them (http://localhost:3000)

### Deploying / Publishing

I'm using the GitHub Pages to host my application

The application is hosting in: [Work At Olist](https://felipekawa.github.io/work-at-olist-front/index.html)

To host a new GitHub Pages see this documentation: [GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

To deploy this application I create another GitHub repo and set up the Branch 'master' to host in Pages

### Relese a new Version and Publish
* Navigate to a folder you want to keep the project, and clone the GitHub application through the command `git clone https://github.com/FelipeKawa/work-at-olist-front.git` in your terminal.

* To publish the application on GitHub Pages just commit your changes in the Branch 'master' and make a push with those changes 


## Tests
To run tests just follow the command below in your terminal
- `npm install`
- `npm run test`


## Style guide

The design of the page can be found in the link below:

[Front-End Test Style Guide](https://www.figma.com/file/rsSlx8jDHls6nWXziElWTk/olist----front-end-test?node-id=0%3A1)

## Work Environment
* Text Editor / IDE:
    - Visual Studio Code;

* Libraries:
    - NPM (Just to run the project local and Build SASS to CSS);

* Computer:
    - Notebook Dell Inspiron 5457, Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz, Microsoft Windows 10 Home Single Language, 8GB RAM, NVIDIA GeForce 930M Intel(R) HD Graphics 520, 1Tb disk

    