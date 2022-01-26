import styles from "../styles/Hero.module.css";

const HeroSection = () => {
  return (
    <div className={styles.content_bg}>
      <div className={styles.hero_content}>
        <div>
          <h1>Consectetuer adipiscing elit</h1>
          <p>Donec Pulvinar ullamcorper metus</p>
          <div className={styles.hero_button}>
            
            <button>Pulvinar mollis</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
