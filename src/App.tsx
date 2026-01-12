import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef } from 'react';
import HomePage from "./pages/homePage";
import { UserProvider } from "./contexts/Users/userContext";



import { GoogleOAuthProvider } from "@react-oauth/google";


import ReactToPrint from 'react-to-print';

function App() {
  return (
    <GoogleOAuthProvider clientId="493910047901-febc082scanlgjm838apfhq93qupj50q.apps.googleusercontent.com">
      <UserProvider>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
      </UserProvider>
    </GoogleOAuthProvider>
  );
}




export default App;