const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hellllo world fom REacct"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "tis is H1")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
