import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Login from './pages/Login';
import RequireAuth from './components/routes/RequireAuth';
import Dashboard from './pages/Dashboard';
import PublicLayout from './components/shared/PublicLayout';
import Company from './pages/Company';
function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        {/* Public routes */}
        <Route path='login' element={<Login />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/company' element={<Company />} />
          </Route>
        </Route>
        {/* Catch all missing */}
      </Route>
    </Routes>
  );
}

export default App;
