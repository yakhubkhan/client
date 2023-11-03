import { useState } from "react";

import logo from "./fortinet_logo.svg";
import world from "./world.svg";
import question from "./question.svg";
//import evaluation from "./evaluation.svg";
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
function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submit, setSubmit] = useState(false);

  const nextQuestion = () => {
    setQuestionIndex((previous) => (previous == 11 ? previous : previous + 1));
  };
  const previousQuestion = () => {
    setQuestionIndex((previous) => (previous == 0 ? previous : previous - 1));
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
                  OT Cybersecurity Maturity <span>Level</span>{" "}
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
                    <img src={world} width="20" class="img-fluid" alt="" />
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-lg-end"
                  data-bs-popper="none"
                >
                  <li>
                    {" "}
                    <a className="dropdown-item  active" href="/en/home" id="1">
                      English
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item " href="/es/home" id="2">
                      Spanish
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item " href="/pt/home" id="3">
                      Portuguese
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item " href="/fr/home" id="4">
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
            <img src={image1} className="bg" width="100%" height="667" />
            <div
              style={{
                width: 56,
                height: 56,
                left: "2%",
                top: "40%",
                position: "absolute",
                //background: "#F3F3F3",
              }}
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
            <div
              style={{
                width: 56,
                height: 56,
                right: "2%",
                top: "40%",
                position: "absolute",
                //background: "#F3F3F3",
              }}
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
            <div
              style={{
                width: 953,
                height: 306,
                left: "13%",
                top: "25%",
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
                Did you know that an intruder can take control of your equipment
                and machinery and stop its operation?
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
              <div
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
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "95%",
                left: "50%",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div className="selectedImg" />
              <div className="unSelectedImg" />
              <div className="unSelectedImg" />
              <div className="unSelectedImg" />
              <div className="unSelectedImg" />
              <div className="unSelectedImg" />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 300,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 80,
            paddingRight: 80,
            justifyContent: "center",
            alignItems: "center",
            //alignItems: "ce",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>
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
              Protecting and guaranteeing
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
                  paddingLeft: questionIndex == 0 ? "8%" : "14%",
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
                  <div style={{ width: "65%", textAlign: "left" }}>
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
                        lineHeight: 44,
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
                      paddingLeft: "15%",
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
                questionIndex == 0 ? "8%" : questionIndex == 11 ? 100 : "14%",
              paddingRight:
                questionIndex == 0 ? 0 : questionIndex == 11 ? 100 : "14%",
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
                  // paddingLeft: 180,
                  //paddingRight: 180,
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
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <input
                    type="checkbox"
                    class="form-check-input"
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
                  paddingRight: "6%",
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
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
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
          class="modal-backdrop fade show"
          id="backdrop"
          style={{ display: "none" }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: 80,
            paddingBottom: 80,
            paddingLeft: 180,
            paddingRight: 179,
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
                  Questionnaire
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
                  Answer 10 simple multiple-choice questions.
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
                  Evaluation
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
                  Fortinet will provide you with a report based on your answers
                  showing your operating system's cybersecurity maturity level.
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
                  Recommendation
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
                  The report will be sent automatically to your corporate email,
                  and you can also request that it be interpreted in a
                  personalized way and at no cost by one of our experts.
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
            paddingLeft: 180,
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
