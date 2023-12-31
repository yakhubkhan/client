import { useState, useRef, useEffect } from "react";
import axios from "axios";

import logo from "./Fortinet logo.svg";
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
//import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import useDeviceDetect from "./useDeviceDetect";
import dot from "./assets/images/dot.png";
import report from "./assets/images/report.png";
import reportImage from "./assets/images/reportImage.svg";
import useScreenSize from "./useScreenSize";
import { Country } from "./country";
function App() {
  //function useDeviceDetect() {

  const [isMobileView, setIsMobileView] = useState(false);

  const { t, i18n } = useTranslation();
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 460) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [screenSize.width]);

  useEffect(() => {
    console.log();
    //if (aboutSection.current.offsetTop > 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const isTouchDevice = useDeviceDetect();
  const changeLanguage = (val, lang) => {
    i18n.changeLanguage(val);
    setSelectedlang(lang);
    console.log(i18n.language);
  };
  const aboutSection = useRef(null);
  const [selectedLang, setSelectedlang] = useState("English");
  const [accept, setAccept] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);
  const [submit, setSubmit] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);
  const [industry, setIndustry] = useState("");
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
  const [questionLevel, setQuestionLevel] = useState(10);
  const [enableEvaulate, setEnableEvaulate] = useState(false);
  const [companyEmail, setCompanyEmail] = useState("");
  const [enableComfirm, setEnableConfirm] = useState(false);
  const [questionList, setQuestionList] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const nextQuestion = () => {
    setQuestionIndex((previous) => (previous == 10 ? previous : previous + 1));
    setQuestionLevel((previous) => previous + 8);
    if (questionIndex == 10) {
      openModal();
      setQuestionLevel((previous) => 100);
    }
  };
  const previousQuestion = () => {
    setQuestionIndex((previous) => (previous == 0 ? previous : previous - 1));
    if (questionIndex != 0) {
      setQuestionLevel((previous) => previous - 8);
    }
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

    let total = 0;
    for (let i = 1; i < questionList.length; i++) {
      total = total + parseInt(questionList[i]);
    }
    let avg = total / 10;

    let obj = {
      first_name: formInput.firstName,
      last_name: formInput.lastName,
      company: formInput.company,
      job_title: formInput.jobTitle,
      phone: formInput.phone,
      country: formInput.country,
      industry: industry,
      maturity_level: avg,
      vertical: i18n.language,
      email: companyEmail,
    };

    axios.post("/savedinfo", obj).then(
      (response) => {
        setQuestionIndex((previous) => previous + 1);
        let tempInput = { ...formInput };
        //setFormInput({
        //  let tempInput={...formInput};
        tempInput.firstName = "";
        tempInput.lastName = "";
        tempInput.company = "";
        tempInput.jobTitle = "";
        tempInput.phone = "";
        tempInput.country = "";
        setFormInput(tempInput);
      },
      (error) => {
        setQuestionIndex((previous) => previous + 1);
      }
    );
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
    if (!inputFielidValue.lastName) {
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

    e.preventDefault();
    setEnableEvaulate(true);
    window.scrollTo({
      top: aboutSection.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  const onEmailChange = (e) => {
    setCompanyEmail(e.target.value);
    if (
      e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEnableConfirm(true);
    } else {
      setEnableConfirm(false);
    }
  };

  function handleFormSubmit(ele) {
    var submitButton = ele.querySelector("input[type=submit]");
    var spinner = document.createElement("span");
    spinner.setAttribute("class", "loader");
    submitButton.setAttribute("disabled", true);
    submitButton.style.cursor = "wait";
    submitButton.parentNode.appendChild(spinner);
    return true;
  }

  return (
    <div className="App">
      <div className="social_header_menu fixed-top bg-light overflow-visible">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <div className="container-fluid"> */}
          <div className="grid_items_header">
            <div className="grid_item_header divide">
              {/* <a className="navbar-brand" href="#page-top"> */}
              <img src={logo} alt="" width="190" />
              {/* </a> */}
              <span className="navbar-text">
                {" "}
                OT Cybersecurity Maturity <span>Level</span>
              </span>
            </div>
            <div className="grid_item_header paddingLeftCountry">
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
                      width: "75px",
                      display: "inline-block",
                      paddingLeft: "7px",
                    }}
                  >
                    {selectedLang}
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-lg-center"
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
      </div>
      <div className="main_banner">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              background: "#0F0E0E",
            }}
          >
            <img
              src={imageIndex == 1 ? image1 : imageIndex == 2 ? image2 : image1}
              className="bg"
              width="100%"
              height="667"
            />
            <div className="animationOne"></div>
            <div className="animationTwo"></div>
            <div className="animationThree"></div>
            <div className="animationFour"></div>
            <div className="animationFive"></div>
            <div className="animationSix"></div>
            <div className="animationSeven"></div>
            {!isMobileView && imageIndex != 1 && (
              <div
                style={{
                  width: 56,
                  height: 56,
                  left: "2%",
                  top: "40%",
                  position: "absolute",
                  cursor: "pointer",
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
            <div className="homeText">
              <div className="homeTextTwo">{t("home")}</div>
              <div className="homeTextThird">
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
                  <div className="hometextthirdwidth">
                    <span className="homeTextThirdText">61% </span>
                    <span className="homeTextThirdTextWhite">
                      of intrusions
                    </span>
                    <span className="homeTextThirdText">
                      {" "}
                      affected OT systems.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="homeImage">
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
            <div className="floatingForm">
              <div className="floatingFromOne">
                <div className="paddingTextOne">
                  <span className="floatingFromOneText">
                    Fill in the form to{" "}
                  </span>
                  <span className="floatingFromOneTextRed">
                    continue evaluating
                  </span>
                </div>
                <form
                  method="post"
                  name="UntitledForm-1700078784437"
                  action="https://s3049749.t.eloqua.com/e/f2"
                  onsubmit="return handleFormSubmit(this)"
                  id="form8357"
                  class="elq-form"
                >
                  <input value="" type="hidden" name="elqFormName" />
                  <input value="" type="hidden" name="elqSiteId" />
                  <input name="elqCampaignId" type="hidden" />
                  <div className="layout container-fluid">
                    <div className="grid_items_form_one">
                      <div className="grid_item_form_one">
                        <div className="form-floating">
                          <div
                            id="formElement0"
                            className="elq-field-style form-element-layout row"
                          >
                            <div
                              style={{ textAlign: "left" }}
                              className="col-sm-12 col-xs-12"
                            >
                              <label className="elq-label " for="fe176969">
                                First Name
                              </label>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="field-control-wrapper">
                                    <input
                                      type="text"
                                      className="elq-item-input"
                                      name="firstName"
                                      id="fe176969"
                                      value={formInput.firstName}
                                      onChange={(e) => handleChange(e)}
                                      style={{ width: "100%" }}
                                    ></input>
                                  </div>
                                  {/* <span class=" LV_validation_message LV_invalid">
                                    This field is required
                                  </span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid_item_form_one">
                        <div className="form-floating">
                          <div
                            id="formElement1"
                            className="elq-field-style form-element-layout row"
                          >
                            <div
                              style={{ textAlign: "left" }}
                              className="col-sm-12 col-xs-12"
                            >
                              <label className="elq-label " for="fe176970">
                                {t("jobTitle")}
                              </label>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="field-control-wrapper">
                                    <input
                                      type="text"
                                      className="elq-item-input"
                                      id="fe176970"
                                      name="jobTitle"
                                      value={formInput.jobTitle}
                                      onChange={(e) => handleChange(e)}
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid_items_form_one">
                      <div className="grid_item_form_one">
                        <div className="form-floating">
                          <div
                            id="formElement0"
                            className="elq-field-style form-element-layout row"
                          >
                            <div
                              style={{ textAlign: "left" }}
                              className="col-sm-12 col-xs-12"
                            >
                              <label className="elq-label " for="fe176970">
                                {t("lastName")}
                              </label>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="field-control-wrapper">
                                    <input
                                      type="text"
                                      className="elq-item-input"
                                      name="lastName"
                                      id="fe176970"
                                      value={formInput.lastName}
                                      onChange={(e) => handleChange(e)}
                                      style={{ width: "100%" }}
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid_item_form_one">
                        <div className="form-floating">
                          <div
                            id="formElement1"
                            className="elq-field-style form-element-layout row"
                          >
                            <div
                              style={{ textAlign: "left" }}
                              className="col-sm-12 col-xs-12"
                            >
                              <label className="elq-label " for="fe176976">
                                {t("phone")}
                              </label>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="field-control-wrapper">
                                    <input
                                      type="text"
                                      className="elq-item-input"
                                      id="fe176976"
                                      name="phone"
                                      value={formInput.phone}
                                      onChange={(e) => handleChange(e)}
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid_items_form_one">
                      <div className="grid_item_form_one">
                        <div className="form-floating">
                          <div
                            id="formElement0"
                            className="elq-field-style form-element-layout row"
                          >
                            <div
                              style={{ textAlign: "left" }}
                              className="col-sm-12 col-xs-12"
                            >
                              <label className="elq-label " for="fe176972">
                                {t("company")}
                              </label>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="field-control-wrapper">
                                    <input
                                      type="text"
                                      className="elq-item-input"
                                      id="fe176972"
                                      name="company"
                                      value={formInput.company}
                                      onChange={(e) => handleChange(e)}
                                      style={{ width: "100%" }}
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid_item_form_one">
                        <div className="form-floating">
                          <div
                            id="formElement1"
                            className="elq-field-style form-element-layout row"
                          >
                            <div
                              style={{ textAlign: "left" }}
                              className="col-sm-12 col-xs-12"
                            >
                              <label className="elq-label " for="fe176975">
                                {t("country")}
                              </label>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="field-control-wrapper">
                                    <select
                                      className="elq-item-select"
                                      id="fe176975"
                                      name="country"
                                      style={{
                                        width: "100%",
                                        overflow: "hidden",
                                      }}
                                      data-value=""
                                      value={formInput.country}
                                      onChange={(e) => handleChange(e)}
                                    >
                                      {/* <option value="">
                                        {t("selectCountry")}
                                      </option> */}
                                      <option selected>
                                        {t("selectCountry")}
                                      </option>
                                      {/* {Country.map((item) => (
                                        <option value={item.name}>
                                          {item.name}
                                        </option>
                                      ))} */}
                                      <option value="Afghanistan">
                                        Afghanistan
                                      </option>
                                      <option value="Aland Islands">
                                        Aland Islands
                                      </option>
                                      <option value="Albania">Albania</option>
                                      <option value="Algeria">Algeria</option>
                                      <option value="American Samoa">
                                        American Samoa
                                      </option>
                                      <option value="Andorra">Andorra</option>
                                      <option value="Angola">Angola</option>
                                      <option value="Anguilla">Anguilla</option>
                                      <option value="Antarctica">
                                        Antarctica
                                      </option>
                                      <option value="Antigua and Barbuda">
                                        Antigua and Barbuda
                                      </option>
                                      <option value="Argentina">
                                        Argentina
                                      </option>
                                      <option value="Armenia">Armenia</option>
                                      <option value="Aruba">Aruba</option>
                                      <option value="Australia">
                                        Australia
                                      </option>
                                      <option value="Austria">Austria</option>
                                      <option value="Azerbaijan">
                                        Azerbaijan
                                      </option>
                                      <option value="Bahamas">Bahamas</option>
                                      <option value="Bahrain">Bahrain</option>
                                      <option value="Bangladesh">
                                        Bangladesh
                                      </option>
                                      <option value="Barbados">Barbados</option>
                                      <option value="Belarus">Belarus</option>
                                      <option value="Belgium">Belgium</option>
                                      <option value="Belize">Belize</option>
                                      <option value="Benin">Benin</option>
                                      <option value="Bermuda">Bermuda</option>
                                      <option value="Bhutan">Bhutan</option>
                                      <option value="Bolivia">Bolivia</option>
                                      <option value="Bonaire, Sint Eustatius and Saba">
                                        Bonaire, Sint Eustatius and Saba
                                      </option>
                                      <option value="Bosnia and Herzegovina">
                                        Bosnia and Herzegovina
                                      </option>
                                      <option value="Botswana">Botswana</option>
                                      <option value="Bouvet Island">
                                        Bouvet Island
                                      </option>
                                      <option value="Brazil">Brazil</option>
                                      <option value="British Indian Ocean Territory">
                                        British Indian Ocean Territory
                                      </option>
                                      <option value="British Virgin Islands">
                                        British Virgin Islands
                                      </option>
                                      <option value="Brunei">Brunei</option>
                                      <option value="Bulgaria">Bulgaria</option>
                                      <option value="Burkina Faso">
                                        Burkina Faso
                                      </option>
                                      <option value="Burundi">Burundi</option>
                                      <option value="Cambodia">Cambodia</option>
                                      <option value="Cameroon">Cameroon</option>
                                      <option value="Canada">Canada</option>
                                      <option value="Cape Verde">
                                        Cape Verde
                                      </option>
                                      <option value="Cayman Islands">
                                        Cayman Islands
                                      </option>
                                      <option value="Central African Republic">
                                        Central African Republic
                                      </option>
                                      <option value="Chad">Chad</option>
                                      <option value="Chile">Chile</option>
                                      <option value="China">China</option>
                                      <option value="Christmas Island">
                                        Christmas Island
                                      </option>
                                      <option value="Cocos Islands">
                                        Cocos Islands
                                      </option>
                                      <option value="Colombia">Colombia</option>
                                      <option value="Comoros">Comoros</option>
                                      <option value="Cook Islands">
                                        Cook Islands
                                      </option>
                                      <option value="Costa Rica">
                                        Costa Rica
                                      </option>
                                      <option value="Croatia">Croatia</option>
                                      <option value="Cuba">Cuba</option>
                                      <option value="Curacao">Curacao</option>
                                      <option value="Cyprus">Cyprus</option>
                                      <option value="Czech Republic">
                                        Czech Republic
                                      </option>
                                      <option value="Congo, The Democratic Republic Of The">
                                        Congo, The Democratic Republic Of The
                                      </option>
                                      <option value="Denmark">Denmark</option>
                                      <option value="Djibouti">Djibouti</option>
                                      <option value="Dominica">Dominica</option>
                                      <option value="Dominican Republic">
                                        Dominican Republic
                                      </option>
                                      <option value="Ecuador">Ecuador</option>
                                      <option value="Egypt">Egypt</option>
                                      <option value="El Salvador">
                                        El Salvador
                                      </option>
                                      <option value="Equatorial Guinea">
                                        Equatorial Guinea
                                      </option>
                                      <option value="Eritrea">Eritrea</option>
                                      <option value="Estonia">Estonia</option>
                                      <option value="Ethiopia">Ethiopia</option>
                                      <option value="Falkland Islands">
                                        Falkland Islands
                                      </option>
                                      <option value="Faroe Islands">
                                        Faroe Islands
                                      </option>
                                      <option value="Fiji">Fiji</option>
                                      <option value="Finland">Finland</option>
                                      <option value="France">France</option>
                                      <option value="French Guiana">
                                        French Guiana
                                      </option>
                                      <option value="French Polynesia">
                                        French Polynesia
                                      </option>
                                      <option value="French Southern Territories">
                                        French Southern Territories
                                      </option>
                                      <option value="Gabon">Gabon</option>
                                      <option value="Gambia">Gambia</option>
                                      <option value="Georgia">Georgia</option>
                                      <option value="Germany">Germany</option>
                                      <option value="Ghana">Ghana</option>
                                      <option value="Gibraltar">
                                        Gibraltar
                                      </option>
                                      <option value="Greece">Greece</option>
                                      <option value="Greenland">
                                        Greenland
                                      </option>
                                      <option value="Grenada">Grenada</option>
                                      <option value="Guadeloupe">
                                        Guadeloupe
                                      </option>
                                      <option value="Guam">Guam</option>
                                      <option value="Guatemala">
                                        Guatemala
                                      </option>
                                      <option value="Guernsey">Guernsey</option>
                                      <option value="Guinea">Guinea</option>
                                      <option value="Guinea-Bissau">
                                        Guinea-Bissau
                                      </option>
                                      <option value="Guyana">Guyana</option>
                                      <option value="Haiti">Haiti</option>
                                      <option value="Heard Island and McDonald Islands">
                                        Heard Island and McDonald Islands
                                      </option>
                                      <option value="Holy See (Vatican City State)">
                                        Holy See (Vatican City State)
                                      </option>
                                      <option value="Honduras">Honduras</option>
                                      <option value="Hong Kong">
                                        Hong Kong
                                      </option>
                                      <option value="Hungary">Hungary</option>
                                      <option value="Iceland">Iceland</option>
                                      <option value="India">India</option>
                                      <option value="Indonesia">
                                        Indonesia
                                      </option>
                                      <option value="Iran, Islamic Republic of">
                                        Iran, Islamic Republic of
                                      </option>
                                      <option value="Iraq">Iraq</option>
                                      <option value="Ireland">Ireland</option>
                                      <option value="Isle of Man">
                                        Isle of Man
                                      </option>
                                      <option value="Israel">Israel</option>
                                      <option value="Italy">Italy</option>
                                      <option value="Cote D'Ivoire">
                                        Cote D'Ivoire
                                      </option>
                                      <option value="Jamaica">Jamaica</option>
                                      <option value="Japan">Japan</option>
                                      <option value="Jersey">Jersey</option>
                                      <option value="Jordan">Jordan</option>
                                      <option value="Kazakhstan">
                                        Kazakhstan
                                      </option>
                                      <option value="Kenya">Kenya</option>
                                      <option value="Kiribati">Kiribati</option>
                                      <option value="Kosovo">Kosovo</option>
                                      <option value="Kuwait">Kuwait</option>
                                      <option value="Kyrgyzstan">
                                        Kyrgyzstan
                                      </option>
                                      <option value="Laos">Laos</option>
                                      <option value="Latvia">Latvia</option>
                                      <option value="Lebanon">Lebanon</option>
                                      <option value="Lesotho">Lesotho</option>
                                      <option value="Liberia">Liberia</option>
                                      <option value="Libya">Libya</option>
                                      <option value="Liechtenstein">
                                        Liechtenstein
                                      </option>
                                      <option value="Lithuania">
                                        Lithuania
                                      </option>
                                      <option value="Luxembourg">
                                        Luxembourg
                                      </option>
                                      <option value="Macau">Macau</option>
                                      <option value="Republic of North Macedonia">
                                        Republic of North Macedonia
                                      </option>
                                      <option value="Madagascar">
                                        Madagascar
                                      </option>
                                      <option value="Malawi">Malawi</option>
                                      <option value="Malaysia">Malaysia</option>
                                      <option value="Maldives">Maldives</option>
                                      <option value="Mali">Mali</option>
                                      <option value="Malta">Malta</option>
                                      <option value="Mashall Islands">
                                        Mashall Islands
                                      </option>
                                      <option value="Martinique">
                                        Martinique
                                      </option>
                                      <option value="Mauritania">
                                        Mauritania
                                      </option>
                                      <option value="Mauritius">
                                        Mauritius
                                      </option>
                                      <option value="Mayotte">Mayotte</option>
                                      <option value="Mexico">Mexico</option>
                                      <option value="Micronesia">
                                        Micronesia
                                      </option>
                                      <option value="Moldova, Republic of">
                                        Moldova, Republic of
                                      </option>
                                      <option value="Monaco">Monaco</option>
                                      <option value="Mongolia">Mongolia</option>
                                      <option value="Montenegro">
                                        Montenegro
                                      </option>
                                      <option value="Montserrat">
                                        Montserrat
                                      </option>
                                      <option value="Morocco">Morocco</option>
                                      <option value="Mozambique">
                                        Mozambique
                                      </option>
                                      <option value="Myanmar">Myanmar</option>
                                      <option value="Namibia">Namibia</option>
                                      <option value="Nauru">Nauru</option>
                                      <option value="Nepal">Nepal</option>
                                      <option value="Netherlands Antilles">
                                        Netherlands Antilles
                                      </option>
                                      <option value="Netherlands">
                                        Netherlands
                                      </option>
                                      <option value="New Caledonia">
                                        New Caledonia
                                      </option>
                                      <option value="New Zealand">
                                        New Zealand
                                      </option>
                                      <option value="Nicaragua">
                                        Nicaragua
                                      </option>
                                      <option value="Niger">Niger</option>
                                      <option value="Nigeria">Nigeria</option>
                                      <option value="Niue">Niue</option>
                                      <option value="Norfolk Island">
                                        Norfolk Island
                                      </option>
                                      <option value="Northern Mariana Islands">
                                        Northern Mariana Islands
                                      </option>
                                      <option value="Norway">Norway</option>
                                      <option value="Oman">Oman</option>
                                      <option value="Pakistan">Pakistan</option>
                                      <option value="Palau">Palau</option>
                                      <option value="Palestine, State of">
                                        Palestine, State of
                                      </option>
                                      <option value="Panama">Panama</option>
                                      <option value="Papua New Guinea">
                                        Papua New Guinea
                                      </option>
                                      <option value="Paraguay">Paraguay</option>
                                      <option value="Peru">Peru</option>
                                      <option value="Philippines">
                                        Philippines
                                      </option>
                                      <option value="Pitcairn Islands">
                                        Pitcairn Islands
                                      </option>
                                      <option value="Poland">Poland</option>
                                      <option value="Portugal">Portugal</option>
                                      <option value="Qatar">Qatar</option>
                                      <option value="Congo">Congo</option>
                                      <option value="Reunion">Reunion</option>
                                      <option value="Romania">Romania</option>
                                      <option value="Russian Federation">
                                        Russian Federation
                                      </option>
                                      <option value="Rwanda">Rwanda</option>
                                      <option value="Saint Barthelemy">
                                        Saint Barthelemy
                                      </option>
                                      <option value="Saint Helena">
                                        Saint Helena
                                      </option>
                                      <option value="Saint Kitts and Nevis">
                                        Saint Kitts and Nevis
                                      </option>
                                      <option value="Saint Lucia">
                                        Saint Lucia
                                      </option>
                                      <option value="Saint Martin">
                                        Saint Martin
                                      </option>
                                      <option value="Saint Pierre and Miquelon">
                                        Saint Pierre and Miquelon
                                      </option>
                                      <option value="Saint Vincent and the Grenadines">
                                        Saint Vincent and the Grenadines
                                      </option>
                                      <option value="Samoa">Samoa</option>
                                      <option value="San Marino">
                                        San Marino
                                      </option>
                                      <option value="Sao Tome and Principe">
                                        Sao Tome and Principe
                                      </option>
                                      <option value="Saudi Arabia">
                                        Saudi Arabia
                                      </option>
                                      <option value="Senegal">Senegal</option>
                                      <option value="Serbia">Serbia</option>
                                      <option value="Seychelles">
                                        Seychelles
                                      </option>
                                      <option value="Sierra Leone">
                                        Sierra Leone
                                      </option>
                                      <option value="Singapore">
                                        Singapore
                                      </option>
                                      <option value="Sint Maarten (Dutch part)">
                                        Sint Maarten (Dutch part)
                                      </option>
                                      <option value="Slovakia">Slovakia</option>
                                      <option value="Slovenia">Slovenia</option>
                                      <option value="Solomon Islands">
                                        Solomon Islands
                                      </option>
                                      <option value="Somalia">Somalia</option>
                                      <option value="South Africa">
                                        South Africa
                                      </option>
                                      <option value="South Georgia and the South Sandwich Islands">
                                        South Georgia and the South Sandwich
                                        Islands
                                      </option>
                                      <option value="South Korea">
                                        South Korea
                                      </option>
                                      <option value="South Sudan">
                                        South Sudan
                                      </option>
                                      <option value="Spain">Spain</option>
                                      <option value="Sri Lanka">
                                        Sri Lanka
                                      </option>
                                      <option value="Sudan">Sudan</option>
                                      <option value="Suriname">Suriname</option>
                                      <option value="Svalbard and Jan Mayen">
                                        Svalbard and Jan Mayen
                                      </option>
                                      <option value="Swaziland">
                                        Swaziland
                                      </option>
                                      <option value="Sweden">Sweden</option>
                                      <option value="Switzerland">
                                        Switzerland
                                      </option>
                                      <option value="Syrian Arab Republic">
                                        Syrian Arab Republic
                                      </option>
                                      <option value="Taiwan">Taiwan</option>
                                      <option value="Tajikistan">
                                        Tajikistan
                                      </option>
                                      <option value="Tanzania, United Republic of">
                                        Tanzania, United Republic of
                                      </option>
                                      <option value="Thailand">Thailand</option>
                                      <option value="Timor-Leste">
                                        Timor-Leste
                                      </option>
                                      <option value="Togo">Togo</option>
                                      <option value="Tokelau">Tokelau</option>
                                      <option value="Tonga">Tonga</option>
                                      <option value="Trinidad and Tobago">
                                        Trinidad and Tobago
                                      </option>
                                      <option value="Tunisia">Tunisia</option>
                                      <option value="Turkey">Turkey</option>
                                      <option value="Turkmenistan">
                                        Turkmenistan
                                      </option>
                                      <option value="Turks and Caicos Islands">
                                        Turks and Caicos Islands
                                      </option>
                                      <option value="Tuvalu">Tuvalu</option>
                                      <option value="Uganda">Uganda</option>
                                      <option value="Ukraine">Ukraine</option>
                                      <option value="United Arab Emirates">
                                        United Arab Emirates
                                      </option>
                                      <option value="United Kingdom">
                                        United Kingdom
                                      </option>
                                      <option value="United States">
                                        United States
                                      </option>
                                      <option value="Uruguay">Uruguay</option>
                                      <option value="US Virgin Islands">
                                        US Virgin Islands
                                      </option>
                                      <option value="Uzbekistan">
                                        Uzbekistan
                                      </option>
                                      <option value="Vanuatu">Vanuatu</option>
                                      <option value="Venezuela">
                                        Venezuela
                                      </option>
                                      <option value="Vietnam">Vietnam</option>
                                      <option value="Wallis and Futuna">
                                        Wallis and Futuna
                                      </option>
                                      <option value="Western Sahara">
                                        Western Sahara
                                      </option>
                                      <option value="Yemen">Yemen</option>
                                      <option value="Zambia">Zambia</option>
                                      <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                    {/* <input
                                      type="text"
                                      className="elq-item-input"
                                      id="fe176975"
                                      name="phone"
                                      value={formInput.phone}
                                      onChange={(e) => handleChange(e)}
                                      style={{ width: "100%" }}
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid_items_button_form_floating">
                      <div className="grid_item_button_form">
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
                            paddingLeft: "10px",
                            fontWeight: "300",
                            lineHeight: 1,
                            wordWrap: "break-word",
                            textAlign: "left",
                          }}
                        >
                          {t("accept")}
                        </div>
                      </div>
                      <div className="grid_item_button_form">
                        <button
                          className="floatingFormButton"
                          style={{
                            background: !accept ? "grey" : "#DA291C",
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
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="belowFloatingForm">
          <div className="grid_items_button_form_floating_below">
            <div className="textGrid">
              <span className="formBelowTextRed">
                Protecting and guaranteeing{" "}
              </span>
              <span className="formBelowText">your operation's security </span>
              <span className="formBelowTextRed">is becoming&nbsp;</span>
              <span className="formBelowText">increasingly&nbsp;</span>
              <span className="formBelowTextRed">urgent&nbsp;</span>
              <span className="formBelowText">.</span>
            </div>

            <div className="grid_item_button_form_floating_below">
              <div className="textGridTwo">
                By completing a brief survey of the state of maturity of your OT
                network, we will give you a personalized report of the level at
                which you are. Besides, we will tell you how you can protect
                yourself from the growing cyber threats and you will be able to
                request a free reading of the results in a virtual session with
                a Fortinet expert.
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
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          marginTop: "40px",
          position: "relative",
          background:
            "linear-gradient(0deg, rgba(15, 14, 14, 0.20) 0%, rgba(15, 14, 14, 0.20) 100%)",
        }}
      >
        <img src={image2} className="bg1" width="100%" height="658" />
        <div style={{ position: "absolute", left: "50%", top: "20%" }}>
          <img src={dot} width="50%" height="50%" />
        </div>
        <div className="animationEight" />
        <div className="animationNine" />
        <div className="animationTen"></div>
        <div className="animationEleven" />
        <div className="animationTweleve" />
        <div className="animationThirteen" />
        <div className="animationFourteen" />
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
        {enableEvaulate && (
          <>
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
                <div className="questionLeft">
                  {questionIndex == 0 && (
                    <div className="questionWidth">
                      <span className="questionSectionOne">
                        Select the industry to{" "}
                      </span>
                      <span className="questionSectionOneRed">
                        continue evaluating
                      </span>
                    </div>
                  )}
                  {questionIndex != 0 && questionIndex != 11 && (
                    <div className="questionLeftNextPage">
                      <span className="questionSectionOne">
                        Please answer all questions to get a{" "}
                      </span>
                      <span className="questionSectionOneRed">
                        personalized report
                      </span>
                    </div>
                  )}
                  {/* {questionIndex == 11 && (
                <div className="questionLeftNextPage">
                  <span className="questionSectionOne">
                    Fill in the form to{" "}
                  </span>
                  <span className="questionSectionOneRed">
                    finish evaluating
                  </span>
                </div>
              )} */}
                  {questionIndex == 11 && (
                    <div className="questionLeftNextPage">
                      <span className="questionSectionOne">Finishing</span>
                      {/* <span className="questionSectionOneRed">
                    finish evaluating
                  </span> */}
                    </div>
                  )}
                  {questionIndex != 0 && questionIndex != 11 && (
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
                      <div className="paging">{questionIndex}/10</div>
                    </div>
                  )}
                </div>
              </div>
              {questionIndex != 0 && questionIndex != 10 && (
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
                      width: questionLevel + "%",
                      height: 8,
                      background:
                        "linear-gradient(270deg, #DA291C 0%, rgba(218, 41, 28, 0) 100%)",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                </div>
              )}
            </div>
            {
              questionIndex == 10 && (
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

            <div className="selectIndustry">
              {questionIndex == 0 && (
                <Question0
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                  setIndustry={setIndustry}
                />
              )}
              {questionIndex == 1 && (
                <Question1
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 2 && (
                <Question2
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 3 && (
                <Question3
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 4 && (
                <Question4
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 5 && (
                <Question5
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 6 && (
                <Question6
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 7 && (
                <Question7
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 8 && (
                <Question8
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 9 && (
                <Question9
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 10 && (
                <Question10
                  questionList={questionList}
                  setQuestionList={setQuestionList}
                />
              )}
              {questionIndex == 11 && !isMobileView && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={report} width="159" height="348" />
                  <div style={{ width: 508, height: 348, background: "white" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          background:
                            "linear-gradient(270deg, #DA291C 0%, rgba(218, 41, 28, 0) 100%)",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "60%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <img src={reportImage} />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "50px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "#DA291C",
                          fontSize: 24,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          lineHeight: 2,
                          wordWrap: "break-word",
                        }}
                      >
                        Generating Report
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 0,
                        justifyContent: "center",
                        alignItems: "center",
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
                        An expanded report will be sent to your e-mail address.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {questionIndex == 11 && isMobileView && (
                <>
                  <div
                    style={{
                      //width: "100%",
                      height: 348,
                      background: "white",
                      // display: "flex",
                      //justifyContent: "center",
                      //alignItems: "center",
                      // flexDirection: "row",
                      marginTop: "50px",
                      position: "relative",
                    }}
                  >
                    {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              > */}
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        alignItems: "center",
                        display: "flex",
                        background:
                          "linear-gradient(270deg, #DA291C 0%, rgba(218, 41, 28, 0) 100%)",
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "60%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <img src={reportImage} />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "50px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "#DA291C",
                          fontSize: 24,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          lineHeight: 2,
                          wordWrap: "break-word",
                        }}
                      >
                        Generating Report
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 0,
                        justifyContent: "center",
                        alignItems: "center",
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
                        An expanded report will be sent to your e-mail address.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "120px",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "68px",
                        opacity: 0.6,
                        position: "absolute",
                        right: 0,
                        background: "#2CCCD3",
                      }}
                    />
                    <div
                      style={{
                        height: 70,
                        width: 14.8,
                        right: "10%",
                        bottom: 0,
                        position: "absolute",
                        background: "#DA291C",
                      }}
                    />

                    <div
                      style={{
                        width: 14.8,
                        height: 70,
                        left: "30%",
                        bottom: 0,
                        position: "absolute",
                        opacity: 0.4,
                        background: "#307FE2",
                      }}
                    />
                    <div
                      style={{
                        width: 150,
                        height: 70,
                        left: "30%",
                        bottom: 0,
                        position: "absolute",
                        opacity: 0.1,
                        background: "#307FE2",
                      }}
                    />
                    <div
                      style={{
                        width: 110,
                        height: 70,
                        bottom: 0,
                        position: "absolute",
                        background: "#2CCCD3",
                        borderTopRightRadius: 60,
                      }}
                    />
                    {/* <img
                  src={report}
                  width="50"
                  height="100"
                  style={{ transform: "rotate(90deg)" }}
                /> */}
                  </div>
                </>
              )}
              {/* {questionIndex == 11 && (
            <div className="grid_items_button_form">
              <div className="grid_item_button_form">
                <input type="checkbox" className="form-check-input"></input>
                <div
                  style={{
                    width: "100%",
                    color: "#0F0E0E",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "300",
                    wordWrap: "break-word",
                    paddingLeft: "5px",
                    textAlign: "left",
                  }}
                >
                  By clicking on the EVALUATE button, I accept that Fortinet can
                  send me by email extended information regarding the
                  cybersecurity maturity level of my company's and industry's OT
                  environment.
                </div>
              </div>
              <div className="grid_item_button_form">
                <button className="buttonEvaluate" onClick={(e) => openModal()}>
                  <div
                    style={{
                      justifyContent: "center",
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
          )} */}

              {questionIndex == 0 && (
                <div className="questionButton">
                  <div className="buttonWidth">
                    {enableEvaulate && questionList[0] && (
                      <button
                        onClick={(e) => nextQuestion()}
                        className="buttonEvaluate questionButtonText"
                      >
                        Evaluate
                      </button>
                    )}
                  </div>
                </div>
              )}
              {questionIndex != 0 && questionIndex != 11 && (
                <div className="grid_items_button">
                  <div className="grid_item_button">
                    <button
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
                    </button>
                  </div>
                  <div className="grid_item_button">
                    <button
                      className={
                        !questionList[questionIndex]
                          ? "buttonDisable"
                          : "buttonEnable"
                      }
                      onClick={(e) => nextQuestion()}
                      disabled={!questionList[questionIndex]}
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
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
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
            <div className="modal-body paddingImage">
              <div className="container-fluid paddingImage">
                <div className="row">
                  {!isMobileView ? (
                    <>
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
                                  <input
                                    style={{
                                      color: "#0F0E0E",
                                      fontSize: 16,
                                      fontFamily: "Inter",
                                      fontWeight: "400",
                                      lineHeight: 1,
                                      background: "#F3F3F3",
                                      wordWrap: "break-word",
                                      borderColor: "#F3F3F3",
                                      paddingLeft: 5,
                                      width: "100%",
                                      height: "30px",
                                      border: "none",
                                      padding: 0,
                                    }}
                                    type="email"
                                    placeholder="Company Email"
                                    value={companyEmail}
                                    onChange={(e) => onEmailChange(e)}
                                  />

                                  {/* </div> */}
                                </div>
                              </div>
                            </>
                          )}
                          <button
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
                              background: !enableComfirm ? "grey" : "#DA291C",
                              cursor: !enableComfirm ? "auto" : "pointer",
                              borderColor: !enableComfirm ? "grey" : "#DA291C",
                            }}
                            disabled={!enableComfirm}
                            onClick={() => closeModal(true)}
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
                          </button>
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
                              objectFit: "cover",
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
                    </>
                  ) : (
                    <>
                      {" "}
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
                              objectFit: "cover",
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
                              paddingLeft: "5px",
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
                              paddingLeft: "5px",
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
                                  paddingLeft: "5px",
                                }}
                              >
                                Your report will be sent to your corporate email
                              </div>

                              <div
                                style={{
                                  width: "95%",
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
                                  marginLeft: 5,
                                  marginRight: 5,
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
                                  <input
                                    style={{
                                      color: "#0F0E0E",
                                      fontSize: 16,
                                      fontFamily: "Inter",
                                      fontWeight: "400",
                                      lineHeight: 1,
                                      background: "#F3F3F3",
                                      wordWrap: "break-word",
                                      borderColor: "#F3F3F3",
                                      paddingLeft: 5,
                                      width: "100%",
                                      height: "13%",
                                      border: "none",
                                    }}
                                    type="email"
                                    placeholder="Company Email"
                                  />

                                  {/* </div> */}
                                </div>
                              </div>
                            </>
                          )}
                          <div
                            className="confirmButton"
                            style={{
                              marginTop: submit ? 100 : 20,
                              marginLeft: 5,
                              marginRight: 5,
                            }}
                            onClick={() => closeModal(true)}
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
                    </>
                  )}
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

      <div className="questionSection">
        <div className="questionWord">
          <span className="textQuestion">To </span>
          <span className="textQuestionRed">
            discover how secure your operating
          </span>
          <span className="textQuestion">
            {" "}
            environment is, follow these 3 steps and find out how Fortinet can
            help.
          </span>
        </div>
        <div style={{ width: "100%" }}>
          <div className="box arrow-bottom">
            <div className="textOne">1</div>
            <div style={{ width: "70%", textAlign: "left" }}>
              <div className="textMiddleSmall">
                <div className="middleText">{t("question")}</div>
                <div className="middleTextBelow">{t("questiontext")}</div>
              </div>
            </div>
            <div style={{ width: "15%" }}>
              <img src={question} className="imageSize" />
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="box arrow-bottom">
            <div className="textOne">2</div>
            <div style={{ width: "70%", textAlign: "left" }}>
              <div className="textMiddleSmall">
                <div className="middleText"> {t("Evaluation")}</div>
                <div className="middleTextBelow"> {t("EvaluationText")}</div>
              </div>
            </div>
            <div style={{ width: "15%" }}>
              <img src={evaluation} className="imageSize" />
            </div>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <div className="box">
            <div className="textOne">3</div>
            <div style={{ width: "70%", textAlign: "left" }}>
              <div className="textMiddleSmall">
                <div className="middleText"> {t("Recommendation")}</div>
                <div className="middleTextBelow">
                  {" "}
                  {t("RecommendationText")}
                </div>
              </div>
            </div>
            <div style={{ width: "15%" }}>
              <img src={recommend} className="imageSize" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: 88,
          paddingLeft: "11%",
          // marginTop: "100px",
          // top: 50,
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
    </div>
  );
}

export default App;
