import { useState } from "react";

import oil from "../assets/images/oil.svg";
import oilselect from "../assets/images/oilselect.svg";
import power from "../assets/images/power.svg";
import powerselect from "../assets/images/powerselect.svg";
import mining from "../assets/images/mining.svg";
import miningselect from "../assets/images/miningselect.svg";
import transportation from "../assets/images/transportation.svg";
import transportationselect from "../assets/images/transportationselect.svg";
import other from "../assets/images/other.svg";
import otherselect from "../assets/images/otherselect.svg";
import manufacture from "../assets/images/manufacture.svg";
import manufactureselect from "../assets/images/manufactureselect.svg";
import { BsBorderCenter } from "react-icons/bs";
export default function Question0(props) {
  const [index, setIndex] = useState(
    props.questionList[0] ? props.questionList[0] : 0
  );

  // const selectedIndustry = props.questionList[0];
  // if (selectedIndustry) {
  //   setIndex(selectedIndustry);
  // }

  const onClickSelect = (number) => {
    setIndex(number);
    let tempQuestion = [...props.questionList];
    tempQuestion[0] = number;
    props.setQuestionList(tempQuestion);
  };
  return (
    <div className="grid_items">
      <div className="grid_item">
        <div
          className="industryBox"
          style={{ background: index === 1 ? "#DA291C" : "white" }}
          id="gas"
          onClick={(e) => onClickSelect(1)}
        >
          <div
            style={{
              color: index === 1 ? "white" : "#0F0E0E",
            }}
            className="industryBoxText"
          >
            Oil & Gas
          </div>
          <div className="industryBoxImage">
            <img
              src={index === 1 ? oilselect : oil}
              className="industryImage"
            />
          </div>
        </div>
      </div>
      <div className="grid_item">
        {" "}
        <div
          className="industryBox"
          style={{ background: index === 2 ? "#DA291C" : "white" }}
          id="power"
          onClick={(e) => onClickSelect(2)}
        >
          <div
            style={{
              color: index === 2 ? "white" : "#0F0E0E",
            }}
            className="industryBoxText"
          >
            Power & Utilities
          </div>
          <div className="industryBoxImage">
            <img
              src={index === 2 ? powerselect : power}
              className="industryImage"
            />
          </div>
        </div>
      </div>
      <div className="grid_item">
        <div
          className="industryBox"
          style={{ background: index === 3 ? "#DA291C" : "white" }}
          id="mining"
          onClick={(e) => onClickSelect(3)}
        >
          <div
            style={{
              color: index === 3 ? "white" : "#0F0E0E",
            }}
            className="industryBoxText"
          >
            Mining
          </div>
          <div className="industryBoxImage">
            <img
              src={index == 3 ? miningselect : mining}
              className="industryImage"
            />
          </div>
        </div>
      </div>
      <div className="grid_item">
        <div
          className="industryBox"
          style={{ background: index === 4 ? "#DA291C" : "white" }}
          id="transportation"
          onClick={(e) => onClickSelect(4)}
        >
          <div
            style={{
              color: index === 4 ? "white" : "#0F0E0E",
            }}
            className="industryBoxText"
          >
            Transportations & Logistic
          </div>
          <div className="industryBoxImage">
            <img
              src={index == 4 ? transportationselect : transportation}
              className="industryImage"
            />
          </div>
        </div>
      </div>
      <div className="grid_item">
        <div
          className="industryBox"
          style={{ background: index === 5 ? "#DA291C" : "white" }}
          id="manufacturing"
          onClick={(e) => onClickSelect(5)}
        >
          <div
            style={{
              color: index === 5 ? "white" : "#0F0E0E",
            }}
            className="industryBoxText"
          >
            Manufacturing
          </div>
          <div className="industryBoxImage">
            <img
              src={index == 5 ? manufactureselect : manufacture}
              className="industryImage"
            />
          </div>
        </div>
      </div>
      <div className="grid_item">
        <div
          className="industryBox"
          style={{ background: index === 6 ? "#DA291C" : "white" }}
          id="other"
          onClick={(e) => onClickSelect(6)}
        >
          <div
            style={{
              color: index === 6 ? "white" : "#0F0E0E",
            }}
            className="industryBoxText"
          >
            Other
          </div>
          <div className="industryBoxImage">
            <img
              src={index == 6 ? otherselect : other}
              className="industryImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
