import React from "react";

const Navbar2 = () => {
  const navItems = [
    "entertainment",
    "lifestyle",
    "sports",
    "travel & culture",
    "food",
    "music",
    "horror",
    "movie",
    "news",
    "community",
  ];
  return (
    <div className="navbar-2">
      {navItems.map((item) => {
        return (
          <div key={item} className="navbar-2__item">
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar2;
