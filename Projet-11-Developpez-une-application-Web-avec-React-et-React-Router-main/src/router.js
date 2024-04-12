import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';


function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/logement/:id" element={<Logement/>} />
        <Route path='/Apropos' element={<Apropos/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
