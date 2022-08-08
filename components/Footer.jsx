import React from "react";
import { AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Beats Store Все права защищены</p>
      <p>Разработчик Гераськина Валерия</p>
      <p className="icons">
        <a href={"https://instagram.com/beats_store.ru?igshid=YmMyMTA2M2Y="} style={{position:'relative', zIndex: '100000'}}>
          <AiFillInstagram />
        </a>
      </p>
    </div>
  );
};

export default Footer;
