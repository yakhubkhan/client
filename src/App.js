import { useState, useRef } from "react";

import logo from "./fortinet_logo.svg";
import world from "./world.svg";
import question from "./question.svg";
import recommendation from "./recommendation.svg";
import arrowLeft from "./assets/images/teenyicons_arrow-left-solid.svg";
import arrowRight from "./assets/images/teenyicons_arrow-right-solid.svg";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import buttonLeft from "./assets/images/arrow-left.svg";
import buttonRight from "./assets/images/arrow-right.svg";
import recommend from "./assets/images/recommend.svg";
import evaluation from "./assets/images/evaluation.svg";
import triangle from "./assets/images/triangle.svg";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
import modalImage from "./assets/images/modal.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
//import image1 from "./image1.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Question3 from "./questions/Question3";
import Question4 from "./questions/Question4";
import Question5 from "./questions/Question5";
import Question6 from "./questions/Question6";
import Question7 from "./questions/Question7";
import Question8 from "./questions/Question8";
import Question9 from "./questions/Question9";
import Question10 from "./questions/Question10";
import Question11 from "./questions/Question11";
import Question0 from "./questions/Question0";
import close from "./assets/images/x.svg";
import call from "./assets/images/call.svg";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();

  // function changeLanguage(e) {
  //   i18n.changeLanguage(e.target.value);
  // }

  const changeLanguage = (val, lang) => {
    i18n.changeLanguage(val);
    setSelectedlang(lang);
  };
  const aboutSection = useRef(null);
  const [selectedLang, setSelectedlang] = useState("English");
  const [accept, setAccept] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);
  const [submit, setSubmit] = useState(false);
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
  });

  const [isEmptyFirstName, setIsEmptyFirstName] = useState(false);
  const [isEmptyLastName, setIsEmptyLastName] = useState(false);
  const [isEmptyCompany, setIsEmptyCompany] = useState(false);
  const [isEmptyJobTitle, setIsEmptyJobTitle] = useState(false);
  const [isEmptyPhone, setIsEmptyPhone] = useState(false);
  const [isEmptyCountry, setIsEmptyCountry] = useState(false);

  const nextQuestion = () => {
    setQuestionIndex((previous) => (previous == 11 ? previous : previous + 1));
  };
  const previousQuestion = () => {
    setQuestionIndex((previous) => (previous == 0 ? previous : previous - 1));
  };

  const nextImage = () => {
    setImageIndex((previous) => (previous == 6 ? previous : previous + 1));
  };
  const previousImage = () => {
    setImageIndex((previous) => (previous == 1 ? previous : previous - 1));
  };

  const evaluate = () => {
    setSubmit(true);
  };

  const closeModal = () => {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("staticBackdrop").style.display = "none";
    document.getElementById("staticBackdrop").classList.remove("show");
  };

  const openModal = () => {
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("staticBackdrop").style.display = "block";
    document.getElementById("staticBackdrop").classList.add("show");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (/^[0-9]{0,17}$/.test(value)) {
        setFormInput((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else {
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    if (name === "firstName" && value) {
      setIsEmptyFirstName(false);
    }
    if (name === "lastName" && value) {
      setIsEmptyLastName(false);
    }
    if (name === "company" && value) {
      setIsEmptyCompany(false);
    }
    if (name === "jobTitle" && value) {
      setIsEmptyJobTitle(false);
    }
    if (name === "phone" && value) {
      setIsEmptyPhone(false);
    }
    if (name === "country" && value) {
      setIsEmptyCountry(false);
    }
  };

  const handleScroll = (e) => {
    const inputFielidValue = { ...formInput };
    let errorFlag = false;
    if (!inputFielidValue.firstName) {
      setIsEmptyFirstName(true);
      errorFlag = true;
    }
    if (!inputFielidValue.last) {
      setIsEmptyLastName(true);
      errorFlag = true;
    }
    if (!inputFielidValue.company) {
      setIsEmptyCompany(true);
      errorFlag = true;
    }
    if (!inputFielidValue.jobTitle) {
      setIsEmptyJobTitle(true);
    }
    if (!inputFielidValue.phone) {
      setIsEmptyPhone(true);
      errorFlag = true;
    }
    if (!inputFielidValue.country) {
      setIsEmptyCountry(true);
      errorFlag = true;
    }

    if (errorFlag) return;
    console.log(document.documentElement.scrollHeigh);
    e.preventDefault();
    //const main = this.main.current;
    window.scrollTo({
      top: aboutSection.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <section className="social_header_menu fixed-top bg-light overflow-visible">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex flex-column flex-sm-row align-items-center w-100 ms-5 me-5">
              <div className="p-0 pb-md-2 flex-grow-1 text-start">
                <a className="navbar-brand me-auto col p-0" href="#page-top">
                  <img
                    src={logo}
                    alt=""
                    width="190"
                    className="img-fluid text-end"
                  />
                </a>
              </div>
              <div className="p-0 py-md-2">
                <span className="navbar-text ms-auto col text-end">
                  {" "}
                  OT Cybersecurity Maturity <span>Level</span>
                </span>
              </div>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="w-100">
                    <img src={world} width="20" className="img-fluid" alt="" />
                  </span>
                  <span
                    style={{
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",

                      wordWrap: "break-word",
                    }}
                  >
                    {selectedLang}
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-lg-end"
                  data-bs-popper="none"
                >
                  <li>
                    <a
                      className={
                        selectedLang == "English"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => changeLanguage("en", "English")}
                      id="1"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        selectedLang == "Spanish"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => changeLanguage("es", "Spanish")}
                      id="2"
                    >
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        selectedLang == "Portuguese"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => changeLanguage("pt", "Portuguese")}
                      id="3"
                    >
                      Portuguese
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        selectedLang == "French"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => changeLanguage("fr", "French")}
                      id="4"
                    >
                      French
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="main_banner">
        {/* <div className="bg"> */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              // position: "absolute",
              //opacity: 0.7,
              background: "#0F0E0E",
            }}
          >
            <img
              src={imageIndex == 1 ? image1 : imageIndex == 2 ? image2 : image1}
              className="bg"
              width="100%"
              height="667"
            />
            {imageIndex != 1 && (
              <div
                style={{
                  width: 56,
                  height: 56,
                  left: "2%",
                  top: "40%",
                  position: "absolute",
                  cursor: "pointer",
                  //background: "#F3F3F3",
                }}
                onClick={() => previousImage()}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.25)",
                    borderRadius: 9999,
                    backdropFilter: "blur(10px)",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={arrowLeft} />
                </div>
              </div>
            )}
            {imageIndex != 6 && (
              <div
                style={{
                  width: 56,
                  height: 56,
                  right: "2%",
                  top: "40%",
                  position: "absolute",
                  cursor: "pointer",
                  //background: "#F3F3F3",
                }}
                onClick={() => nextImage()}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.25)",
                    borderRadius: 9999,
                    backdropFilter: "blur(10px)",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={arrowRight} />
                </div>
              </div>
            )}
            <div
              style={{
                width: "80%",
                height: 306,
                left: "11%",
                top: "25%",
                right: "13%",
                position: "absolute",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 953,
                  color: "white",
                  fontSize: 48,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  lineHeight: 1,
                  textAlign: "left",
                  wordWrap: "break-word",
                }}
              >
                {t("home")}
              </div>
              <div
                style={{
                  width: 496,
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  textAlign: "left",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div style={{ width: 622 }}>
                    <span
                      style={{
                        color: "#2CCCD3",
                        fontSize: 32,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: "700",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      61%{" "}
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontSize: 32,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: "700",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      of intrusions
                    </span>
                    <span
                      style={{
                        color: "#2CCCD3",
                        fontSize: 32,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: "700",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      {" "}
                      affected OT systems.
                    </span>
                  </div>
                </div>
              </div>
              {/* <div
                style={{
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 12,
                  paddingBottom: 12,
                  background: "#DA291C",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 12,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: "600",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    Complete Questionnaire
                  </div>
                </div>
              </div> */}
            </div>
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "11%",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div
                className={imageIndex == 1 ? "selectedImg" : "unSelectedImg"}
              />
              <div
                className={imageIndex == 2 ? "selectedImg" : "unSelectedImg"}
              />
              <div
                className={imageIndex == 3 ? "selectedImg" : "unSelectedImg"}
              />
              <div
                className={imageIndex == 4 ? "selectedImg" : "unSelectedImg"}
              />
              <div
                className={imageIndex == 5 ? "selectedImg" : "unSelectedImg"}
              />
              <div
                className={imageIndex == 6 ? "selectedImg" : "unSelectedImg"}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "10%",
                width: "76%",
                height: "75%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: 64,
                  background: "rgba(255, 255, 255, 0.60)",
                  boxShadow: "0px 10px 50px rgba(85, 85, 85, 0.04)",
                  borderRadius: 30,
                  backdropFilter: "blur(100px)",
                  flexDirection: "column",
                  //justifyContent: "center",
                  alignItems: "flex-start",
                  gap: 36,
                  display: "inline-flex",
                }}
              >
                <div>
                  <span
                    style={{
                      color: "#0F0E0E",
                      fontSize: 28,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    Fill in the form to{" "}
                  </span>
                  <span
                    style={{
                      color: "#DA291C",
                      fontSize: 28,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    continue evaluating
                  </span>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  {/* <form class="row g-3 fullWidth requires-validation"> */}
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 32,
                      display: "inline-flex",
                    }}
                  >
                    <div class="form-floating ">
                      <input
                        type="text"
                        class={
                          isEmptyFirstName
                            ? "form-control required form-control-required"
                            : "form-control form-control-not-required"
                        }
                        placeholder={t("firstName")}
                        name="firstName"
                        value={formInput.firstName}
                        onChange={(e) => handleChange(e)}
                      />
                      <label for="floatingInputInvalid">{t("firstName")}</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="text"
                        class={
                          isEmptyLastName
                            ? "form-control required form-control-required"
                            : "form-control form-control-not-required"
                        }
                        id="floatingInputInvalid"
                        placeholder={t("lastName")}
                        name="lastName"
                        value={formInput.lastName}
                        onChange={(e) => handleChange(e)}
                      />
                      <p id="errorPhone" className="errorText"></p>
                      <label for="floatingPassword">{t("lastName")}</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="text"
                        class={
                          isEmptyCompany
                            ? "form-control required form-control-required"
                            : "form-control form-control-not-required"
                        }
                        id="floatingPassword"
                        placeholder={t("company")}
                        name="company"
                        value={formInput.company}
                        onChange={(e) => handleChange(e)}
                      />
                      <label for="floatingPassword">{t("company")}</label>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      gap: 32,
                      display: "inline-flex",
                    }}
                  >
                    <div class="form-floating">
                      <input
                        type="text"
                        class={
                          isEmptyJobTitle
                            ? "form-control required form-control-required"
                            : "form-control form-control-not-required"
                        }
                        id="floatingPassword"
                        placeholder={t("jobTitle")}
                        name="jobTitle"
                        value={formInput.jobTitle}
                        onChange={(e) => handleChange(e)}
                      />
                      <label for="floatingPassword">{t("jobTitle")}</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="text"
                        class={
                          isEmptyPhone
                            ? "form-control required form-control-required"
                            : "form-control form-control-not-required"
                        }
                        id="floatingPassword"
                        placeholder={t("phone")}
                        name="phone"
                        value={formInput.phone}
                        onChange={(e) => handleChange(e)}
                      />
                      <p id="errorPhone" className="errorText">
                        {isEmptyPhone ? t("phoneError") : ""}
                      </p>
                      <label for="floatingPassword">{t("phone")}</label>
                    </div>
                    <div
                      class={
                        isEmptyCountry
                          ? "form-floating requiredSelect"
                          : "form-floating"
                      }
                    >
                      <select
                        class={
                          isEmptyCountry
                            ? "form-select form-control-required"
                            : "form-select form-control-not-required"
                        }
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        name="country"
                        value={formInput.country}
                        onChange={(e) => handleChange(e)}
                      >
                        <option selected>{t("selectCountry")}</option>
                        <option value="1">India</option>
                        <option value="2">France</option>
                        <option value="3">Germany</option>
                      </select>
                      <label for="floatingSelect">{t("country")}</label>
                    </div>
                  </div>

                  {/* </form> */}
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      height: 48,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 16,
                      display: "flex",
                    }}
                  >
                    {/* <div
                  style={{
                    width: 20,
                    height: 20,
                    border: "1.50px #DA291C solid",
                  }}
                /> */}
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={() => setAccept(!accept)}
                      // id="cb1"
                      // style={{ color: "red", marginTop: 6 }}
                    ></input>
                    <div
                      style={{
                        flex: "1 1 0",
                        color: "#0F0E0E",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "300",
                        lineHeight: 1,
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      {t("accept")}
                    </div>
                  </div>
                  <button
                    style={{
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                      paddingBottom: 12,
                      background: !accept ? "grey" : "#DA291C",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "inline-flex",
                      cursor: !accept ? "auto" : "pointer",
                      borderColor: !accept ? "grey" : "#DA291C",
                    }}
                    disabled={!accept}
                    onClick={(e) => handleScroll(e)}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Inter",
                          fontWeight: "600",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        {t("buttonName")}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "80%",
            height: 500,
            paddingTop: 300,
            paddingBottom: 10,
            //paddingLeft: 80,
            left: "11%",
            paddingRight: 80,
            //justifyContent: "center",
            //alignItems: "center",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <div style={{ flex: 1, textAlign: "left", marginTop: 30 }}>
            <span
              style={{
                color: "#DA291C",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Protecting and guaranteeing{" "}
            </span>
            <span
              style={{
                color: "#0F0E0E",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              your operation's security{" "}
            </span>
            <span
              style={{
                color: "#DA291C",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              is becoming
            </span>
            <span
              style={{
                color: "#0F0E0E",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              increasingly{" "}
            </span>
            <span
              style={{
                color: "#DA291C",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              urgent
            </span>
            <span
              style={{
                color: "#0F0E0E",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              .
            </span>
          </div>
          <div
            style={{
              flex: 1,
              color: "#0F0E0E",
              textAlign: "left",
              marginTop: 30,
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "300",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            By completing a brief survey of the state of maturity of your OT
            network, we will give you a personalized report of the level at
            which you are. Besides, we will tell you how you can protect
            yourself from the growing cyber threats and you will be able to
            request a free reading of the results in a virtual session with a
            Fortinet expert.
            <div
              style={{
                width: "100%",
                color: "#0F0E0E",
                fontSize: 16,
                paddingTop: 20,
                fontFamily: "Inter",
                fontWeight: "300",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              You will receive your evaluation, risks and recommendations
              according to the level you are at and you will be able to see
              examples of critical cases of companies of your same industry.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            // position: "absolute",
            //opacity: 0.7,
            background:
              "linear-gradient(0deg, rgba(15, 14, 14, 0.20) 0%, rgba(15, 14, 14, 0.20) 100%)",
          }}
        >
          <img src={image2} className="bg1" width="100%" height="500" />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            background: "white",
            top: 50,
          }}
          ref={aboutSection}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "white",
              borderTop: "1px rgba(218, 41, 28, 0.20) solid",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 76,
                paddingTop: 16,
                paddingBottom: 16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: questionIndex == 0 ? "11%" : "11%",
                  display: "inline-flex",
                }}
              >
                {questionIndex == 0 && (
                  <div style={{ width: "65%", textAlign: "left" }}>
                    <span
                      style={{
                        color: "black",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      Select the industry to{" "}
                    </span>
                    <span
                      style={{
                        color: "#DA291C",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      continue evaluating
                    </span>
                    <span
                      style={{
                        color: "black",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      {" "}
                    </span>
                  </div>
                )}
                {questionIndex != 0 && questionIndex != 11 && (
                  <div style={{ width: "85%", textAlign: "left" }}>
                    <span
                      style={{
                        color: "black",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      Please answer all questions to get a{" "}
                    </span>
                    <span
                      style={{
                        color: "#DA291C",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      personalized report
                    </span>
                    <span
                      style={{
                        color: "black",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      {" "}
                    </span>
                  </div>
                )}
                {questionIndex == 11 && (
                  <div style={{ width: "85%", textAlign: "left" }}>
                    <span
                      style={{
                        color: "black",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Fill in the form to{" "}
                    </span>
                    <span
                      style={{
                        color: "#DA291C",
                        fontSize: 28,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      finish evaluating
                    </span>
                  </div>
                )}
                {questionIndex != 0 && (
                  <div
                    style={{
                      background: "white",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      //paddingLeft: "20%",
                      gap: 16,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#DA291C",
                        fontSize: 20,
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: 1,
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      {questionIndex}/11
                    </div>
                  </div>
                )}
              </div>
            </div>

            {questionIndex != 0 && questionIndex != 11 && (
              <div
                style={{
                  alignSelf: "stretch",
                  height: 8,
                  paddingRight: 0,
                  //justifyContent: "flex-start",
                  //alignItems: "center",
                  //display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 131,
                    height: 8,
                    background:
                      "linear-gradient(270deg, #DA291C 0%, rgba(218, 41, 28, 0) 100%)",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
              </div>
            )}
            {
              questionIndex == 11 && (
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 8,
                    paddingRight: 0,
                    //justifyContent: "flex-start",
                    //alignItems: "center",
                    //display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(270deg, #DA291C 0%, rgba(218, 41, 28, 0) 100%)",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                </div>
              )
              // No text styles in this selection
            }
          </div>

          <div
            style={{
              width: "100%",
              height: "100%",
              paddingLeft:
                questionIndex == 0
                  ? "11%"
                  : questionIndex == 11
                  ? "11%"
                  : "11%",
              paddingRight:
                questionIndex == 0
                  ? "11%"
                  : questionIndex == 11
                  ? "11%"
                  : "11%",
              flexDirection: "column",
              justifyContent: "center",
              //alignItems: "center",
              gap: 10,
              display: "inline-flex",
              textAlign: "left",
              background: "#F0F0F0",
            }}
          >
            {questionIndex == 0 && <Question0 />}
            {questionIndex == 1 && <Question1 />}
            {questionIndex == 2 && <Question2 />}
            {questionIndex == 3 && <Question3 />}
            {questionIndex == 4 && <Question4 />}
            {questionIndex == 5 && <Question5 />}
            {questionIndex == 6 && <Question6 />}
            {questionIndex == 7 && <Question7 />}
            {questionIndex == 8 && <Question8 />}
            {questionIndex == 9 && <Question9 />}
            {questionIndex == 10 && <Question10 />}
            {questionIndex == 11 && <Question11 />}
            {questionIndex == 11 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  //paddingLeft: "11%",
                  //paddingRight: "11%",
                  flexDirection: "column",
                  justifyContent: "center",
                  //ss alignItems: "flex-end",
                  marginBottom: 20,
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    // id="cb1"
                    // style={{ color: "red", marginTop: 6 }}
                  ></input>

                  <div
                    style={{
                      width: "100%",
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "300",
                      wordWrap: "break-word",
                      textAlign: "left",
                    }}
                  >
                    By clicking on the EVALUATE button, I accept that Fortinet
                    can send me by email extended information regarding the
                    cybersecurity maturity level of my company's and industry's
                    OT environment.
                  </div>

                  <button
                    className="buttonEvaluate"
                    onClick={(e) => openModal()}
                    // data-bs-toggle="modal"
                    // data-bs-target="#staticBackdrop"
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          background: "#da291c",
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Inter",
                          fontWeight: "600",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        Evaluate
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
            {questionIndex == 0 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  // paddingLeft: 180,
                  paddingRight: "0%",
                  flexDirection: "column-reverse",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginBottom: 20,
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <button
                    className="buttonEvaluate"
                    onClick={(e) => nextQuestion()}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          background: "#da291c",
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Inter",
                          fontWeight: "600",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        Evaluate
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
            {questionIndex != 0 && questionIndex != 11 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  // paddingLeft: 180,
                  //paddingRight: 180,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginBottom: 20,
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className={
                      questionIndex == 0 ? "buttonDisable" : "buttonEnable"
                    }
                    onClick={(e) => previousQuestion()}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      {/* <img src={buttonLeft} /> */}
                      <BsArrowLeft />
                      <div
                        style={{
                          //color: "#DA291C",
                          fontSize: 16,
                          fontFamily: "Inter",
                          fontWeight: "600",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        Previous
                      </div>
                    </div>
                  </div>
                  <div className="buttonEnable" onClick={(e) => nextQuestion()}>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          // color: "#DA291C",
                          fontSize: 16,
                          fontFamily: "Inter",
                          fontWeight: "600",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        Next
                      </div>

                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        style={{
                          width: "100%",
                          //height: 400,
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            // alignSelf: "stretch",
                            color: "#DA291C",
                            fontSize: 20,
                            fontFamily: "Inter",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            wordWrap: "break-word",
                            marginTop: 20,
                            textAlign: "left",
                          }}
                        >
                          {submit ? (
                            <>
                              Congratulations! <br />
                              Your report will be sent to your corporate email
                              soon
                            </>
                          ) : (
                            "Let yourself be advised by our specialists"
                          )}
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginTop: 30,
                            textAlign: "left",
                          }}
                        >
                          <span
                            style={{
                              color: "#0F0E0E",
                              fontSize: 36,
                              fontFamily: "Inter",
                              fontWeight: "500",
                              textAlign: "left",
                              lineHeight: 1,
                              wordWrap: "break-word",
                            }}
                          >
                            Remember that this report can also be personalized
                            in a{" "}
                          </span>
                          <span
                            style={{
                              color: "#DA291C",
                              fontSize: 36,
                              fontFamily: "Inter",
                              fontWeight: "500",
                              textAlign: "left",
                              wordWrap: "break-word",
                              lineHeight: 1,
                            }}
                          >
                            virtual session at no cost
                          </span>
                          <span
                            style={{
                              color: "#0F0E0E",
                              fontSize: 36,
                              fontFamily: "Inter",
                              fontWeight: "500",
                              textAlign: "left",
                              lineHeight: 1,
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            with a Fortinet expert
                          </span>
                        </div>
                        {!submit && (
                          <>
                            <div
                              style={{
                                width: "100%",
                                color: "#0F0E0E",
                                fontSize: 20,
                                fontFamily: "Inter",
                                fontWeight: "400",
                                textAlign: "left",
                                wordWrap: "break-word",
                                marginTop: 20,
                              }}
                            >
                              Your report will be sent to your corporate email
                            </div>

                            <div
                              style={{
                                width: "100%",
                                height: "13%",
                                paddingLeft: 24,
                                paddingRight: 24,
                                paddingTop: 12,
                                paddingBottom: 12,
                                background: "#F3F3F3",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: 12,
                                display: "inline-flex",
                                marginTop: 20,
                              }}
                            >
                              <div
                                style={{
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 8,
                                  display: "inline-flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "#0F0E0E",
                                    fontSize: 16,
                                    fontFamily: "Inter",
                                    fontWeight: "400",
                                    lineHeight: 1,
                                    wordWrap: "break-word",
                                  }}
                                >
                                  Company Email
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div
                          style={{
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                            paddingBottom: 12,
                            background: "#DA291C",
                            marginTop: submit ? 100 : 20,
                            width: 120,
                            cursor: "pointer",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 12,
                            display: "flex",
                          }}
                          onClick={() => setSubmit(true)}
                        >
                          <div
                            style={{
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: 8,
                              display: "inline-flex",
                            }}
                          >
                            {submit ? (
                              <div
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  fontFamily: "Inter",
                                  fontWeight: "600",
                                  lineHeight: 1,
                                  wordWrap: "break-word",
                                  flexDirection: "row",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                Call us <img src={call} />
                              </div>
                            ) : (
                              <div
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  fontFamily: "Inter",
                                  fontWeight: "600",
                                  lineHeight: 1,
                                  wordWrap: "break-word",
                                }}
                              >
                                Confirm
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        style={{
                          width: "100%",
                          height: 450,
                          position: "relative",
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
                            borderTopRightRadius: 300,
                          }}
                          src={modalImage}
                        />
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            padding: 2,
                            right: 3,
                            position: "absolute",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "inline-flex",
                            cursor: "pointer",
                          }}
                          onClick={() => closeModal()}
                        >
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              position: "relative",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              display: "flex",
                            }}
                          >
                            <img
                              src={close}
                              style={{ width: 36, height: 36 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal-backdrop fade show"
          id="backdrop"
          style={{ display: "none" }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: 80,
            paddingBottom: 80,
            paddingLeft: "11%",
            paddingRight: "11%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 115,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 709, textAlign: "left" }}>
            <span
              style={{
                color: "#0F0E0E",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              To{" "}
            </span>
            <span
              style={{
                color: "#DA291C",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              discover how secure your operating
            </span>
            <span
              style={{
                color: "#0F0E0E",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              {" "}
              environment is, follow these 3 steps and find out how Fortinet can
              help.
            </span>
          </div>
          <div style={{ width: "100%", height: 777 }}>
            <div className="box arrow-bottom">
              <div
                style={{
                  color: "#DA291C",
                  fontSize: 200,
                  width: "20%",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                1
              </div>
              <div style={{ width: "70%", textAlign: "left" }}>
                <div
                  style={{
                    color: "#DA291C",
                    fontSize: 36,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  {t("question")}
                </div>
                <div
                  style={{
                    width: 555,
                    color: "#0F0E0E",
                    fontSize: 18,
                    fontFamily: "Inter",
                    fontWeight: "300",
                    textAlign: "left",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  {t("questiontext")}
                </div>
              </div>
              <div style={{ width: "15%" }}>
                <img src={question} />
              </div>
            </div>

            <div className="box arrow-bottom">
              <div
                style={{
                  color: "#DA291C",
                  fontSize: 200,
                  width: "20%",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                2
              </div>
              <div style={{ width: "70%", textAlign: "left" }}>
                <div
                  style={{
                    color: "#DA291C",
                    fontSize: 36,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  {t("Evaluation")}
                </div>
                <div
                  style={{
                    width: 555,
                    color: "#0F0E0E",
                    fontSize: 18,
                    fontFamily: "Inter",
                    fontWeight: "300",
                    textAlign: "left",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  {t("EvaluationText")}
                </div>
              </div>
              <div style={{ width: "15%" }}>
                <img src={evaluation} />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: 243,
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                display: "flex",
                //justifyContent: "center",
                alignItems: "center",
                //flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "#DA291C",
                  fontSize: 200,
                  width: "20%",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                3
              </div>
              <div style={{ width: "70%", textAlign: "left" }}>
                <div
                  style={{
                    color: "#DA291C",
                    fontSize: 36,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  {t("Recommendation")}
                </div>
                <div
                  style={{
                    width: 555,
                    color: "#0F0E0E",
                    fontSize: 18,
                    fontFamily: "Inter",
                    fontWeight: "300",
                    textAlign: "left",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  {t("RecommendationText")}
                </div>
              </div>
              <div style={{ width: "15%" }}>
                <img src={recommend} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 88,
            paddingLeft: "11%",
            //paddingRight: 876,
            background: "#0F0E0E",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Copyright © 2023 Fortinet, Inc. All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
