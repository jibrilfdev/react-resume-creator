import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Section from "./components/Section.jsx";

function App() {
  const [editingIndex, setEditingIndex] = useState(-1);

  return (
    <>
      <h1>Resume App</h1>
      <Section sectionname="Section" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)} />
    </>
  );
}

export default App;
