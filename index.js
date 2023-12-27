import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n/config";
import PageNotFound from "./PageNotFound";
import EmailTemplate from "./emailtemplate/EmailTemplate";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

function StartPage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
root.render(
  <React.StrictMode>
    <StartPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
