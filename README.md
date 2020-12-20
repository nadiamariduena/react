# ALL REACT RELATED

- Here you will find all the lessons and projects I ve been working on since the beginning of my journey with REACT

<br>

## REACT (Digital Career Institute)

#### React DCI lessons

[Lessons recap](https://github.com/nadiamariduena/react-recapitulation)

[Props beginner](https://github.com/nadiamariduena/react-props-video)

<br>

#### React Projects

[Shop](https://github.com/nadiamariduena/fluxushome-shop)

[API News](https://github.com/nadiamariduena/react-news-api)

<br>

##### Beginner

[Json map images 1](https://github.com/nadiamariduena/react-json-version1)

[Json map images 2](https://github.com/nadiamariduena/react-json-version2)

[responsive stretch](https://github.com/nadiamariduena/react-responsive-2)

[react-list-dynamicnavbar](https://github.com/nadiamariduena/react-list-dynamicnavbar)

[hamburger test1 responsive](https://github.com/nadiamariduena/react-responsive1)

[shop | props | search filter](https://nadiamariduena.github.io/react-router-intro-dci/)

[simple router set up](https://github.com/nadiamariduena/react-router-simple-layout)

<br>

<br>
<br>
<hr>
<br>
<br>

## REACT (YouTube tutorials)

#### React Router

<br>

_(private)_
[React Router1 ](https://github.com/nadiamariduena/react-router-introduction)

_(private)_
[React Router2 + Fetch ](https://github.com/nadiamariduena/react-router2-fetch)

[componentWillMount, componentDidMount ](https://github.com/nadiamariduena/component-did-and-will-mount)

[All about HOOKS](https://github.com/nadiamariduena/react-hooks-recap)

[react-lazyloading-suspense ](https://github.com/nadiamariduena/react-lazyloading-suspense)

<br>
<br>

##### React Final project for Digital Career Institute (DCI)

- All the apps related to the final project
  <br>

_(private)_
[Testing the menu dropdown and the skew scroll](https://github.com/nadiamariduena/menu-hirstory-and-scroll-skew-test)

[portfolio ak menu gsap test | {history} use (Menu only)](https://github.com/nadiamariduena/nm-port-menu-ak-test)

_(private)_
[NM portfolio](https://github.com/nadiamariduena/nadiamariduena-portfolio-with-react-createapp)

_(private)_
[GSAP / three.js animations for nm portfolio ](https://github.com/nadiamariduena/nadiamariduena-portfolio)

_(private)_
[Personal website meyoko final 2020 ](https://github.com/nadiamariduena/final-project)

<br>
<br>

##### Websites projects

[ANIMATED Menu by Wrong Akram "exercise" ](https://github.com/nadiamariduena/-anim-menu-react1)

[Firegram by Ninja "exercise"](https://github.com/nadiamariduena/Firegram)

[React & Redux Shopping Cart "exercise" ](https://github.com/nadiamariduena/first-redux-shopping-cart)

<br>

##### Animations

[smooth-skew-scrolling](https://github.com/nadiamariduena/react-smooth-skew-scrolling)

[3dflag-threejs](https://github.com/nadiamariduena/3dflag-threejs-react)

[image reveal](https://github.com/nadiamariduena/react-imgreveal-mini-portfolio1)

[image reveal gsap](https://github.com/nadiamariduena/react-img-reveal1-gsap)

[animated-portfolio-with-intersection-observer](https://github.com/nadiamariduena/animated-portfolio-with-intersection-observer)

[animated-portfolio-with-aos](https://github.com/nadiamariduena/animated-portfolio-with-aos)

[animation-effects-onpage-scroll AOS](https://github.com/nadiamariduena/animation-effects-onpage-scroll)

[Navigation-hide-show-onscroll](https://github.com/nadiamariduena/react-hide-show-onscroll)

<br>
<br>

#### React Projects "WEBPACK"

_(private)_
[testing with create react app](https://github.com/nadiamariduena/create-react-app)

<br>

<br>
<hr>
<br>
<br>

#### INSTALL REACT

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
<hr>
<br>
<br>
