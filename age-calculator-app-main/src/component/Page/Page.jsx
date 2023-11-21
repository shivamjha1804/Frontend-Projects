import React from "react";
import './Page.css';
import InputSection from "../InputSection/InputSection";
import Button from "../Button/Button";

const Page = () => {
  return (
    <div className="container">
      <div className="upper">
        <InputSection/>

        <div className="button">
            <div className="line">
              
            </div>
            <Button/>
        </div>
      </div>
    </div>
  );
};

export default Page;
