import React from "react";
import { Routes, Route } from "react-router-dom";
import { messaging } from "./context/Firebase";
import { getToken } from "firebase/messaging";

//components
import MyNavbar from "./components/Navbar";

//Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Detail";
import OrdersPage from "./pages/ViewOrder";
import ViewOrderDetails from "./pages/ViewOrderDetail";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Footer from './pages/Footer';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import sample from './sample2.mp4';


// hook
import { useEffect } from "react";

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //generate token
      const token = await getToken(messaging, {
        vapiKey: 'BJDUegf7NqNlVWHNDKihE4YQ8CT4PUN8IeicVbUH8ZHbUbFL9GSSppXEWVO20Kz_FB3TVinRhttHcektKb7YKC8'
      })
      console.log('Token Generated', token);
      // Send this token to server (db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  };

  useEffect(() => {
    // Request user for notification permission
    requestPermission();
  }, []);

  return (
    <div>
      {/* //  <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> */}
      <video autoPlay muted loop playsInline className="video-background">
        <source src={sample} type="video/mp4" />
      </video>

      <MyNavbar />
      <Routes>
        <Route path="/" element={<div><Main /><HomePage /><Footer/></div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookID" element={<BookDetailPage />} />
        <Route path="/book/orders" element={<OrdersPage />} />
        <Route path="/books/orders/:bookId" element={<ViewOrderDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
