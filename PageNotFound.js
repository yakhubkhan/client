import logo from "./Fortinet logo.svg";
import "./App.css";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="fullpage_background_color">
      <img
        src={logo}
        alt=""
        width="100%"
        height="24px"
        text-align="center"
        position="absolute"
        top="20%"
        margin-top="20"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95.5vh",
          flexDirection: "column",
        }}
      >
        <h1 className="error_404">404 </h1>
        <h1 className="Page_notfound">Page Not Found</h1>
        {/* <button className="goToHomepage">Go to the Home Page</button> */}
        <button className="buttonHome" onClick={() => navigate("/")}>
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
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: 1,
                wordWrap: "break-word",
              }}
            >
              Go Home
            </div>
            <BsArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
