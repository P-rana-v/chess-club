import React from "react";

export const Testimonials = (props) => {
  const split = (text) => {
    let newText =[];
    text.forEach(item => {
      newText.push(item)
      newText.push(<br />)
    })
    return newText
  }
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>General Body</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-meta"> {d.name} </div>
                      <p>{split(d.text)}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
