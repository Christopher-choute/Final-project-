import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "semantic-ui-css/semantic.min.css";
// import  Context  from "./context";


// export const UserContext = createContext()
const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    {/* <UserContext.Provider value={[fishData]}> */}
      <GlobalStyle />
      <App />
    {/* </UserContext.Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
