import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <p>
                <span>Dhruv Damodharan</span>
                <span>
                  <i className="fa fa-phone"></i> +91 9745397021
                </span>{" "}
                <span>
                  <i className="fa fa-envelope-o"></i> dhruvdamodharan@gmail.com
                </span>{" "} 
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>Abhinav Venugopal</span>
                <span>
                  <i className="fa fa-phone"></i> +91 8593854887
                </span>{" "}
                <span>
                  <i className="fa fa-envelope-o"></i> abhikv1900@gmail.com
                </span>{" "} 
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>Shimon Muraly</span>
                <span>
                  <i className="fa fa-phone"></i> +91 9400162675
                </span>{" "}
                <span>
                  <i className="fa fa-envelope-o"></i> shimonmuraly97@gmail.com
                </span>{" "} 
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>Fiero Jain</span>
                <span>
                  <i className="fa fa-phone"></i> +91 6363837616
                </span>{" "}
                <span>
                  <i className="fa fa-envelope-o"></i> fierojain12@gmail.com
                </span>{" "} 
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/gect_chess_club/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gect-chess-club-1028a8283/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
