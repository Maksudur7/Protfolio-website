
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './NavBar/Navbar'
import { Footer } from 'flowbite-react'

function App() {


  return (
    <>
      <div className='max-w-7xl mx-auto bg-black text-white p-5'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
