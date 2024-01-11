import { useState } from "react";

import oil from "../assets/images/oil-and-gas.gif";
import oilselect from "../assets/images/oil-and-gas.gif";
import power from "../assets/images/Power_Utilities.gif";
import powerselect from "../assets/images/Power_Utilities.gif";
import mining from "../assets/images/mining.gif";
import miningselect from "../assets/images/mining.gif";
import transportation from "../assets/images/Transportation&Logistics.gif";
import transportationselect from "../assets/images/Transportation&Logistics.gif";
import other from "../assets/images/Other.gif";
import otherselect from "../assets/images/Other.gif";
import manufacture from "../assets/images/manufacturing.gif";
import manufactureselect from "../assets/images/manufacturing.gif";
import { BsBorderCenter } from "react-icons/bs";
export default function Question0(props) {
  const [index, setIndex] = useState(
    props.questionList[0] ? props.questionList[0] : 0
  );

  // const selectedIndustry = props.questionList[0];
  // if (selectedIndustry) {
  //   setIndex(selectedIndustry);
  // }

  const onClickSelect = (number, name) => {
    setIndex(number);
    props.setIndustry(name);

    if (name != "Other") {
      let tempQuestion = [...props.questionList];
      tempQuestion[0] = number;
      props.setQuestionList(tempQuestion);
      props.nextQuestion();
    }
  };
  return (
    <div className="grid_items">
      <div className="grid_item">
        <div
          className="industryBox"
          style={{ background: index === 1 ? "#DA291C" : "white" }}
          id="gas"
          onClick={(e) => onClickSelect(1, "Oil & Gas")}
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
          onClick={(e) => onClickSelect(2, "Power & Utilities")}
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
          onClick={(e) => onClickSelect(3, "Mining")}
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
          onClick={(e) => onClickSelect(4, "Transportations & Logistic")}
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
          onClick={(e) => onClickSelect(5, "Manufacturing")}
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
          onClick={(e) => onClickSelect(6, "Other")}
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
