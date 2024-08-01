import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from "./CountdownTimer";
import '../ButtonStyles.css';
import via_baht from '../../assets/via_bath.png';
import via_lightning from '../../assets/via_lightning.png';

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <Link to="https://www.eventpop.me/s/tbc2024">
        <img src={via_baht} alt="Via baht" className="btn" />
      </Link>
      <Link to="https://rightshift.to/product/tbc2024-event-ticket/">
        <img src={via_lightning} alt="Via Lightning" className="btn" />
      </Link>
      <CountdownTimer />
    </div>
  );
};

export default ButtonContainer;
