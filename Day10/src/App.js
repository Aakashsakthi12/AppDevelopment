// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Compile from './Components/Compile';
import About from './Components/About';
import { Provider } from 'react-redux';
import store from './Components/Redux/store'
import Sidebar from './Components/Side/Sidebar';
import Policy from './Components/Side/Policy';
import Faq from './Components/Faq';
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Routes>

        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Sidebar/>} />
        <Route path="/dashboard" element={<Home/>} />
      
        <Route path="/Login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Help" element={<Contact/>} />
        <Route path="/services" element={<Compile/>} />
        <Route path="/Policy" element={<Policy/>} />
        <Route path="/Faq" element={<Faq/>} />
        
      
      </Routes>
    </div>
  </Router>
  </Provider>
  );
}

export default App;
