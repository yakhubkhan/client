import { useState } from "react";

export default function Question9(props) {
  const [index, setIndex] = useState(0);

  const onClickSelect = (number) => {
    setIndex(number);
  };
  return (
    <div
      style={{
        alignSelf: "stretch",
        // height: 436,
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
        How do you generate security KPIs for OT networks?
      </div>
      <div
        style={{
          alignSelf: "stretch",
          //height: 368,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "flex",
        }}
      >
        <div
          className={index == 1 ? "answerselect" : "answer"}
          onClick={() => onClickSelect(1)}
        >
          <div
            style={{
              flex: "1 1 0",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            We do not have cybersecurity KPIs for OT.
          </div>
        </div>
        <div
          className={index == 2 ? "answerselect" : "answer"}
          onClick={() => onClickSelect(2)}
        >
          <div
            style={{
              flex: "1 1 0",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            We just have a decentralized number of alerts and events generated
            by the cybersecurity assets and they are provided only if someone
            asks.
          </div>
        </div>
        <div
          className={index == 3 ? "answerselect" : "answer"}
          onClick={() => onClickSelect(3)}
        >
          <div
            style={{
              flex: "1 1 0",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            We just have a decentralized number of alerts and events generated
            by the cybersecurity assets and they are provided only if someone
            asks.
          </div>
        </div>
        <div
          className={index == 4 ? "answerselect" : "answer"}
          onClick={() => onClickSelect(4)}
        >
          <div
            style={{
              flex: "1 1 0",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            There is a SIEM installed and collecting information from
            cybersecurity assets in OT but the cybersecurity KPIs are generated
            manually.
          </div>
        </div>
        <div
          className={index == 5 ? "answerselect" : "answer"}
          onClick={() => onClickSelect(5)}
        >
          <div
            style={{
              flex: "1 1 0",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            There is a SIEM installed and it is collecting information from
            cybersecurity assets in OT and cybersecurity KPIs are generated in
            real time.
          </div>
        </div>
        <div
          className={index == 6 ? "answerselect" : "answer"}
          onClick={() => onClickSelect(6)}
        >
          <div
            style={{
              flex: "1 1 0",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            It's automatically generated with dashboards in real time. The
            cybersecurity KPIs are promoted by the higher manager level company
            wide.
          </div>
        </div>
      </div>
    </div>
  );
}
