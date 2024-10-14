// import React from "react";
// import "./Footer.css";
// import { assets } from "../../assets/assets";
// const Footer = () => {
//   return (
//     <div className="footer" id="footer">
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <img src={assets.logo} alt="" />
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Voluptatibus at debitis minus inventore ullam unde rerum accusantium
//             deserunt ratione. Iste provident consectetur repellendus ea
//             repudiandae eius quis pariatur possimus tempora.
//           </p>
//           <div className="footer-social-icons">
//             <a href="#">
//               <img src={assets.facebook_icon} alt="Facebook Icon" />
//             </a>
//             <a href="#">
//               <img src={assets.instagram_icon} alt="Instagram Icon" />
//             </a>
//             <a href="#">
//               <img src={assets.tiktok_icon} alt="tiktok Icon" />
//             </a>
//             <a href="#">
//               <img src={assets.snap_icon} alt="snap Icon" />
//             </a>
//             <a href="#">
//               <img src={assets.youtube_icon} alt="YouTube Icon" />
//             </a>
//           </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>RÉSTAURATION</h2>
//           <ul>
//             <li>
//               <a href="#">Accueil</a>
//             </li>
//             <li>
//               <a href="#">Devenir livreur</a>
//             </li>
//             <li>
//               <a href="#">Devenir employé</a>
//             </li>
//             <li>
//               <a href="#">Carrières</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//           <h2>NOUS CONTACTER</h2>
//           <ul>
//             <li>
//               <a href="#">+213 123 456 789</a>
//             </li>
//             <li>
//               <a href="#">Email: info@fooddelivery.com</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-appli"></div>
//       </div>
//       <hr />
//       <div className="footer-copyright">
//         <p>copyright 2025 © Food Delivery. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus at debitis minus inventore ullam unde rerum accusantium
          </p>
        </div>
        <div className="footer-content-center">
          <h2>RÉSTAURATION</h2>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Devenir livreur</a>
            </li>
            <li>
              <a href="#">Devenir employé</a>
            </li>
            <li>
              <a href="#">Carrières</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>NOUS CONTACTER</h2>
          <ul>
            <li>
              <a href="#">+213 123 456 789</a>
            </li>
            <li>
              <a href="#">Email: info@fooddelivery.com</a>
            </li>
          </ul>
          <hr />
          <h2>NOUS SUIVRE</h2>
          <div className="footer-social-icons">
            <a href="#">
              <img src={assets.facebook_icon} alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src={assets.instagram_icon} alt="Instagram Icon" />
            </a>
            <a href="#">
              <img src={assets.tiktok_icon} alt="tiktok Icon" />
            </a>
            {/* <a href="#">
              <img src={assets.snap_icon} alt="snap Icon" />
            </a> */}
            <a href="#">
              <img src={assets.youtube_icon} alt="YouTube Icon" />
            </a>
          </div>
        </div>
        <div className="footer-appli">
          <div>
            <h2>TÉLÉCHARGEZ NOTRE APPLICATION</h2>
            <a href="#">
              <img src={assets.app_store} alt="App Store Icon" />
            </a>
            <a href="#">
              <img src={assets.play_store} alt="Google Play Icon" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-logo">
          <a href="/">
            <img src={assets.logo} alt="Home Logo" />
          </a>
        </div>
        <div className="footer-copyright">
          <p>copyright 2025 © Food Delivery. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
