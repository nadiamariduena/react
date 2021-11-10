
<br>
<hr>
<br>
<br>

# TO CREATE A BASIC APP 🌵

#### TYPE THE FOLLOWING IN THE UBUNTU CONSOLE

```javascript
cd // to go to the root
ls // to see all the folders
// once you choose a folder , type this:
cd Desktop
ls // to see more folders inside of the Desktop
// since i want to create a folder inside the Documents , i can type the command or simply i just create a folder there, like MYPERSO-MEYOKO , after i created the folder i do this:
cd MYPERSO-MEYOKO
//
```

#### You will have something like this

```javascript
// Desktop/MYPERSO-PROJECTS
```

#### Once you got that, type this:

```javascript
// just create a folder where you want to work and type that inside of it
//
//Example
/Desktop/MYPERSO-MYPROJECTS$ npm install -g create-react-app

// ETC ETC
```

<br>

### THE APP creation

- READ THE COMMENTS

```javascript
// 1
npx create-react-app my-projectname
// (npx comes with npm 5.2+ and higher, see instructions for older npm versions)
//
// -----------
//     or
// -----------
// 1
npm init react-app my-projectname
// npm init <initializer> is available in npm 6+
// 2
cd my-projectname // meyoko-portfolio , meyoko2020 etc
// you can type : code . and open vs code from the ubuntu terminal and then type: npm start from there
npm run start

// or

code . // if you want to launch Visual Studio
//
```

#### RESULT

- AFTER THE INSTALLATON YOU HAVE TO HAVE SOMETHING LIKE THIS, but if there s something you dont see it you will have to install it manually.

- GSAP, SCSS AND OTHER DEPENDENCIES MUST BE INSTALLED SEPARATELY

```javascript
{
  "name": "nm-port-menu-akram-test",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.5.0",
    "gsap": "^3.5.1",
    "node-sass": "^4.14.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

<br>
<br>
<br>

# 🌵

#### INSTALL REACT (manually)

```javascript

npm i react
npm i react-dom
npm i react-scripts

// or type  -----------

npm i react react-dom react-scripts

//   -----------

npm i node-sass --save // if sass shows some error, read the comment below
npm i autoprefixer@9.8.0
npm i gh-pages --save-dev
npm i react-router-dom

npm i aos --save //animation dependency
```

### SCRIPTS

```javascript
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "killnode": "lsof -ti :8000 | xargs kill"
  },
```

<br>

#### SASS related issues

```javascript
// 1 if you already installed it and it caused issues
npm uninstall node-sass
// 2
npm install node-sass@4.14.1
//  https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0
```

<br>

### ISSUES

##### Issues with sass after upgrading node

- NPX issues

- node-sass-does-not-yet-support-your-current-environment-windows-64

- Gyp module not found

_(private)_

[Sass | npx issues](https://github.com/nadiamariduena/issues-draco-pipeline-npx-sass)



<br>
<br>
<hr>
<br>
<br>

# SERVICE WORKER 🦄

> APPARENTLY "service worker" is no longer added when creating a react app

- TO SOLVE THIS:

```javascript
npx create-react-app my-app --template cra-template-pwa
```

<br>
<br>
<br>

#### FOLLOW THE STEPS ☁️

- TYPE THE FOLLOWING IN THE UBUNTU CONSOLE

```javascript
cd // to go to the root
ls // to see all the folders
// once you choose a folder , type this:
cd Desktop
ls // to see more folders inside of the Desktop
// since i want to create a folder inside the Documents , i can type the command or simply i just create a folder there, like MYPERSO-PROJECTS , after i created the folder i do this:
cd MYPERSO-PROJECTS
//
```

#### You will have something like this

```javascript
// /Desktop/MYPERSO-PROJECTS$
// indicates you are inside the folder and you can now create the app
```

#### Once you got that, type this:

```javascript
// just create a folder where you want to work and type that inside of it
//
//Example
/Desktop/MYPERSO-PROJECTS$ npm install -g create-react-app
//  OR
/Desktop/MYPERSO-PROJECTS$ npx create-react-app final-nm-npx --template cra-template-pwa

```

<br>

##### READ THE COMMENTS 🌥️

<br>

```javascript
// 1 once you have created a folder in which you want to create an app, type the following:
npm install -g create-react-app
// or
/Desktop/MYPERSO-PROJECTS$ npx create-react-app final-nm-npx --template cra-template-pwa
//
//https://stackoverflow.com/questions/65060150/not-getting-service-worker-with-create-react-app
//
//
// 2
cd final-nm-npx // will enter the app you just created
// 3 will launch VS code
code .
// 4
// type this to launch the app on the browser
npm run start
```

<br>
<br>
<hr>
<br>
<br>

## How to deploy React App to GitHub Pages

[check the video](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

- 1 npm init react-app my-app

- 2 Install gh pages

```javascript
npm install gh-pages --save-dev
```

- 3 Create a repository in Github (copy the link of the repo)

> example:  
> git remote add origin git@github.com:Yuribenjamin/my-app.git

<br>

- 4 Go back to VS and type:

```javascript
// a
git init //(press enter)
//  b
git commit -m "hello new update" //(press enter)
// c  paste the repo name
git remote add origin git@github.com:Yuribenjamin/my-app.git
// d
git push -u origin master // -u origin master is only used when its the first time you are going to do the connection to the repo, later you only use "git push".

```

<br>

##### 5 Once the **connection to Git** has been made, **proceed to publish the page**.

### 🌴

##### 6 Go to your scripts (package.json) and add the following:

- Go to the settings of your freshly created repo, scroll down to the bottom where it says **GitHub Pages**, once there, click the arrow and choose master (just to get the link) then click it back to None.

> (if you are not careful about turning it back to normal , **it will be a mess**)

<br>

[<img src="./src/img/git-deploy1.gif"/>]()

```javascript
 {
 //  ****   ADD the homepage, get rid of the dot at the end of the link ***
  "homepage": "https://nadiamariduena.github.io/firstpersoncontrol-threejs/",
  //
  "name": "firstperson-control1-threejs",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.3",
    "@testing-library/user-event": "^12.6.2",
    "node-sass": "^4.14.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "three": "^0.125.2",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    //  Add this  2 lines   ***** you need them to send the data to git
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    //
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    // you need this to make it work   ****
    "gh-pages": "^3.1.0"
  }
}



```

#### 7) verify that everything is fine

#### 8) Save the new data

```javascript
// a
git add . //(press enter)
//  b
git commit -m "hello new update | homepage added to package.json etc" //(press enter)
//
// c  paste the repo name
git push

```

#### 9) 🚀 type the following to prepare the packet of data you are going to send to git pages

```javascript
npm run build
```

 <br>

#### 10) 🚀🚀 WE ARE READY to launch...

- TYPE:

```javascript
npm run deploy
```

- **AFTER YOU TYPE** _"npm run deploy"_ , wait until it says it s "deployed", then wait 30 secs until the **url link** inside the settings (on the bottom) **turns from blue to green.**

<br>

[<img src="./src/img/predator-countdown.gif"/>]()

# 🚀🚀

## TEST IT

- **Copy** the homepage "url link" and **paste** it in a browser

<br>

```javascript
// example:
"homepage": "https://nadiamariduena.github.io/firstpersoncontrol-threejs/",
```

<br>
<br>

[<img src="./src/img/rocket-fail.gif"/>]()

<br> 
<br>

### 11) IF FOR SOME REASON... 🔴

##### If you get a Blank page, add the following inside the App.js

> basename={process.env.PUBLIC_URL}

[Getting blank page after react app publish in github](https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github)

<br>

- LIKE SO

```javascript
import React, { Component } from "react";
// BrowserRouter    ***
import { BrowserRouter, Switch, Route } from "react-router-dom";
//
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      // ******    HERE    *******
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div id="wrapper-app">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/portfolio" component={Portfolio} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
```

#### 12) Save the new data (AGAIN)

```javascript
// a
git add . //(press enter)
//  b
git commit -m "hello new update |  I added, BrowserRouter basename={process.env.PUBLIC_URL}" //(press enter)
//
// c  paste the repo name
git push

```

#### 13) 🚀 type the following to prepare the packet of data you are going to send to git pages

```javascript
npm run build
```

 <br>

#### 14) 🚀🚀 WE ARE READY to launch...

- TYPE:

```javascript
npm run deploy
```

# 🚀🚀

## TEST IT AGAIN ...

- **Copy** the homepage "url link" and **paste** it in a browser

```javascript
// example:
"homepage": "https://nadiamariduena.github.io/firstpersoncontrol-threejs/",
```

### It should work now :)

[check the video](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

<br>
<br>

<hr>
<br>
<br>

## Simple React Snippets 🌵

```javascript

imr	Import React
imrc	Import React / Component
imrs	Import React / useState
imrse	Import React / useState useEffect
impt	Import PropTypes
impc	Import React / PureComponent
//
cc	Class Component
ccc	Class Component With Constructor
cpc	Class Pure Component
//
sfc	Stateless Function Component
//
cdm	componentDidMount
uef	useEffect Hook
cwm	componentWillMount
cwrp	componentWillReceiveProps
gds	getDerivedStateFromProps
scu	shouldComponentUpdate
cwu	componentWillUpdate
cdu	componentDidUpdate
cwu	componentWillUpdate
cdc	componentDidCatch
gsbu	getSnapshotBeforeUpdate
ss	setState
ssf	Functional setState
usf	Declare a new state variable using State Hook
ren	render
rprop	Render Prop
hoc	Higher Order Component
//
//
// https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
```

<br>

#### EXAMPLE

```javascript
rfc;
// example

import React from "react";

export default function Shop() {
  return (
    <div>
      <h1>rfc HELLO shopppp</h1>
    </div>
  );
}
```

#### ANOTHER ONE

```javascript
rcc→	class component skeleton
rrc→	class component skeleton with react-redux connect
rrdc→	class component skeleton with react-redux connect and dispatch
rccp→	class component skeleton with prop types after the class
rcjc→	class component skeleton without import and default export lines
rcfc→	class component skeleton that contains all the lifecycle methods
rwwd→	class component without import statements
rpc→	class pure component skeleton with prop types after the class
rsc→	stateless component skeleton
rscp→	stateless component with prop types skeleton
rscm→	memoize stateless component skeleton
rscpm→	memoize stateless component with prop types skeleton
rsf→	stateless named function skeleton
rsfp→	stateless named function with prop types skeleton
rsi→	stateless component with prop types and implicit return
fcc→	class component with flow types skeleton
fsf→	stateless named function skeleton with flow types skeleton
fsc→	stateless component with flow types skeleton
rpt→	empty propTypes declaration
rdp→	empty defaultProps declaration
con→	class default constructor with props
conc→	class default constructor with props and context
est→	empty state object
cwm→	componentWillMount method
cdm→	componentDidMount method
cwr→	componentWillReceiveProps method
scu→	shouldComponentUpdate method
cwup→	componentWillUpdate method
cdup→	componentDidUpdate method
cwun→	componentWillUnmount method
gsbu→	getSnapshotBeforeUpdate method
gdsfp→	static getDerivedStateFromProps method
cdc→	componentDidCatch method
ren→	render method
sst→	this.setState with object as parameter
ssf→	this.setState with function as parameter
props→	this.props
state→	this.state
bnd→	binds the this of method inside the constructor
disp→	MapDispatchToProps redux function
```

<br>
<br>
<br>
<hr>
<br>
<br>

# VERCEL 👾 SET UP

<br>

<!-- [check the video](https://www.youtube.com/watch?v=lAJ6LyvW_cw) -->

```javascript
//  1 type , this will install it on the app
 sudo npm i -g vercel
//  2 type this , here you will start the process
  vercel
//
// After loading, it will ask you some stuff
//
// 1) do you want to set up and deploy it to this directory? answer "Y"
? Set up and deploy “~/Documents/all-Desktop/MYPERSO-YOURPROJECT/nadiamariduena-final/scrolltest2-nm-npx”? [Y/n] y
//
// TO which scope/account?
? Which scope do you want to deploy to? nadiamariduena
// Do you have any existing project with this name project? since its new , i will say "n"
? Link to existing project? [y/N] n
// is this really your project name? type ENTER
? What’s your project’s name? scrolltest2-nm-npx
// to this root? type ENTER
? In which directory is your code located? ./
// wait a bit ...
> Upload [====================] 98% 0.2sAuto-detected Project Settings (Create React App):
- Build Command: `npm run build` or `react-scripts build`
- Output Directory: build
- Development Command: react-scripts start
//
// Do you want vercel override your code settings? type "n"
? Want to override the settings? [y/N] n
//
// then wait
🔗  Linked to nadiamariduena/scrolltest2-nm-npx (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/nadiamariduena/scrolltest2-nm-npx/64agox0gj [2s]
//
// COPY the link to the browser and check the progress
✅  Production: https://scrolltest2-nm-npx.vercel.app [copied to clipboard] [1m]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/nadiamariduena/scrolltest2-nm-npx/settings
```

#### COPY the link to the browser and check the progress

```javascript
// test example
✅  Production: https://scrolltest2-nm-npx.vercel.app
```

<br>
<br>

## TO DELETE 🌥️

- Delete the folder vercel above/below the "node_modules" in your app.

- then go to vercel and click on the 3 dots inside the app project, remove it!, then click on overview and you will see the "app" you deleted is still there, click on remove , it will bring you to another page where you have to accept that you want it removed, DONE!
