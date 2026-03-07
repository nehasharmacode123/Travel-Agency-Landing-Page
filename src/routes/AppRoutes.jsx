import {Routes, Route} from "react-router-dom";
import Navbar from "../pages/navbar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}/>
    </Routes>
  )
}

export default AppRoutes