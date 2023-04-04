import React, {Component} from "react";
import { Routes, Route } from "react-router-dom";
import { messaging } from "./context/Firebase";
import { getToken } from "firebase/messaging";


//components
import MyNavbar from "./components/Navbar";
import ParticlesBackgroung from "./components/Stars";


//Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Detail";
import OrdersPage from "./pages/ViewOrder";
import ViewOrderDetails from "./pages/ViewOrderDetail";

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import sample from './sample.mp4';

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
       <video autoPlay muted loop playsInline className="video-background">
      <source src={sample} type="video/mp4" />
    </video>
      {/* <ParticlesBackgroung/> */}
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookID" element={<BookDetailPage />} />
        <Route path="/book/orders" element={<OrdersPage />} />
        <Route path="/books/orders/:bookId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  );
}

export default App;
