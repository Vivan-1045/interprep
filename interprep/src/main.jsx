import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Signup from './components/sign-up/Signup.jsx'
import Login from './components/sign-in/Login.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
    <Route path='' element ={<Home/>}/>
    <Route path='/sign-up' element ={<Signup/>}/>
    <Route path='/sign-in' element ={<Login/>} />
    <Route path='/contact' element ={<Contact/>}/>
    <Route path='/About' element = {<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
