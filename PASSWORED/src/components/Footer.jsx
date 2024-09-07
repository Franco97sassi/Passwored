import styles from "./footer.module.css";
import PasswordLogo from '../assets/images/PasswordLogo';
import InstagramIcon from '../assets/images/InstagramIcon';
import TwitterIcon from '../assets/images/TwitterIcon';
import YoutubeIcon from '../assets/images/YoutubeIcon';
import TiktokIcon from '../assets/images/TiktokIcon';
import logopass from "../assets/logopass.png"
const Footer = () => {
  return (
    <div className={styles.container} >
      <div  className={styles.logo}>
        {/* <PasswordLogo className={styles.logoImg} /> */}
        <img src={logopass} alt="" />
      </div>
      <div className={styles.links}>
      <TiktokIcon/>

         <InstagramIcon/>
         <TwitterIcon/>
         <YoutubeIcon/>
      </div>
    </div>
  )
}

export default Footer