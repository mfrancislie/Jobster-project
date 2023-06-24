import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, DashBoardPage, ErrorPage, RegisterPage } from './pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
