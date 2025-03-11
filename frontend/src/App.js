import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';



function App() {
  return (
    <>
    
    <ToastContainer/>
    <Header/>
    <main className='min-h-[calc(100vh-120px)] pt-16'>
    <Outlet/>
    </main>
     <Footer/>
    </>
  );
}

export default App;