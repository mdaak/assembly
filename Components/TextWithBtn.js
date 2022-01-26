import styles from "../styles/TextWithBtn.module.css";

const TextWithBtn = () => {
  return (
    <div>
      <div >
        <div className={styles.card_heading}>
          <h1>Feugiat lorem ipsum dolor sed veroeros</h1>
          <p>
            Donec leo, vivamus fermentum nibh in augue present a lacus at urna
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is
          </p>
          <button>more info</button>
        </div>
        <div className={styles.card}>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is
          </p>
          <button>more info</button>
        </div>
        <div className={styles.card}>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is
          </p>
          <button>more info</button>
        </div>
      </div>
    </div>
  );
};

export default TextWithBtn;
