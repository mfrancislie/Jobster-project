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

##### 4) Create Landing Page - Structure

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

#### 7) Create Wrappers folder

- assets/wrappers
- only responsible for styling

#### 8) Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### 9) Create Logo Component

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

#### 12) Error Page - setup

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

#### 15) Auto Imports

- use while developing
- only sparingly while recording
- better picture
- messes with flow
- just my preference
- still use them, just not all the time

#### 16) Register Page - Setup

```js
import { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
// redux toolkit and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState);

  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>

          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}
```

#### 17) Switch To React 18

- index.js

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
```

#### 18) Create FormRow Component

- create FormRow.js in <b>components</b>
- setup import/export
- setup one for email and password
- hint "type,name,value"

```js
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
```

#### 19) add Toggle Member to register page

```js
const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
};

return (
  <Wrapper>
    {/* control h3 */}

    <h3>{values.isMember ? 'Login' : 'Register'}</h3>

    {/* toggle name */}

    {!values.isMember && (
      <FormRow
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
      />
    )}

    {/* right after submit btn */}
    {/* toggle button */}

    <p>
      {values.isMember ? 'Not a member yet?' : 'Already a member?'}

      <button type="button" onClick={toggleMember} className="member-btn">
        {values.isMember ? 'Register' : 'Login'}
      </button>
    </p>
  </Wrapper>
);
```

#### 20) Handle Change and Empty Values

[Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

Register.js

```js
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log(`${name}:${value}`);
  setValues({ ...values, [name]: value });
};

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    console.log('Please Fill Out All Fields');
    return;
  }
};
```

#### 21) React Toastify

[React Toastify](https://www.npmjs.com/package/react-toastify)

```sh
npm install --save react-toastify
```

App.js

````js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


return </Routes>
<ToastContainer />
<BrowserRouter>

Register.js

```js
import { toast } from 'react-toastify';

if (!email || !password || (!isMember && !name)) {
  toast.error('Please Fill Out All Fields');
  return;
}
````

- modifications

position

<ToastContainer position='top-center' >

index.css

```css
.Toastify__toast {
  text-transform: capitalize;
}
```

#### 22) User Slice - Setup

- features/user/userSlice.js

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
```

- create store.js

```js
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
```

- index.js

```js
import { store } from './store';
import { Provider } from 'react-redux';

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
```

```sh
npm install @reduxjs/toolkit react-redux
```

#### 23) RegisterUser, LoginUser - Placeholders

- userSlice.js

```js
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(`Register User : ${user}`);
  }
);
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login User : ${user}`);
  }
);
```

- Register.js

```js
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
};
const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    toast.error('Please Fill Out All Fields');
    return;
  }
  if (isMember) {
    dispatch(loginUser({ email: email, password: password }));
    return;
  }
  dispatch(registerUser({ name, email, password }));
};
```

#### 24) HTTP Methods

- GET - get resources from the server
- POST - submit resource to the server
- PUT/PATCH - modify resource on the server
- DELETE - delete resource form the server

```js
// GET
axios.get(url, options);
// POST
axios.post(url, resource, options);
// PATCH
axios.patch(url, resource, options);
// DELETE
axios.delete(url, options);
```

```sh
npm install axios
```

25. API
    Root URL

https://jobify-prod.herokuapp.com/api/v1/toolkit

NODE COURSE

Register USER
https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register

POST /auth/register

{name:'john',email:'john@gmail.com',password:'secret'}

sends back the user object with token

Register USER - TESTING()
POST /auth/testingRegister
{name:'john',email:'john@gmail.com',password:'secret'}
sends back the user object with token

Login USER
POST /auth/login
{email:'john@gmail.com',password:'secret'}
sends back the user object with token

Update USER
PATCH /auth/updateUser
{ email:'john@gmail.com', name:'john', lastName:'smith', location:'my location' }
sends back the user object with token

#### 26) Custom Axios Instance

- utils/axios.js

```js
import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export default customFetch;
```

userSlice.js

```js
import customFetch from '../../utils/axios';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/testingRegister', user);
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  }
);
```

#### 27) Register User - http(ajax)

userSlice.js

```js
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
)
   extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Hello There ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    }
  }

```

#### Extra Reducers "Builder Callback" Notation

```js
extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`User Updated!`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      });
  },

```

#### 28) Login User - http(ajax)

userSlice.js

```js
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }

   extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Welcome Back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    }
  }

);
```

#### 29) LocalStorage

- utils/localStorage.js

```js
export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
};
```

- invoke getUserFromLocalStorage when app loads (set it equal to user)

```js
const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};


[registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello There ${user.name}`);
    },

[loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome Back ${user.name}`);
    },
```

#### 30) Programmatically Navigate To Dashboard

Register.js

```js
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);
};
```

#### 31) Setup Dashboard Pages

- remove Dashboard.js
- create Dashboard Folder
- create Stats, Profile, AddJob, AllJobs, SharedLayout,
- create index.js and setup import/export

App.js

```js
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
```

#### 32) Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return
- import/export

```js
SharedLayout.js;

import { Outlet } from 'react-router-dom';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
```

#### 33) Shared Layout CSS

- import Wrappers in components BigSidebar,SmallSidebar and Navbar

#### 34) React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```

```js
Navbar.js

import Wrapper from '../assets/wrappers/Navbar'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Wrapper>
      <h4>navbar</h4>
      <FaHome>
    </Wrapper>
  )
}

export default Navbar

```

#### 35) Navbar Structure

Navbar.js;

```js
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => console.log('toggle sidebar')}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log('toggle logout dropdown')}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                console.log('logout user');
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
```

#### 36) Toggle Sidebar

userSlice.js

```js
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },

export const { toggleSidebar } = userSlice.actions;

```

Navbar.js

```js
import { toggleSidebar } from '../features/user/userSlice';

const toggle = () => {
  dispatch(toggleSidebar());
};

<button type="button" className="toggle-btn" onClick={toggle}>
  <FaAlignLeft />
</button>;
```

#### 37) Toggle Dropdown

```js
Navbar.js

const [showLogout, setShowLogout] = useState(false)

<div className='btn-container'>
  <button className='btn' onClick={() => setShowLogout(!showLogout)}>
    <FaUserCircle />
      {user.name}
    <FaCaretDown />
  </button>
  <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
    <button onClick={() => console.log('logout user')} className='dropdown-btn'>
      logout
    </button>
  </div>
</div>

```

#### 38) Logout User

userSlice.js

```js
reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },

export const { logoutUser, toggleSidebar } = userSlice.actions;

```

Navbar.js

```js
import { toggleSidebar, logoutUser } from '../features/user/userSlice';

<div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
  <button
    type="button"
    className="dropdown-btn"
    onClick={() => {
      dispatch(logoutUser());
    }}
  >
    logout
  </button>
</div>;
```

#### 39) Restrict Access

- pages/ProtectedRoute.js

```js
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
```

App.js

```js
<Route
  path="/"
  element={
    <ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>
  }
>
  ...
</Route>
```

#### 40) Small Sidebar - Setup

```js
SmallSidebar.js;

import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';

export const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log('toggle')}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">nav links</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
```

#### 41) Small Sidebar - Toggle

SmallSidebar.js;

```js
import { toggleSidebar } from '../features/user/userSlice';


const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };

return (
  <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
    <div className='content'>
        <button type='button' className='close-btn' onClick={toggle}>
          <FaTimes />
        </button>

);
```

#### 42) Setup Links

- create utils/links.js

```js
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'add job',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
```

#### 43) Small Sidebar - Nav Links

SmallSidebar.js

```js
import { NavLink } from 'react-router-dom';

return (
  <div className="nav-links">
    {links.map((link) => {
      const { text, path, id, icon } = link;

      return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          key={id}
          onClick={toggle}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      );
    })}
  </div>
);
```

#### REACT ROUTER UPDATE !!!

- [Stack Overflow](https://stackoverflow.com/questions/70644361/react-router-dom-v6-shows-active-for-index-as-well-as-other-subroutes)

```js
<NavLink
to={path}
key={id}
onClick={toggleSidebar}
className={({ isActive }) =>
isActive ? 'nav-link active' : 'nav-link'}


end
>
```

#### 44) Nav Links Component

- create components/NavLinks.js
- styles still set from Wrapper
- also can setup in links.js, preference

```js
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
```

```js
SmallSidebar.js;

import NavLinks from './NavLinks';

return <NavLinks toggleSidebar={toggle} />;
```

#### 45) Big Sidebar

```js
import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector } from 'react-redux';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
```
