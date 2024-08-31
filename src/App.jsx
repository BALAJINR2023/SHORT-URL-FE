import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from './Pages/Login.jsx';
import EmailVerification from './Pages/Verify.jsx';
import ForgotPassword from './Pages/Forgotpassword.jsx';
import ResetPassword from './Pages/Resetpage.jsx';
import UrlShortener from './Url/Urlshortner.jsx';
import UrlDashboard from './Url/Urldash.jsx';
import RedirectToBackend from './Url/redirect.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} /> {/* Set Login as the default route */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/verify/:token" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/home" element={<ProtectedRoute component={<Home />} />} /> 
        <Route path="/shorten" element={<ProtectedRoute component={<UrlShortener />} />} />
        <Route path="/dashboard" element={<ProtectedRoute component={<UrlDashboard />} />} />
        <Route path="/:urlId" element={<RedirectToBackend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

