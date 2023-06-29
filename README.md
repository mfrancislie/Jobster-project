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

#### 3) Create-Landing-Page - Setup

- zoom level 175%
- markdown preview extension
- get something on the screen
- react router and styled components right after
- create pages directory in the source
- for now Landing.js
- create component (snippets extension)
- setup basic return

```js
<h4>Landing Page<h4>
```

- import logo.svg and main.svg
- import Landing in App.js and render

##### 4) Landing Page - Structure

- Landing.js

```js
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>some text</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
```

#### 5) Styled Components - Basic Setup

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from 'styled-components';

const El = styled.el`
  // styles go here
`;
```

- element can be any html element (div,button,section, etc)

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

#### 6) Styled Components - Wrap Component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

#### 7) Wrappers

- assets/wrappers
- only responsible for styling

#### 8) Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### 9) Logo Component

- create <b>components</b> folder in source
- create Logo.js
- move import and image logic
- export as default
- utilize index.js

Logo.js

```js
import logo from '../assets/images/logo.svg';

const Logo = () => {
  return <img src={logo} alt="jobify" className="logo" />;
};

export default Logo;
```

#### 10) Setup Pages

- create Error, Register, Dashboard pages
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js

#### 11) React Router 6

- Please Reference React Router 6 Section

- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install react-router-dom@6
```

- import three components from router

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing, Register, Dashboard } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- go to Landing.js

```js
import { Link } from 'react-router-dom';

return (
  <Link to="/register" className="btn btn-hero">
    Login / Register
  </Link>
);
```

#### 12) Error Page

```js
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

return (
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>text</h3>
      <p>text</p>
      <Link to="/">back home</Link>
    </div>
  </Wrapper>
);
```
