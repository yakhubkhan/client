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
  const [index, setIndex] = useState(0);

  const onClickSelect = (number) => {
    setIndex(number);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
          marginTop: 30,
        }}
      >
        <div
          style={{
            width: "90%",
            // cursor: "pointer",
            //paddingLeft: 180,
            alignItems: "flex-start",
            gap: 32,
            display: "flex",
          }}
        >
          <div
            style={{
              height: 259,
              width: "35%",
              paddingTop: 66,
              paddingBottom: 32,
              cursor: "pointer",
              paddingLeft: 32,
              paddingRight: 32,
              background: index === 1 ? "#DA291C" : "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderStyle: "solid",
              borderColor: "white",
            }}
            id="gas"
            onClick={(e) => onClickSelect(1)}
          >
            <div
              style={{
                width: 114,
                color: index === 1 ? "white" : "#0F0E0E",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Oil & Gas
            </div>
            <div
              style={{
                width: 161,
                height: 161,
                position: "relative",
              }}
            >
              <img
                src={index === 1 ? oilselect : oil}
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>

          <div
            style={{
              height: 259,
              width: "35%",
              paddingTop: 66,
              paddingBottom: 32,
              paddingLeft: 32,
              paddingRight: 32,
              background: index === 2 ? "#DA291C" : "white",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              display: "flex",
              borderStyle: "solid",
              borderColor: "white",
            }}
            id="power"
            onClick={(e) => onClickSelect(2)}
          >
            <div
              style={{
                width: 114,
                color: index === 2 ? "white" : "#0F0E0E",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Power & Utilities
            </div>
            <div
              style={{
                width: 161,
                height: 161,
                position: "relative",
                // flexDirection: "column",
                // justifyContent: "flex-start",
                // alignItems: "flex-start",
                // display: "flex",
              }}
            >
              <img
                src={index === 2 ? powerselect : power}
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>
          <div
            style={{
              height: 259,
              width: "35%",
              paddingTop: 66,
              paddingBottom: 32,
              paddingLeft: 32,
              paddingRight: 32,
              background: index === 3 ? "#DA291C" : "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              borderStyle: "solid",
              borderColor: "white",
            }}
            id="mining"
            onClick={(e) => onClickSelect(3)}
          >
            <div
              style={{
                width: 114,
                color: index === 3 ? "white" : "#0F0E0E",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Mining
            </div>
            <div
              style={{
                width: 161,
                height: 161,
                // position: "relative",
                // flexDirection: "column",
                // justifyContent: "flex-start",
                // alignItems: "flex-start",
                // display: "flex",
              }}
            >
              <img
                src={index == 3 ? miningselect : mining}
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          //paddingLeft: 180,
          //paddingRight: 180,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
          marginTop: 30,
        }}
      >
        <div
          style={{
            width: "90%",
            //flexDirection: "column",
            //justifyContent: "center",
            alignItems: "flex-start",
            gap: 32,
            display: "flex",
          }}
        >
          <div
            style={{
              height: 259,
              width: "35%",
              paddingTop: 66,
              paddingBottom: 32,
              paddingLeft: 32,
              paddingRight: 32,
              background: index === 4 ? "#DA291C" : "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              borderStyle: "solid",
              borderColor: "white",
            }}
            id="transportation"
            onClick={(e) => onClickSelect(4)}
          >
            <div
              style={{
                width: 130,
                color: index === 4 ? "white" : "#0F0E0E",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "500",

                wordWrap: "break-word",
              }}
            >
              Transportations & Logistic
            </div>
            <div
              style={{
                width: 145,
                height: 161,
              }}
            >
              <img
                src={index == 4 ? transportationselect : transportation}
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>
          {/* </div> */}
          <div
            style={{
              height: 259,
              width: "35%",
              paddingTop: 66,
              paddingBottom: 32,
              paddingLeft: 32,
              paddingRight: 32,
              background: index === 5 ? "#DA291C" : "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              borderStyle: "solid",
              borderColor: "white",
            }}
            id="manufacturing"
            onClick={(e) => onClickSelect(5)}
          >
            <div
              style={{
                width: 120,
                color: index === 5 ? "white" : "#0F0E0E",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "500",

                wordWrap: "break-word",
              }}
            >
              Manufacturing
            </div>
            <div
              style={{
                width: 155,
                height: 161,
                position: "relative",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <img
                src={index == 5 ? manufactureselect : manufacture}
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>
          <div
            style={{
              height: 259,
              width: "35%",
              paddingTop: 66,
              paddingBottom: 32,
              paddingLeft: 32,
              paddingRight: 32,
              background: index === 6 ? "#DA291C" : "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              borderStyle: "solid",
              borderColor: "white",
            }}
            id="other"
            onClick={(e) => onClickSelect(6)}
          >
            <div
              style={{
                width: 114,
                color: index === 6 ? "white" : "#0F0E0E",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "500",
                cursor: "pointer",
                wordWrap: "break-word",
              }}
            >
              Other
            </div>
            <div
              style={{
                width: 161,
                height: 161,
              }}
            >
              <img
                src={index == 6 ? otherselect : other}
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
