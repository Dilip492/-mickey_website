import { useState } from 'react'
import Hero from './pages/hero'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './pages/Menu'
import OurStory from './pages/OurStory'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/account/Dashboard'
import Profile from './pages/account/Profile'
import Orders from './pages/account/Orders'
import OrderDetail from './pages/account/OrderDetail'
import Favorites from './pages/account/Favorites'
import Loyalty from './pages/account/Loyalty'
import Rewards from './pages/account/Rewards'
import GiftCards from './pages/account/GiftCards'
import Events from './pages/account/Events'
import Offers from './pages/account/Offers'
import Settings from './pages/account/Settings'
import MyMickeysLayout from './components/layout/MyMickeysLayout'

import EventsPage from './pages/Events'
import GalleryPage from './pages/Gallery'


import { Toaster } from "react-hot-toast";
import ProtectedRoute from './components/ProtectedRoute'
import Contact from './pages/Contact'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3500,
          style: {
            background: "#1b0c07",
            color: "#FDFBF7",
            border: "1px solid #3d1f14",
            borderRadius: "14px",
            padding: "14px 16px",
            fontSize: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/eventspage" element={<EventsPage />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact/>} />

        <Route element={<ProtectedRoute />}>
          <Route path="/my-mickeys" element={<MyMickeysLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<OrderDetail />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="loyalty" element={<Loyalty />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="gift-cards" element={<GiftCards />} />
            <Route path="events" element={<Events />} />
            <Route path="offers" element={<Offers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

      </Routes >

    </>
  )
}

export default App
