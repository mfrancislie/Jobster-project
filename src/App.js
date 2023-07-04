import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, ErrorPage, RegisterPage } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ProfilePage,
  SharedLayoutPage,
  AddJobPage,
  AllJobsPage,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<SharedLayoutPage />}>
          <Route path="add-Job" element={<AddJobPage />} />
          <Route path="all-Job" element={<AllJobsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="landing" element={<LandingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
