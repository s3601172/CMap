import React from "react";
import "../../bootstrap.css";
import "../../index.css";

function Card(props){
  return(
      <div className="container">
              <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.cardHeader}</h5>
                <h6 className="card-text">{props.cardTitle}</h6>
                <p className="card-text">{props.cardDesc}</p>
                <a href={props.url} className="btn btn-primary">{props.cardBtn}</a>
                </div>
              </div>
            </div>
  );
}

export default Card;