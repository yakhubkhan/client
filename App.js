import { useState, useRef, useEffect } from "react";
import axios from "axios";

import logo from "./Fortinet logo.svg";
import world from "./world.svg";
import question from "./question.svg";
import recommendation from "./recommendation.svg";
import arrowLeft from "./assets/images/teenyicons_arrow-left-solid.svg";
import arrowRight from "./assets/images/teenyicons_arrow-right-solid.svg";
import image1 from "./assets/images/Other_banner.jpg";
import image2 from "./assets/images/manufacturing_banner.jpg";
import image3 from "./assets/images/Transportation&Logistics_banner.jpeg";
import image4 from "./assets/images/mining_banner.jpg";
import image5 from "./assets/images/Power_Utilities_banner.jpg";
import image6 from "./assets/images/oil-and-gas_banner.jpg";

import buttonLeft from "./assets/images/arrow-left.svg";
import buttonRight from "./assets/images/arrow-right.svg";
import recommend from "./assets/images/recommend.svg";
import evaluation from "./assets/images/evaluation.svg";
import triangle from "./assets/images/triangle.svg";
import modalImage from "./assets/images/modal.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
//import image1 from "./image1.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
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
import reportImage from "./assets/images/Generating_Report.gif";
import useScreenSize from "./useScreenSize";
import { Country } from "./country";
import { useNavigate } from "react-router-dom";

function App() {
  //function useDeviceDetect() {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);

  const { t, i18n } = useTranslation();
  const screenSize = useScreenSize();

  const imageBanner = [image1, image2, image3, image4, image5, image6];
  const textBanner = [
    {
      en: '<span class="homeTextThirdText">75%of OT organizations reported <span class="homeTextThirdTextWhite">at least one intrusion</span> in the last year</span>',
      es: '<span class="homeTextThirdText">El 75% de las organizaciones OT ha tenido <span class="homeTextThirdTextWhite">al menos un ciberataque</span> en los últimos 12 meses.</span>',
      pt: '<span class="homeTextThirdText">75% das organizações OT sofreram <span class="homeTextThirdTextWhite">pelo menos um ciberataque</span> nos últimos 12 meses.</span>',
      fr: '<span class="homeTextThirdText">75 % des organisations OT ont <span class="homeTextThirdTextWhite">subi au moins une cyberattaque au cours</span> des 12 derniers mois.</span>',
    },
    {
      en: '<span class="homeTextThirdText">32% of OT organizations reported <span class="homeTextThirdTextWhite">being victims of a ransomware attack </span></span>',
      es: '<span class="homeTextThirdText">32% de las organizaciones de OT informaron <span class="homeTextThirdTextWhite">ser víctimas de un ataque de ransomware. </span></span>',
      pt: '<span class="homeTextThirdText">32% das organizações de OT relataram <span class="homeTextThirdTextWhite">ser vítimas de um ataque de ransomware. </span></span>',
      fr: '<span class="homeTextThirdText">32% des organisations OT ont <span class="homeTextThirdTextWhite">signalé être victimes dune attaque de ransomware. </span></span>',
    },
    {
      en: '<span class="homeTextThirdText">In the last year Intrusions from <span class="homeTextThirdTextWhite">malware and phishing increased 12% and 9%</span>, respectively</span>',
      es: '<span class="homeTextThirdText">En el último año, las intrusiones de <span class="homeTextThirdTextWhite">malware y phishing aumentaron un 12% y un 9%,</span>,respectivamente.</span>',
      pt: '<span class="homeTextThirdText">No último ano <span class="homeTextThirdTextWhite">as intrusões de malware e phishing aumentaram 12% e 9%</span>, respectivamente.</span>',
      fr: '<span class="homeTextThirdText">Au cours de la dernière année, <span class="homeTextThirdTextWhite">les intrusions par malware et phishing ont augmenté de 12% et 9%,</span>, respectivement.</span>',
    },
    {
      en: '<span class="homeTextThirdText">OT Cybersecurity Responsibility Is Moving from <span class="homeTextThirdTextWhite">OT Personnel to Cybersecurity Experts</span></span>',
      es: '<span class="homeTextThirdText">La responsabilidad de la ciberseguridad de OT se está trasladando <span class="homeTextThirdTextWhite">del personal de OT a los expertos en ciberseguridad.</span></span>',
      pt: '<span class="homeTextThirdText">A responsabilidade pela cibersegurança de OT está <span class="homeTextThirdTextWhite">passando do pessoal de OT para especialistas em cibersegurança.</span></span>',
      fr: '<span class="homeTextThirdText">La responsabilité de la cybersécurité OT passe du <span class="homeTextThirdTextWhite">personnel OT aux experts en cybersécurité.</span></span>',
    },
    {
      en: '<span class="homeTextThirdTextWhite">Protecting OT systems is now more critical than ever <span class="homeTextThirdText">as more organizations connect their OT environments to the internet</span></span>',
      es: '<span class="homeTextThirdTextWhite">Proteger los sistemas de OT es ahora más crítico que nunca, <span class="homeTextThirdText">ya que más organizaciones conectan sus entornos de OT a internet.</span></span>',
      pt: '<span class="homeTextThirdTextWhite">Proteger os sistemas de OT é agora mais crítico do que nunca <span class="homeTextThirdText">, à medida que mais organizações conectam seus ambientes de OT à internet.</span></span>',
      fr: '<span class="homeTextThirdTextWhite">Protéger les systèmes OT est désormais plus critique que jamais,<span class="homeTextThirdText">car de plus en plus dorganisations connectent leurs environnements OT à internet.</span></span>',
    },
    {
      en: '<span class="homeTextThirdText">Cybersecurity solutions <span class="homeTextThirdTextWhite">continue to aid in the success of most OT professionals (76%)</span>  by improving efficiency and flexibility</span>',
      es: '<span class="homeTextThirdText">Las soluciones de ciberseguridad <span class="homeTextThirdTextWhite">continúan contribuyendo al éxito de la mayoría de los profesionales de OT (76%)</span>  al mejorar la eficiencia y la flexibilidad.</span>',
      pt: '<span class="homeTextThirdText">As soluções de cibersegurança <span class="homeTextThirdTextWhite">continuam a contribuir para o sucesso da maioria dos profissionais de OT (76%)</span>  ao melhorar a eficiência e a flexibilidade.</span>',
      fr: '<span class="homeTextThirdText">Les solutions de cybersécurité <span class="homeTextThirdTextWhite">continuent daider la majorité des professionnels OT (76%)</span>  en améliorant lefficacité et la flexibilité.</span>',
    },
  ];

  useEffect(() => {
    if (screenSize.width < 780) {
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
  const [otherIndustry, setOtherIndustry] = useState("");
  const [showReport, setShowReport] = useState(true);
  const [reportText, setReportText] = useState("Generating Report");
  const [reportTextTwo, setReportTextTwo] = useState(
    "An expanded report will be sent to your e-mail address."
  );
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    explicitConsent1: false,
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

  const hmtmFunction = () => {
    const htmlString = `<script type='text/javascript'>

  var timerId = null, timeout = 5;
  

  
  <script type='text/javascript'>
  
  function WaitUntilCustomerGUIDIsRetrieved() {
  
  if (!!(timerId)) {
  
  if (timeout == 0) {
  
  return;
  
  }
  
  if (typeof this.GetElqCustomerGUID === 'function') {
  
  document.forms["UntitledForm-1700078784437"].elements["elqCustomerGUID"].value = GetElqCustomerGUID();
  
  return;
  
  }
  
  timeout -= 1;
  
  }
  
  timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
  
  return;
  
  }
  
  window.onload = WaitUntilCustomerGUIDIsRetrieved;
  
  _elqQ.push(['elqGetCustomerGUID']);
  
</script>`;
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

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

  const getScore = () => {
    let total = 0;
    for (let i = 1; i < questionList.length; i++) {
      total = total + parseInt(questionList[i]);
    }
    let avg = total / 10;
    return avg;
  };

  const closeModal = () => {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("staticBackdrop").style.display = "none";
    document.getElementById("staticBackdrop").classList.remove("show");

    let avg = getScore();

    let obj = {
      first_name: formInput.firstName,
      last_name: formInput.lastName,
      company: formInput.company,
      job_title: formInput.jobTitle,
      phone: formInput.phone,
      country: formInput.country,
      industry: industry || otherIndustry,
      maturity_level: avg,
      vertical: i18n.language,
      email: companyEmail,
      avg: avg,
    };

    let eqlobj = {
      elqFormName: "",
      elqSiteId: "",
      elqCampaignId: "",
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      emailAddress: companyEmail,
      company: formInput.company,
      // jobFunction: Cloud Architect
      title: formInput.jobTitle,
      // jobLevel: Director
      Phone: formInput.phone,
      country: formInput.country,
      // explicitConsent1: on
      lsmr: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      lsci: "",
      lscs: "",
      hiddenField: "",
      emid: "",
      tpid: "",
      slid: "",
      gclid: "",
      optinlang: "",
    };

    var form = document.getElementsByTagName("form");
    var inputs = form[0].getElementsByTagName("input");

    var formData = new FormData();
    // for (var i = 0; i < inputs.length; i++) {
    //   formData[inputs[i].name] = inputs[i].value;
    //   formData.append(inputs[i].name);
    // }
    formData["country"] = formInput.country;
    formData.append("elqFormName", "2023Q1_WS_OTCyberSecurityMaturityLevel");
    formData.append("elqSiteId", "3049749");
    formData.append("elqCampaignId", "");
    formData.append("BusPhone", "6145416464");
    formData.append("emailAddress", companyEmail);

    //var formdata = JSON.stringify(formData);
    axios.post("https://s3049749.t.eloqua.com/e/f2", formData).then(
      (response) => {},
      (error) => {
        // setQuestionIndex((previous) => previous + 1);
      }
    );
    axios
      .post("https://api.stage-dium.com/savedInfo", obj, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          console.log(response, "object");
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
          console.log(error, "error");
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
    const { name, value, checked } = e.target;
    let formvalues = { ...formInput, [name]: value };

    if (name === "phone") {
      if (/^[0-9]{0,17}$/.test(value)) {
        setFormInput((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else {
      if (name == "explicitConsent1") {
        formvalues = { ...formInput, [name]: checked };
        setFormInput((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
      } else {
        setFormInput((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
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
    if (
      formvalues.firstName != "" &&
      formvalues.lastName != "" &&
      formvalues.company != "" &&
      formvalues.jobTitle != "" &&
      formvalues.phone != "" &&
      formvalues.country != "" &&
      formvalues.explicitConsent1 === true
    ) {
      setAccept(true);
    } else {
      setAccept(false);
    }
  };
  function resetSubmitButton(e) {
    var submitButtons = e.target.form.getElementsByClassName("submit-button");
    for (var i = 0; i < submitButtons.length; i++) {
      submitButtons[i].disabled = false;
    }
  }
  const addChangeHandler = (elements) => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("change", resetSubmitButton);
    }
  };
  useEffect(() => {
    var form = document.getElementById("form8357");
    addChangeHandler(form.getElementsByTagName("input"));
    addChangeHandler(form.getElementsByTagName("select"));
    addChangeHandler(form.getElementsByTagName("textarea"));
    var nodes = document.querySelectorAll("#form8357 input[data-subscription]");
    if (nodes) {
      for (var i = 0, len = nodes.length; i < len; i++) {
        var status = nodes[i].dataset
          ? nodes[i].dataset.subscription
          : nodes[i].getAttribute("data-subscription");
        if (status === "true") {
          nodes[i].checked = true;
        }
      }
    }
    var nodes = document.querySelectorAll("#form8357 select[data-value]");
    if (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var selectedValue = node.dataset
          ? node.dataset.value
          : node.getAttribute("data-value");
        if (selectedValue) {
          for (var j = 0; j < node.options.length; j++) {
            if (node.options[j].value === selectedValue) {
              node.options[j].selected = "selected";
              break;
            }
          }
        }
      }
    }
    window.getParentElement = function (list) {
      return list[list.length - 1].parentElement;
    };
    var dom0 = document.querySelector("#form8357 #fe176969");
    var fe176969 = new window.LiveValidation(dom0, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });
    fe176969.add(window.Validate.Presence, {
      failureMessage: "This field is required",
    });

    var dom1 = document.querySelector("#form8357 #fe176970");
    var fe176970 = new window.LiveValidation(dom1, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });

    var dom3 = document.querySelector("#form8357 #fe176972");
    var fe176972 = new window.LiveValidation(dom3, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });

    var dom7 = document.querySelector("#form8357 #fe176976");
    var fe176976 = new window.LiveValidation(dom7, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });

    var dom8 = document.querySelector("#form8357 #fe176977");
    var fe176977 = new window.LiveValidation(dom8, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });

    fe176976.add(window.Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "Value must not contain any URL's",
    });
    fe176976.add(window.Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "Value must not contain any HTML",
    });
  }, []);
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
      errorFlag = true;
    }
    if (!inputFielidValue.phone) {
      setIsEmptyPhone(true);
      errorFlag = true;
    }
    if (!inputFielidValue.country) {
      setIsEmptyCountry(true);
      errorFlag = true;
    }
    if (inputFielidValue.explicitConsent1 === false) {
      setIsEmptyCountry(true);
      errorFlag = true;
    }
    e.preventDefault();
    setEnableEvaulate(!errorFlag);
    if (errorFlag) return;

    // const form1 = document.getElementById("form8357");
    // //form1.submit();
    // form1.action = "register.html";
    // form1.submit();
    // return false;

    window.scrollTo({
      top: aboutSection.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  const onEmailChange = (e) => {
    setCompanyEmail(e.target.value);
    console.log("email test");
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
    ele.preventDefault();
    var submitButton = ele.querySelector("input[type=submit]");
    var spinner = document.createElement("span");
    spinner.setAttribute("class", "loader");
    submitButton.setAttribute("disabled", true);
    submitButton.style.cursor = "wait";
    submitButton.parentNode.appendChild(spinner);
    return true;
  }
  const getBanner = () => {
    let obj = textBanner[imageIndex - 1];
    const theObj = { __html: obj[i18n.language] };
    return (
      <div className="hometextthirdwidth" dangerouslySetInnerHTML={theObj} />
    );
  };

  useEffect(() => {
    if (questionIndex == 11) {
      setTimeout(function () {
        //navigate("/thank");
        setShowReport(false);
        setReportText("Report Sent");
        setReportTextTwo("An expanded report is sent to your e-mail address.");
        setTimeout(function () {
          navigate("/thank");
        }, 2000);
      }, 2000);
    }
  }, [questionIndex]);

  const continueNext = () => {
    let tempQuestion = [...questionList];
    tempQuestion[0] = 6;
    setQuestionList(tempQuestion);
    nextQuestion();
    //setIndustry(otherIndustry);
  };
  return (
    <div className="App">
      <div className="social_header_menu fixed-top bg-light overflow-visible">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <div className="container-fluid"> */}
          <div className="grid_items_header">
            <div className="grid_item_header divide">
              {/* <a className="navbar-brand" href="#page-top"> */}
              <img src={logo} alt="" width="196" />
              {/* </a> */}
              <span className="navbar-text">
                {" "}
                OT Cybersecurity Maturity <span>Level</span>
              </span>
            </div>
            <div className="grid_item_header paddingLeftCountry">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle no-border"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="w-100">
                    <img src={world} width="24" className="img-fluid" alt="" />
                  </span>
                  <span
                    style={{
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                      width: "92px",
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
              src={imageBanner[imageIndex - 1]}
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
                  width: 64,
                  height: 64,
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
                  <img width={38.5} src={arrowLeft} />
                </div>
              </div>
            )}
            {!isMobileView && imageIndex != 6 && (
              <div
                style={{
                  width: 64,
                  height: 64,
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
                  <img width={38.5} src={arrowRight} />
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
                  {getBanner()}
                  {/* <div className="hometextthirdwidth">
                    <span className="homeTextThirdText">
                      {textBanner[imageIndex - 1]}{" "}
                    </span>
                    <span className="homeTextThirdTextWhite">
                      of intrusions
                    </span>
                    <span className="homeTextThirdText">
                      {" "}
                      affected OT systems.
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            {!isMobileView && (
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
            )}
            <div className="floatingForm">
              <div className="floatingFromOne">
                <div className="paddingTextOne">
                  <p className="floatingFromOneText">{t("form_content1")} </p>
                  <p className="floatingFromOneTextRed">{t("form_content2")}</p>
                </div>
                {/* form */}
                <form
                  method="post"
                  name="UntitledForm-1700078784437"
                  // name="elqform"
                  // action="https://s3049749.t.eloqua.com/e/f2"
                  // onSubmit={(e) => e.preventDefault()}
                  onSubmit={handleScroll}
                  id="form8357"
                  className="elq-form"
                >
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
                              <label className="elq-label ">
                                {" "}
                                {t("firstName")}
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
                              <label className="elq-label ">
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
                              <label className="elq-label ">
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
                              <label className="elq-label ">{t("phone")}</label>
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
                              <label className="elq-label ">
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
                              <label className="elq-label ">
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
                                      <option>{t("selectCountry")}</option>
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
                        <div className="field-control-wrapper">
                          <input
                            type="checkbox"
                            name="explicitConsent1"
                            id="fe176977"
                            className="form-check-input"
                            value={formInput.explicitConsent1}
                            // onChange={() => setAccept(!accept)}
                            onChange={handleChange}
                          />
                        </div>
                        <label
                          className="checkbox-aligned elq-item-label"
                          style={{
                            flex: "1 1 0",
                            color: "#0F0E0E",
                            fontSize: 16,
                            fontFamily: "Inter",
                            paddingLeft: "10px",
                            fontWeight: "300",
                            lineHeight: "24px",
                            wordWrap: "break-word",
                            textAlign: "left",
                          }}
                        >
                          {t("accept")}
                        </label>
                        {/* <input
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
                        </div> */}
                      </div>
                      <div className="grid_item_button_form">
                        <input
                          type="Submit"
                          className="submit-button-style"
                          value="Evaluate"
                          id="fe176992"
                          style={{
                            background: !accept ? "grey" : "#DA291C",
                            cursor: !accept ? "auto" : "pointer",
                            borderColor: !accept ? "grey" : "#DA291C",
                            color: "white",
                          }}
                        />
                        {/* <button
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
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="lsmr"
                    id="fe176978"
                    value="Website"
                  />
                  <input
                    type="hidden"
                    name="utm_source"
                    id="fe176979"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="utm_medium"
                    id="fe176980"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="utm_campaign"
                    id="fe176981"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="utm_content"
                    id="fe176982"
                    value=""
                  />
                  <input type="hidden" name="utm_term" id="fe176983" value="" />
                  <input
                    type="hidden"
                    name="lsci"
                    id="fe176984"
                    value="701Hr000001lcNwIAI"
                  />
                  <input
                    type="hidden"
                    name="lscs"
                    id="fe176985"
                    value="Responded"
                  />
                  <input
                    type="hidden"
                    name="hiddenField"
                    id="fe176986"
                    value="AMER_INTL_LA_2023_OT_WS_Maturity Level"
                  />
                  <input type="hidden" name="emid" id="fe176987" value="" />
                  <input type="hidden" name="tpid" id="fe176988" value="" />
                  <input type="hidden" name="slid" id="fe176989" value="" />
                  <input type="hidden" name="gclid" id="fe176990" value="" />
                  <input
                    type="hidden"
                    name="optinlang"
                    id="fe176991"
                    value="en"
                  />
                  <input
                    type="hidden"
                    name="elqFormName"
                    value="UntitledForm-1700078784437"
                  />
                  <input type="hidden" name="elqSiteID" value="3049749" />
                  <input type="hidden" name="elqCustomerGUID" value="" />
                  <input type="hidden" name="elqCookieWrite" value="0" />
                  {hmtmFunction()}
                  {/* <div dangerouslySetInnerHTML={{ __html: htmlString }} /> */}
                </form>
                {/* form */}
              </div>
            </div>
          </div>
        </div>
        <div className="belowFloatingForm">
          <div className="grid_items_button_form_floating_below">
            <div className="textGrid">
              <span className="formBelowTextRed">{t("content1")}</span>{" "}
              <span className="formBelowText">{t("content2")} </span>
              <span className="formBelowTextRed">{t("content3")}&nbsp;</span>
              <span className="formBelowText">{t("content4")}&nbsp;</span>
              <span className="formBelowTextRed">{t("content5")}&nbsp;</span>
              <span className="formBelowText">.</span>
            </div>

            <div className="grid_item_button_form_floating_below">
              <div className="textGridTwo">
                {/* By completing a brief survey of the state of maturity of your OT
                network, we will give you a personalized report of the level at
                which you are. Besides, we will tell you how you can protect
                yourself from the growing cyber threats and you will be able to
                request a free reading of the results in a virtual session with
                a Fortinet expert. */}
                {t("content6")}
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
                  {/* You will receive your evaluation, risks and recommendations
                  according to the level you are at and you will be able to see
                  examples of critical cases of companies of your same industry. */}
                  {t("content7")}
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
                        {/* Select the industry to{" "} */}
                        {t("industry_content1")}{" "}
                      </span>
                      <span className="questionSectionOneRed">
                        {/* continue evaluating */}
                        {t("industry_content2")}
                      </span>
                    </div>
                  )}
                  {questionIndex != 0 && questionIndex != 11 && (
                    <div className="questionLeftNextPage">
                      <span className="questionSectionOne">
                        {/* Please answer all questions to get a{" "} */}
                        {t("Qn_content1")}{" "}
                      </span>
                      <span className="questionSectionOneRed">
                        {/* personalized report */}
                        {t("Qn_content2")}
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
                      <span className="questionSectionOne">
                        {" "}
                        {t("generating_report1")}
                      </span>
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
                  nextQuestion={nextQuestion}
                />
              )}
              {industry === "Other" && questionIndex == 0 && (
                <div style={{ marginTop: "10px" }}>
                  <div
                    style={{ textAlign: "left", backgroundColor: "white" }}
                    className="col-sm-1 col-xs-1"
                  >
                    <label className="other">Industry Name</label>
                  </div>
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    {/* <div className="row"> */}
                    <div style={{ width: "30%" }}>
                      <div className="field-control-wrapper">
                        <input
                          type="text"
                          className="elq-item-input"
                          name="otherIndustry"
                          value={otherIndustry}
                          onChange={(e) => setOtherIndustry(e.target.value)}
                          style={{ width: "100%" }}
                        ></input>
                      </div>
                    </div>
                    <div style={{ width: "20%", marginLeft: "20px" }}>
                      <button
                        style={{
                          background: "#DA291C",
                          cursor: "pointer",
                          borderColor: "#DA291C",
                        }}
                        onClick={(e) => continueNext(e)}
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
                          <BsArrowRight color="white" />
                        </div>
                      </button>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
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
                    {showReport && (
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
                          <img
                            style={{ height: "200px", marginTop: "8px" }}
                            src={reportImage}
                          />
                        </div>
                      </div>
                    )}
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
                          fontStyle: "normal",
                        }}
                      >
                        {reportText}
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
                          fontStyle: "normal",
                        }}
                      >
                        {reportTextTwo}
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
                        <img
                          style={{ height: "200px", marginTop: "8px" }}
                          src={reportImage}
                        />
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
                          fontStyle: "normal",
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
                              fontStyle: "normal",
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
                                lineHeight: "44px",
                                wordWrap: "break-word",
                                fontStyle: "normal",
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
                                lineHeight: "44px",
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
                                lineHeight: "44px",
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
                                  fontStyle: "normal",
                                  lineHeight: "32px",
                                }}
                              >
                                Your report will be sent to your corporate email
                              </div>
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
                                  fontStyle: "normal",
                                }}
                              >
                                {formInput.firstName} {formInput.lastName}{" "}
                                {getScore()}
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
                                      fontWeight: "300",
                                      lineHeight: 1,
                                      background: "#F3F3F3",
                                      wordWrap: "break-word",
                                      borderColor: "#F3F3F3",
                                      paddingLeft: 5,
                                      width: "100%",
                                      height: "30px",
                                      border: "none",
                                      padding: 0,
                                      fontStyle: "normal",
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
                                    fontStyle: "normal",
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
                              fontStyle: "normal",
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
                                fontStyle: "normal",
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
                                  fontStyle: "normal",
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
                                    fontStyle: "normal",
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
          <span className="textQuestion">{t("content10")} </span>
          <span className="textQuestionRed">{t("content11")}</span>
          <span className="textQuestion"> {t("content12")}</span>
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
