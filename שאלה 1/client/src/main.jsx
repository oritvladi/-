import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Member from './member.jsx'
import Members from './members.jsx'
import Home from './home.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Members />
  </React.StrictMode>
)
