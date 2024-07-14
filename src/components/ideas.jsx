import React from "react";

export const Idea = (props) => {
  return (
    <div id="ideas">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="idea-text">
              <h2>Ideas We Have in Store</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className="wide">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
