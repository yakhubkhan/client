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
//import image1 from "./image1.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
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
          {/* <div
            style={{
              width: 709,
              height: 132,
              position: "absolute",
              top: 900,
              left: 180,
              textAlign: "left",
            }}
          >
            <div style={{ width: "100%" }}>
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
                environment is, follow these 3 steps and find out how Fortinet
                can help.
              </span>
            </div> */}
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
                  width: 1079,
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: 180,
                  display: "inline-flex",
                }}
              >
                <div style={{ width: 712, textAlign: "left" }}>
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
                <div
                  style={{
                    background: "white",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
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
                    1/11
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              style={{
                alignSelf: "stretch",
                height: 8,
                paddingRight: 1308,
                justifyContent: "flex-start",
                alignItems: "center",
                display: "inline-flex",
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
            </div> */}
          </div>
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
          <div
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: 180,
              paddingRight: 180,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
              textAlign: "left",
              background: "#F0F0F0",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 436,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#0F0E0E",
                  fontSize: 24,
                  fontFamily: "Inter",
                  fontWeight: "500",
                  lineHeight: 1,
                  wordWrap: "break-word",
                  marginTop: 30,
                }}
              >
                What segmentation level do you have implemented in your OT
                network?
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: 368,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "white",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    IT and OT share the same physical and logical network.
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "white",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    Segmentation using VLANs and L3, but same physical
                    equipment.
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "white",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    There is a firewall between IT and OT networks.
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "#DA291C",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    We use firewalls in the OT network boundary and inside the
                    OT network, also implementing a DMZ.
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "white",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    The OT network is fully segmented, with Network Access
                    Control technology, and have policies based on OT protocols
                    and applications
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "white",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "#0F0E0E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    We use micro segmentation in the OT network, extending the
                    firewall capability to the access layer.
                  </div>
                </div>
              </div>
            </div>
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
                  style={{
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    border: "1px #DA291C solid",
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
                      display: "flex",
                    }}
                  >
                    <img src={buttonLeft} />
                    <div
                      style={{
                        color: "#DA291C",
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
                <div
                  style={{
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "#DA291C",
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
                      display: "flex",
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
                      Next
                    </div>
                    <img src={buttonRight}></img>
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
