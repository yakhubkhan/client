import { useState } from "react";

export default function Question8(props) {
  const [index, setIndex] = useState(
    props.questionList[8] ? props.questionList[8] : 0
  );

  // const selectedIndustry = props.questionList[0];
  // if (selectedIndustry) {
  //   setIndex(selectedIndustry);
  // }

  const onClickSelect = (number) => {
    setIndex(number);
    let tempQuestion = [...props.questionList];
    tempQuestion[8] = number;
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
        What are the OT technology and protocols on your network?
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
            We don't know the manufacturers and its protocols.
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
            We know the OT manufacturers, but don't know their protocols.
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
            We know the OT manufacturers and their protocols and our OT firewall
            policies are based on that.
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
            We know the OT manufacturers and their protocols and our firewall
            policies and our OT security perimeters are based on that.
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
            We know the OT manufacturers and their protocols and our firewall
            policies and our security perimeters are based on that. Suspicious
            activities are concentrated and correlated on the SIEM.
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
            We know the OT manufacturers and their protocols and our firewall
            policies and our security perimeters are based on that. Suspicious
            activities are concentrated and correlated on the SIEM and automated
            answers are provided by our SOAR.
          </div>
        </div>
      </div>
    </div>
  );
}
