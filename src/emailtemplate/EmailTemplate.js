import modalImage from "../assets/images/modal.jpg";
import logo from "../Fortinet logo.svg";
import download from "../assets/images/download.svg";
import email from "../assets/images/email.svg";

export default function EmailTemplate(props) {
  return (
    <div
      style={{
        background: "#FCFCFC",
        width: 600,
        margin: "auto",
        paddingLeft: 36,
        paddingRight: 36,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 600,
          height: 208,
        }}
      >
        <div style={{ width: 350 }}>
          <img src={logo} alt="" width="158" style={{ marginTop: 50 }} />
          <div style={{ width: 300, marginTop: 40 }}>
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
              Know the results of your{" "}
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
              evaluation
            </span>
          </div>
        </div>
        <div style={{ width: 208, height: 208 }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
              borderTopRightRadius: 136,
            }}
            src={modalImage}
          />
        </div>
      </div>

      <div
        style={{
          //width: "100%",
          // height: "100%",
          paddingTop: 36,
          paddingBottom: 36,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 36,
          display: "inline-flex",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 108,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              //   paddingLeft: 36,
              //   paddingRight: 36,
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
                color: "#363636",
                fontSize: 28,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Dear First Name Last Name,
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              //   paddingLeft: 36,
              //   paddingRight: 36,
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
                color: "#363636",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Below, you can download the report where you will find the results
              of your company according to the answers provided.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingLeft: 24,
            background: "#DA291C",
            border: "1.50px #DA291C solid",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              color: "white",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Download your cybersecurity maturity report here
          </div>
          <div
            style={{
              width: 79,
              height: 79,
              paddingTop: 8,
              paddingBottom: 7,
              paddingLeft: 8,
              paddingRight: 7,
              background: "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={download} />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 24,
          display: "inline-flex",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          paddingTop: 30,
        }}
      >
        <img
          style={{
            width: 140,
            height: 140,
            background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
            borderRadius: 9999,
          }}
          src={email}
        />
        <div
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#363636",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            To learn about the risks and recommendations of your company’s
            cybersecurity maturity level, you can do it woth our experts’ help
            in a personalized free session.
          </div>
          <div
            style={{
              height: 48,
              justifyContent: "center",
              alignItems: "center",
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
                justifyContent: "center",
                alignItems: "center",
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
                    color: "#DA291C",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  Review the report with a Fortinet Expert
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
          paddingTop: 24,
          paddingBottom: 24,
          background: "#F0F0F0",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 36,
          display: "inline-flex",
        }}
      >
        <div style={{ width: 158, height: 18, position: "relative" }}>
          <img src={logo} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 24,
          paddingBottom: 24,
          background: "white",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 36,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 540,
            textAlign: "center",
            color: "#363636",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: 1,
            wordWrap: "break-word",
          }}
        >
          Please, do not reply this emal as this email account is not monitored.
          <br />
          Fortinet, Inc. | 899 Kifer Road | Sunnyvale, CA 94086 | +1-408-235-770
        </div>
      </div>
    </div>
  );
}
