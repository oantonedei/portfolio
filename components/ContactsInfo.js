"use client";
import React, { useState } from "react";

const ContactsInfo = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formVisible, setFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ktx67j0ysb.execute-api.us-east-1.amazonaws.com/v1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      setSuccessMessage(!successMessage);
      setFormVisible(!formVisible);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+1 (641) 451 3719</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:steve-pearson@gmail.com">
                antonedei.otoro@engineer.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Address</div>
            <p>1604 Timberlake Dr, Arlington, TX</p>
          </div>
        </div>
        <div className="contact_form">
          {formVisible && (
            <form onSubmit={handleSubmit} id="cform">
              <div className="row">
                <div className="col-6 group-val">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 group-val">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="group-val">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="group-val">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="group-val ct-gr">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <a
                className="btn fill"
                data-text="Send Message"
                onClick={handleSubmit}
              >
                Send Message
              </a>
            </form>
          )}
          {successMessage && (
            <div className="success">
              <p>
                Thanks, your message is sent successfully. We will contact you
                shortly!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
