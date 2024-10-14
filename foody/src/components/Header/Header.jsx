import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>order your favorite food here</h2>
        <p>
          Food is much more than just a means of sustenance; it lies at the
          heart of our cultures and traditions and plays a central role in our
          social interactions. Each meal is an opportunity to discover new
          flavors, share moments with loved ones, and celebrate the world's
          culinary diversity. From exotic cuisines to homemade dishes, food
          allows us to travel without leaving our table, understand other
          cultures, and create unforgettable memories. Furthermore, a balanced
          diet is essential for maintaining good health and a vibrant life.
          Thus, food is both a pleasure and a necessity, a bridge between
          people, and an endless source of discovery and joy.
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
};

export default Header;
