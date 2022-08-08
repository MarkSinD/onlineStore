import React, {useEffect, useState} from "react";
import Link from "next/link";
import { BsGeoAltFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Delivery = () => {
  const { totalPrice, setShowCart } = useStateContext();
  const [spinner, setSpinner] = useState(false);

  console.log("totalPrice: ", totalPrice)

  useEffect(() => {
    console.log("Закрылась");
    setShowCart(false);
  },[])

  function handlePayment() {
    setSpinner(true);
    const body = {
      shopId: `914048`,
      secretKey: `test_NauaPhvaLDDCc-msIAxuj_5M8C5Z47qAKOFUFR54R-I`,
      value: totalPrice,
      returnUrl: `https://fashion-krd.herokuapp.com/success`,
      description: `clothes`
    }

    const formBody = Object.keys(body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    const requestOptions = {
      method: 'POST',
      headers,
      body: formBody
    };
    fetch('https://yookassa-payment.herokuapp.com/init', requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        window.location.replace(responseData)
      })
  }

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsGeoAltFill />
        </p>
        <h2>Доставка</h2>
        <p className="email-msg">Введите данные доставки и наш менеждер свяжется с вами для уточнения деталей.</p>
        <p className="description">
          Если у вас есть вопросы, пожалуйста напишите
          <a className="email" href="mailto:order@example.com">
            godblesslera99@gmail.com
          </a>
        </p>
        <div className="col-md-5">
          <hr />
          <form className="py-5">
            <div className="form-group">
              <input
                name="address"
                type="text"
                className="input-field"
                placeholder="Адрес"
              />
            </div>
            <div className="form-group">
              <input
                name="cell"
                type="text"
                className="input-field"
                placeholder="Телефон"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="input-field"
                placeholder="Электронная почта"
              />
            </div>
          </form>
        </div>
        {spinner ?
          <img src="https://kursk.velopiter.ru/vlp/images/loading.gif" width={"100px"} height={"100px"}/>
          :
          <button type="button" width="300px" className="btn" onClick={handlePayment}>
            Продолжить
          </button>
        }
      </div>
    </div>
  );
};

export default Delivery;
