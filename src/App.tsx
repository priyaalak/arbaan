import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Sidebar,Navbar } from "./components";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";

function App() {
  const [toggle, setToggle] = useState<boolean>(false)
  function Toggle() {
    setToggle(!toggle)
  }
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false)
      }
    }
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])
  return (
    <BrowserRouter>
    <div className="d-flex Arbaan-InnerLayout">
        <div className={toggle ? "d-none" : "w-auto position-fixed"}>
          <Sidebar />
        </div>
        <div className={toggle ? "d-none" : "invisible"}>
          <Sidebar />
        </div>
        <div className="col overflow-auto">
           <Navbar Toggle={Toggle}/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/arbaan' element={<Home />}></Route>
            <Route path='/Dashboard' element={<Home />}></Route>
            <Route path='/Posts' element={<PostDetails />}></Route>
            {/*<Route path='/Users' element={<Users />}></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
