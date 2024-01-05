import React from "react";
import "./style.css";

function SideLayout({ children }) {
  return (
    <div className={`SideLayout`}>
      {React.Children.map(children, (child) => (
        <div className="SideLayout-item" key={child.key}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default SideLayout;
