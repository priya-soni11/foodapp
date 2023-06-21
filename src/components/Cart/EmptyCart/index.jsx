import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import emptyImg from "./emptyImg.png";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={emptyImg} alt="empty" />
      <button onClick={() => navigate("/")}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now{" "}
      </button>
    </div>
  );
};

export default EmptyCart;
