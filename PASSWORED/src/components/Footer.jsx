import styles from "./footer.module.css";
import PasswordLogo from '../assets/images/PasswordLogo';
import InstagramIcon from '../assets/images/InstagramIcon';
import TwitterIcon from '../assets/images/TwitterIcon';
import YoutubeIcon from '../assets/images/YoutubeIcon';
import TiktokIcon from '../assets/images/TiktokIcon';
import logopass from "../assets/logopass.png"
const Footer = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container} >
      <div  className={styles.logo}>
        {/* <PasswordLogo className={styles.logoImg} /> */}
        <img src={logopass} alt="" />
      </div>
      <div className={styles.links}>
      <div onClick={() => handleRedirect("https://www.tiktok.com/@passwored.com?_t=8pcX6DH2AUv&_r=1")}>
          <TiktokIcon />
        </div>
        <div onClick={() => handleRedirect("https://www.instagram.com/passwored.edtech?igsh=MWY2dTNxdmtsY2tmNA==")}>
          <InstagramIcon />
        </div>
        <div onClick={() => handleRedirect("https://www.facebook.com/profile.php?id=61565960210607&mibextid=ZbWKwL")}>
          <TwitterIcon /> {/* Cambia a `FacebookIcon` si tienes un ícono específico para Facebook */}
        </div>
        <div  >
          <YoutubeIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer