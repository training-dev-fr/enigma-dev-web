import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import './theme.css'
import Navbar from './Components/Navbar/Navbar'
import Task from './Pages/Task/Task'
import Details from './Pages/Task/Detail/Details'
import Layout from './Pages/Task/Layout/Layout'
import Add from './Pages/Add/Add'
import Home from './Pages/Home/Home'
import { ThemeProvider, useTheme } from './Context/theme.context'

function App() {
  const {theme} = useTheme();

  return (

      <div className={`app ${theme}`}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Task" element={<Layout />} >
              <Route path="" element={<Task />} />
              <Route path=":id" element={<Details />} />
            </Route>
            <Route path="/Add" element={<Add />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
