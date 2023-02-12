import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { id: "header1", key: "1" }, "Heading-1")
const heading2 = React.createElement("h2", { id: "header2", key: "2" }, "Heading-2")
const input = React.createElement("input", { id: "input", key: "3", placeholder: "Enter name" },)
const div = React.createElement('div', {}, [heading, heading2, input])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(div)