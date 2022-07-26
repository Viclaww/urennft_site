import About from './About';
import Roadmappage from './Roadmap-page';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Two_two from "./two_two";
import Two_three from "./two_three";
import Two_four from "./two_four";
import Two_five from "./two_five";

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
           <Route index element={<Two_two />} />
         <Route path="2022" element={<Two_two/>} />
                  <Route path="2023" element={<Two_three />} />
                  <Route path="2024" element={<Two_four />} />
                  <Route path="2025" element={<Two_five />} />
         </Route>
        </Routes>
       </div>
     
      </div>
    </Router>
    
  );
}

export default App;
