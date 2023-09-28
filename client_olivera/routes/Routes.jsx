import React, {useState, useEffect} from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SectionIncruises from '../src/incruises/sections/Section';
import './Router.css';
import { SectionC } from '../src/cumbre/sections/SectionC';

function AppRouter() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
    {
      loading 
      ? 
        (<div className="loader">
          <BounceLoader color="#fc7609" size={90} loading={loading} />
        </div>
        )
      :
        (
    <Router>
      <Routes>
        <Route exact path="/" />
        <Route path="/sharkteam" element={<SectionIncruises />}/>
        <Route path="/cumbre" element={<SectionC />}/>
      </Routes>
    </Router>
              )
            }
          </div>
  );
}

export default AppRouter;