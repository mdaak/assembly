import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerbody}>
        <div className={styles.footerTop}>
          <div>
            <h1>Fusce ultrieds fringilla metus</h1>
            <p>
              Donec leo, vivamus fermentum nibh in augue praesent lacus at urna
              congue
            </p>
          </div>
          <div >
            <p className={styles.footerText}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </p>
            <button>Etiam posuere</button>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
         &#169; Untitled. All right reserved. | photos by Fotogrph | Design by
          TEMPLATED
        </p>
      </div>
    </div>
  );
};

export default Footer;
