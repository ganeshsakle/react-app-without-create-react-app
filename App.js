import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World!");

const heading2 = React.createElement("h2", {}, "This is a react app");

const headings = React.createElement("div", {}, [heading, heading2]);

const div1 = document.getElementById("div1");

const root = ReactDOM.createRoot(div1);

root.render(headings);