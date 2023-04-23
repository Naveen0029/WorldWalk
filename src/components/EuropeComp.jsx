import React from "react";
import "./EuropeComp.css";
import Poland from '../img/Poland.png'
import malta from '../img/malta.png'

const EuropeComp = () => {
  return (
    <div className="EuropeComp">
      <div className="cards">
        <div>
          <img alt="Poland" src={Poland} className="country" style={{"border":"1px solid black"}}/>
        </div>
        <div>
          <h3>POLAND</h3>
        </div>
        <div>
          <p>Study Visa</p>
        </div>
        <div>
          <p>Work Visa</p>
        </div>
        <div>
          <p>Business Visa</p>
        </div>
        <div>
          <p>PR Visa - Express Entry</p>
        </div>
        <div>
          <p>PR Visa - PNP</p>
        </div>
      </div>

      <div className="cards">
        <div>
          <img alt="Malta" src={malta} className="country" style={{"border":"1px solid black"}} />
        </div>
        <div>
          <h3>MALTA</h3>
        </div>
        <div>
          <p>Study Visa</p>
        </div>
        <div>
          <p>Work Visa</p>
        </div>
        <div>
          <p>Business Visa</p>
        </div>
        <div>
          <p>PR Visa - Express Entry</p>
        </div>
        <div>
          <p>PR Visa - PNP</p>
        </div>
      </div>
    </div>
  );
};

export default EuropeComp;
