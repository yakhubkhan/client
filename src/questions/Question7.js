import { useState } from "react";

export default function Question7(props) {
  const [index, setIndex] = useState(0);

  const onClickSelect = (number) => {
    setIndex(number);
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
        What is your level of visibility of the assets in the OT network?
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
            We don't know how many assets we have, their systems, manufacturers
            and protocols they use.
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
            We use a manual inventory.
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
            We have an automated inventory, which discovers systems and OT
            equipment in real time in less than 50% of the OT network.
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
            We have an automated inventory, which discovers systems and OT
            equipment in real time in more than 50% of the OT network
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
            We have an automated inventory, correlated with CMDB to provide
            visibility on the software and version in less than 50% of the OT
            network.
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
            We have an automated inventory, correlated with CMDB to provide
            visibility on the software and version in more than 50% of the OT
            network.
          </div>
        </div>
      </div>
    </div>
  );
}
