import { useState } from "react";

export default function Question6(props) {
  const [index, setIndex] = useState(
    props.questionList[6] ? props.questionList[6] : 0
  );

  // const selectedIndustry = props.questionList[0];
  // if (selectedIndustry) {
  //   setIndex(selectedIndustry);
  // }

  const onClickSelect = (number) => {
    setIndex(number);
    let tempQuestion = [...props.questionList];
    tempQuestion[6] = number;
    props.setQuestionList(tempQuestion);
  };
  return (
    <div
      style={{
        alignSelf: "stretch",
        //height: 436,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 32,
        display: "flex",
      }}
    >
      <div className="questionPadding">
        How do OT engineers gain access to the OT network?
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
            They just plug their notebooks into the network, or use our IT Wi-Fi
            to have access to all OT systems.
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
            They need to connect to our OT dedicated Wi-Fi network using only
            SSID and password and have access to all OT systems.
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
            They plug their notebooks into the network, or use our OT Wi-Fi to
            have access to some OT services through the firewall that asks for
            user and password.
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
            We have a NAC solution in place on the OT network.
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
            We have a NAC solution in place on the OT network . Also, they never
            access the OT systems directly. They always need to use a jump host
            or reverse proxy.
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
            We have a NAC solution in place on the OT network with compliance
            check in their computer.
          </div>
        </div>
      </div>
    </div>
  );
}
