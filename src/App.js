import About from './About';
import Roadmappage from './Roadmap-page';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Two from "./two_two";
import Three from "./two_three";
import Four from "./two_four";
import Five from "./two_five";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

       <div className="content">
        <Routes>
          <Route path="/*" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="roadmap/" element={<Roadmappage />} >
           <Route index element={<Two />} />
         <Route path="2022" element={<Two/>} />
                  <Route path="2023" element={<Three />} />
                  <Route path="2024" element={<Four />} />
                  <Route path="2025" element={<Five />} />
         </Route>
        </Routes>
       </div>
     
      </div>
    </Router>
    
  );
}

export default App;
