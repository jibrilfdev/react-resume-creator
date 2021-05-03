import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Section from "./components/Section.jsx";
import GeneralSection from "./components/GeneralSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import PreviewResume from "./components/PreviewResume.jsx";

function App() {
  // Editing index is a state for making sure only one section is being edited at a time.
  const [editingIndex, setEditingIndex] = useState(-1);

  return (
    <>
      <h1>Resume App</h1>
      <div>
        <GeneralSection sectionname="General Information" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)} />
        <WorkSection sectionname="Education" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(1)} />
        <EducationSection sectionname="Work Experience" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(2)} />
        <ProjectsSection sectionname="Work Experience" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(3)} />
        <SkillsSection sectionname="Skill" editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(4)} />
      </div>
      <div>
        <PreviewResume />
      </div>
    </>
  );
}

export default App;
