/*  
💥 Title : footer
📃 Description : Footer
✍ Author : Saad Hasan
⌚ Date : 07/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import log from "../assets/logo-nopad.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={log} alt="" />
        <ul>
          <li>Subscriber Agreement</li>
          <li>Privacy Policy</li>
          <li>Supplemental Privacy Policy</li>
          <li>Interest-Based Ads</li>
          <li>Supported Devices</li>
          <li>Help</li>
          <li>About Us</li>
        </ul>
        <p>© 2021 Disney and its related entities. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
