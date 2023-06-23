import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./contactUs.scss";
import { MdCall } from "react-icons/md";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { t } from "i18next";

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  let defaultLang = localStorage.getItem("i18nextLng");
  console.log(defaultLang);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    console.log(inputs);
  };

  return (
    <div>
      <Header />
      <div className="contact">
        <div className="container mx-auto">
          <div className="contact_section">
            <h1
              className="title"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`200`}
            >
              {t(" Contact")}
            </h1>
            <p
              className="desc"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`300`}
            >
              {t("desc_contact")}
            </p>
            <div className="line">
              <div
                className="left"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay={`400`}
              >
                <div className="text">
                  <h2>{t("Contact Information")}</h2>
                  <p>
                    {t(
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tempora unde est eaque earum ut aliquam ex quos."
                    )}
                  </p>
                </div>
                <div className="info">
                  <div className="item flex items-center gap-2">
                    <MdCall size={25} />
                    <span>0100447598</span>
                  </div>
                  <div className="item flex items-center gap-2">
                    <HiOutlineMail size={25} />
                    <span>support@example.com</span>
                  </div>
                  <div className="item flex items-center gap-2">
                    <HiLocationMarker size={25} />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
              <div
                className="right"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay={`800`}
              >
                <form action="">
                  <div className="input_item">
                    <label htmlFor="">{t("Name")}*</label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input_item">
                    <label htmlFor="">{t("Email")}*</label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input_item">
                    <label htmlFor="">{t("Your Message")}*</label>
                    <textarea
                      id="message"
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                  <button className="btn_submit">{t("Send Message")}</button>
                </form>
              </div>
            </div>
          </div>

          <div className="boxs_contact grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div
              className={`box text-center ${
                defaultLang == "ar" ? "md:text-right" : "md:text-left"
              } `}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`300`}
            >
              <div className="icon mx-auto md:mx-0">
                <BiSupport size={35} />
              </div>
              <div className="text">
                <h4>{"Help & Support"}</h4>
                <p>{t("desc_help")}</p>
              </div>
            </div>
            <div
              className={`box text-center ${
                defaultLang === "ar" ? "md:text-right" : "md:text-left"
              } `}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`600`}
            >
              <div className="icon mx-auto md:mx-0">
                <MdCall size={35} />
              </div>
              <div className="text">
                <h4>{t("Call Us")}</h4>
                <p>{t("desc_call")}</p>
              </div>
            </div>
            <div
              className={`box text-center ${
                defaultLang === "ar" ? "md:text-right" : "md:text-left"
              } `}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`900`}
            >
              <div className="icon mx-auto md:mx-0">
                <FaLocationArrow size={35} />
              </div>
              <div className="text">
                <h4>{t("PR")}</h4>
                <p>{t("desc_pr")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
