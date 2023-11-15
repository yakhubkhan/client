import { useState } from "react";

export default function Question3(props) {
  const [index, setIndex] = useState(
    props.questionList[3] ? props.questionList[3] : 0
  );

  // const selectedIndustry = props.questionList[0];
  // if (selectedIndustry) {
  //   setIndex(selectedIndustry);
  // }

  const onClickSelect = (number) => {
    setIndex(number);
    let tempQuestion = [...props.questionList];
    tempQuestion[3] = number;
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
        How do you monitor Security Events and Incidents in your OT assets and
        network?
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
            No monitoring team looking into alerts. Or looking at logs.
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
            The logs are centralized in a single server via syslog without alert
            rules and correlation.
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
            We have a SIEM tool receiving logs from some OT systems and using
            default alert and correlation rules. No monitoring team looking to
            it.
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
            We have a SIEM tool collecting most of the logs generated in the OT
            environment and a few customized correlation rules. The
            Cybersecurity team looks at it once in a while.
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
            SIEM tool collecting most of logs generated in OT environment with
            Use Cases defined and SOC team 24x7.
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
            The SIEM tool is integrated with SOAR and +70% of incidents
            generated in OT environments are automated at some level.
          </div>
        </div>
      </div>
    </div>
  );
}
