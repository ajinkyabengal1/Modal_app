import React from "react";
import "./Model.css";
import { useNavigate  } from "react-router-dom";


function Modal({ setOpenModal }) {
    const navigate = useNavigate();

    const navigateToForm = () => {
        navigate('/<Form/>');
      };
  return (
   
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1> Welcome To Login Form  !</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Leave
          </button>   
          <button onClick={()=> navigateToForm} >Proceed</button>
        </div>
      </div>
    </div>
    
  );
}

export default Modal;