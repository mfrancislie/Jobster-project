import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, ErrorPage, RegisterPage, ProtectedRoute } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ProfilePage,
  SharedLayoutPage,
  AddJobPage,
  AllJobsPage,
  StatsPage,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayoutPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<StatsPage />} />
          <Route path="add-Job" element={<AddJobPage />} />
          <Route path="all-Jobs" element={<AllJobsPage />} />
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
