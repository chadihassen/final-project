import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getproduct } from "./JS/userSlice/productslice";
import Pannier from "./components/Pannier";
import { getcommande } from "./JS/userSlice/commandeSlice";

function App() {
  const [services, setservices] = useState([{
    Url:"https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/male-worker-pressing-ink-on-frame-while-using-the-printing-machine-in-a-workshop-1.jpg",
    name:"Screen Printing",
    paragraph:"Inceptos eleifend pellentesque dolor sem taciti in luctus ullamcorper vitae"
  },{
    Url:"https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/female-holding-a-white-t-shirt-next-to-the-cloths-printing-machine-and-t-shirts-on-the-wooden-table-1.jpg",
    name:"Team Personalization",
    paragraph:"Inceptos eleifend pellentesque dolor sem taciti in luctus ullamcorper vitae"
  },{
    Url:"https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/office-typing-or-designer-with-laptop-for-fashion-design-plan-or-online-draft-for-small-business.jpg",
    name:"Online Design Tools",
    paragraph:"Inceptos eleifend pellentesque dolor sem taciti in luctus ullamcorper vitae"
  },{
    Url:"https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/man-and-woman-collaborating-on-creative-design.jpg",
    name:"Collaborative Design",
    paragraph:"Inceptos eleifend pellentesque dolor sem taciti in luctus ullamcorper vitae"
  },{
    Url:"https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/a-smiling-person-wearing-an-orange-t-shirt-and-a-name-tag-is-delivering-a-parcel-to-a-client-who-is.jpg",
    name:"Global Shipping",
    paragraph:"Inceptos eleifend pellentesque dolor sem taciti in luctus ullamcorper vitae"
  },{
    Url:"https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/worker-holding-white-t-shirt.jpg",
    name:"Design Consultancy",
    paragraph:"Inceptos eleifend pellentesque dolor sem taciti in luctus ullamcorper vitae"
  }




])
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getcommande())
  }, [ping]);
  return (
    <div className="App">
    <Navbarr/>
      <Routes>
      <Route path="/" element={<Home services={services}/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop ping={ping} setping={setping}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      
        <Route path="/profil" element={<Profil />} />
        <Route path="/pannier" element={<Pannier ping={ping} setping={setping}/>} />

      </Routes>
    

      <Footer/>
    </div>
  );
}

export default App;
