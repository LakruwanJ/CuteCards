import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import NavbarA from './components/NavbarA';
import BackgroundWrapper from './components/BackgroundWrapper';


import Home from './components/Home';
import HomeA from './components/HomeA';
import Cards from './components/Cards';
import ContactUs from './components/ContactUs';
import Orders from './components/Orders';
import AddCard from './components/Addcard';
import Corder from './components/Corder';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <>
              <NavbarA />
              <BackgroundWrapper>
                <Routes>
                  <Route path="/" element={<HomeA />} />
                  <Route path="/addCard" element={<AddCard />} /> {/* For adding a card */}
                  <Route path="/editCard/:id" element={<AddCard />} /> {/* For editing a card */}
                  {/* Add more admin routes here */}
                </Routes>
              </BackgroundWrapper>
            </>
          }
        />

        {/* User Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <BackgroundWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/order" element={<Orders />} />
                  <Route path="/corder" element={<Corder />} />
                </Routes>
              </BackgroundWrapper>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
