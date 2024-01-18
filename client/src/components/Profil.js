import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";

function Profil() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hello {user?.name}</h1>

      <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button>
      <div>
        <div className="ettaswira">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-we-PQ8adHvGI7Y9RxZfYl8We3BSNmHkDlg&usqp=CAU" style={{width:"150px" , borderRadius:"50%"}}/>

        </div>
        <div>
        <div className="therow"> 
          <h3>First name</h3>
          <input placeholder="First name"></input>
        </div>
        <div>
          <h3>Last name</h3>
          <input placeholder="Last name"></input>
        </div>
        <div>
          <h3>Mobile number</h3>
          <input placeholder="Enter your number"></input>
        </div>
        <div>
          <h3>address email</h3>
          <input placeholder="Enter your mail"></input>
        </div>
        </div>



      </div>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
