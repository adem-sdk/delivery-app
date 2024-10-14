// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/assets";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [isVisible, setIsVisible] = useState(true);
//   const [scrollPos, setScrollPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (scrollPos > currentScrollPos && scrollPos - currentScrollPos > 10) {
//         setIsVisible(true);
//       } else if (
//         currentScrollPos > scrollPos &&
//         currentScrollPos - scrollPos > 10
//       ) {
//         setIsVisible(false);
//       }
//       setScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollPos]);

//   return (
//     <div className={`navbar ${isVisible ? "visible" : "hidden"}`}>
//       <img src={assets.logo} alt="a welcome logo" className="logo" />
//       <ul className="navbar-menu">
//         <li
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           home
//         </li>
//         <li
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           menu
//         </li>
//         <li
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           mobile-app
//         </li>
//         <li
//           onClick={() => setMenu("contact us")}
//           className={menu === "contact us" ? "active" : ""}
//         >
//           contact us
//         </li>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="recherche" />
//         <div className="navbar-search-icon">
//           <img src={assets.basket_icon} alt="pannier" />
//           <div className="dot"></div>
//         </div>
//         <button>sign in</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/assets";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [isVisible, setIsVisible] = useState(true);
//   const [scrollPos, setScrollPos] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (scrollPos > currentScrollPos && scrollPos - currentScrollPos > 10) {
//         setIsVisible(true);
//       } else if (
//         currentScrollPos > scrollPos &&
//         currentScrollPos - scrollPos > 10
//       ) {
//         setIsVisible(false);
//       }
//       setScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollPos]);

//   return (
//     <div className={`navbar ${isVisible ? "visible" : "hidden"}`}>
//       <img src={assets.logo} alt="a welcome logo" className="logo" />
//       <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         <img src={assets.menu_icon} alt="menu icon" />
//       </div>
//       <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
//         <li
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           home
//         </li>
//         <li
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           menu
//         </li>
//         <li
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           mobile-app
//         </li>
//         <li
//           onClick={() => setMenu("contact us")}
//           className={menu === "contact us" ? "active" : ""}
//         >
//           contact us
//         </li>
//         <div className="navbar-right">
//           <img src={assets.search_icon} alt="recherche" />
//           <div className="navbar-search-icon">
//             <img src={assets.basket_icon} alt="pannier" />
//             <div className="dot"></div>
//           </div>
//           <button>sign in</button>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (scrollPos > currentScrollPos && scrollPos - currentScrollPos > 10) {
        setIsVisible(true);
      } else if (
        currentScrollPos > scrollPos &&
        currentScrollPos - scrollPos > 10
      ) {
        setIsVisible(false);
      }
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <div className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <Link to="/">
        <img src={assets.logo} alt="2BTT Logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={assets.menu_icon} alt="menu icon" />
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <img src={assets.search_icon} alt="recherche" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="pannier" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
