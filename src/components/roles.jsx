import React from "react";

export const Roles = (props) => {
  return (
    <div id="roles">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="roles-text">
              <h2>Member Roles</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="roles">
                {props.data ? Object.keys(props.data).map((item)=> (
                    <div className="top-margin">
                        <h3>{item}</h3>
                        <div className="list-style">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul className="wide">
                                    {props.data ? props.data[item].map((item2)=> (
                                    <li>{item2}</li>
                                    )) : "loading"}
                                </ul>
                            </div>
                        </div>
                    </div>
                )) : "loading" }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
