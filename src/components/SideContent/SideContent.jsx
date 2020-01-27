import React from "react";
import "./SideContent.scss";

const SideContent = () => (
  <ul className="side">
    <li>
      <div className="side__block side__block__checked">
        <i className="uil uil-check" />
        <p>Personal information</p>
      </div>
    </li>
    <li>
      <div className="side__block side__block__checked">
        <i className="uil uil-check" />
        <p>Contact information</p>
      </div>
    </li>
    <li>
      <div className="side__block side__block__checked">
        <i className="uil uil-check" />
        <p>Relationship</p>
      </div>
    </li>
    <li>
      <div className="side__block side__block__active">
        <i className="fa fa-circle" />
        <p>Beneficiaries</p>
      </div>
    </li>
    <li>
      <div className="side__block side__block__unactive">
        <i className="uil uil-circle" />
        <p>Account Characteristics</p>
      </div>
    </li>
    <li>
      <div className="side__block side__block__unactive">
        <i className="uil uil-circle" />
        <p>Review</p>
      </div>
    </li>
  </ul>
);

export default SideContent;
