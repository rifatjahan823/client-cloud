import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MainDashboard from './Pages/Dashboard/MainDashboard';
import Buckets from './Pages/Dashboard/Buckets/Buckets';
import User from './Pages/Dashboard/User/User';
function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/maindashboard" element={
        <MainDashboard/>}>
        <Route index element={<Dashboard  />} ></Route>
        <Route path="dashboard" element={<Dashboard  />}></Route>
        <Route path="buckets" element={<Buckets/>}></Route>
        <Route path="user" element={<User/>}></Route>
      </Route >
      </Routes>
    </div>
  );
}

export default App;
