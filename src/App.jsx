import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Section from "./components/Section.jsx";

function App() {
  // Editing index is a state for making sure only one section is being edited at a time.
  const [editingIndex, setEditingIndex] = useState(-1);

  return (
    <>
      <h1>Resume App</h1>
      <Section sectionname="General Information" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)} />
      <Section sectionname="Education" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)} />
      <Section sectionname="Work Experience" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)} />
      <Section sectionname="Skill" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)} />
    </>
  );
}

export default App;
