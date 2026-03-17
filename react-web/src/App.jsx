import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn.jsx';
import { useEffect, useRef } from 'react';
import NavBar from './Components/NavBar/Home/NavBar.jsx';
import Layout from './Pages/Product/Layout.jsx';
import LayoutHome from './Pages/Home/Layout.jsx';
import List from './Pages/Product/List/List.jsx';
import Detail from './Pages/Product/Detail/Detail.jsx';
import Form from './Pages/Product/Form/Form.jsx';
import Modal from './Components/Modal/Modal.jsx';
import { AuthProvider } from './Context/auth.context.jsx';

export default function App() {
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.disableNativeClose();
    const read = localStorage.getItem('read');
    if (!read) {
      modalRef.current.open();
    }
  }, [])

  const handleRead = () => {
    localStorage.setItem('read', true);
    modalRef.current.close();
  }

  return (
    <div className='app'>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LayoutHome />} >
              <Route path="" element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="SignIn" element={<SignIn />} />
            </Route>
            <Route path="/Product" element={<Layout />}>
              <Route path="" element={<List />} />
              <Route path="Detail/:id" element={<Detail />} />
              <Route path="Form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Modal content="Texte de la modal" ref={modalRef}>
          <div className="content">
            <div className="title">V5.3.18</div>
            <div className="body">Information de mise à jour</div>
            <button onClick={handleRead}>J'ai compris</button>
          </div>
        </Modal>
      </AuthProvider>
    </div>
  )
}
