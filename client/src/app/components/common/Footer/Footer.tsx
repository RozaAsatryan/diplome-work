import { Link } from "@mui/material";
import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import { InputField } from "../Fields";
import withSubscribe from "../Fields/HOC/withSubscribe";
import Logo from "../Logo";

const Footer = () => {
  const SubscribeInput = withSubscribe(InputField);

  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <div className="footer-item footer-item--logo">
            <div className="footer-logo">
              <Logo />
              <p className="footer-logo__text">
                Бронирование номеров в лучшем отеле 2022 года по версии
                ассоциации «Отельные взгляды»
              </p>
            </div>
          </div>

          <div className="footer-item footer-item--newsletter">
            <form className="footer-newsletter">
              <p className="footer-newsletter__title">Подписка</p>
              <span>Получайте специальные предложения и новости сервиса</span>
              <div className="footer-newsletter__input">
                <SubscribeInput
                  size="small"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Divider variant="fullWidth" className="footer-divider" />
      <Container>
        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2023 Nuzie отель. Все права защищены.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
