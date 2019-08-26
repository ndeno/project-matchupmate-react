import React from "react";

const Footer = props => {
  let currentView = props.currentView;
  return (
    <div>
      <div className="sticky-phantom" />
      <div className="sticky">
        {currentView === 0 && <div className="footer-text">Get Ready For The Next Battle</div>}
        {currentView === 1 && (
          <button className="back-button" onClick={props.__prev}>
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
