# Jobster

Project in Action - [Jobster](https://)

#### React Course

#### Run The App Locally

```sh
npm run install && npm start
```

- visit url http://localhost:3000/

#### Setup React App

```sh

npx create-react-app myApp

```

```sh

npx create-react-app@latest myApp

```

- set editor/browser side by side
- copy/paste assets and readme from complete project

#### 1) Spring Cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### 2) Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

#### 3) Create Landing page - Structure

- create folder assets/css/images
- create pages folder
- create LandingPage.js component
- import logo.svg and main.svg
- export const LandingPage = () => {
  return (
  <main>
  <nav>
  <img src={logo} alt='jobster logo' className='logo' />
  </nav>
  <div className='container page'>
  {/_ info _/}
  <div className='info'>
  <h1>
  job <span>tracking</span> app
  </h1>
  <p>some text</p>
  <button className='btn btn-hero'>Login/Register</button>
  </div>
  <img src={main} alt='job hunt' className='img main-img' />
  </div>
  </main>
  );
  }; 
  - import LandingPage to app.js

  #### 4) Create wrappers folder

  - assets/wrappers
  - only responsible for styling

  #### 5) Create logo component

  - logo built in Figma
  - [Cool Images](https://undraw.co/)

  - create components folder in source
  - create Logo.js
  - move import and image logic
  - export as default
  - utilize index.js
  - import logo from '../assets/images/logo.svg';

    const Logo = () => {
    return <img src={logo} alt='jobify' className='logo' />;
    };

    #### 6) Setup pages

    - create Error, Register, Dashboard pages
    - basic return
    - create index.js
    - import all the pages
    - export one by one
    - basically the same, as in components
    - import App.js
