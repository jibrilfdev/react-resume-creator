import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Section from "./components/Section.jsx";
import GeneralSection from "./components/GeneralSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import PreviewResume from './components/PreviewResume.jsx';

function App() {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [siteOne, setSiteOne] = useState("");
  const [siteTwo, setSiteTwo] = useState("");
  const [job, setJob] = useState("");
  const [timeline, setTimeline] = useState("");
  const [location, setLocation] = useState("");
  const [bulletOne, setBulletOne] = useState("");
  const [bulletTwo, setBulletTwo] = useState("");
  const [uni, setUni] = useState("");
  const [uniLocation, setUniLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [uniTimeline, setUniTimeline] = useState("");
  const [languages, setLanguages] = useState("");
  const [frameworks, setFrameworks] = useState("");
  const [devtools, setDevtools] = useState("");
  const [projectOne, setProjectOne] = useState("");
  const [projectOneTimeline, setProjectOneTimeline] = useState("");
  const [projectOneBulletOne, setProjectOneBulletOne] = useState("");
  const [projectOneBulletTwo, setProjectOneBulletTwo] = useState("");
  const [projectTwo, setProjectTwo] = useState("");
  const [projectTwoTimeline, setProjectTwoTimeline] = useState("");
  const [projectTwoBulletOne, setProjectTwoBulletOne] = useState("");
  const [projectTwoBulletTwo, setProjectTwoBulletTwo] = useState("");

  return (
    <>
      <div>
        <h1>Resume App</h1>
        <div className="flex-parent maindiv" style={{display: "flex", flexFlow: "wrap", margin: "auto", gap: "10px"}}>
          <div className="flex-parent" style={{flexBasis: "775px"}}>
            <GeneralSection sectionname="General Information" name={name} setName={setName} number={number} setNumber={setNumber} email={email} setEmail={setEmail} siteOne={siteOne} setSiteOne={setSiteOne} siteTwo={siteTwo} setSiteTwo={setSiteTwo} editing={editingIndex == 0} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(0)}/>
            <EducationSection sectionname="Educational Experience" uni={uni} setUni={setUni} uniLocation={uniLocation} setUniLocation={setUniLocation} degree={degree} setDegree={setDegree} uniTimeline={uniTimeline} setUniTimeline={setUniTimeline} editing={editingIndex == 2} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(2)}/>
            <WorkSection sectionname="Work Experience" job={job} setJob={setJob} timeline={timeline} setTimeline={setTimeline} location={location} setLocation={setLocation} bulletOne={bulletOne} setBulletOne={setBulletOne} bulletTwo={bulletTwo} setBulletTwo={setBulletTwo} editing={editingIndex == 1} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(1)}/>
            <ProjectsSection sectionname="Projects" projectOne={projectOne} setProjectOne={setProjectOne} projectOneTimeline={projectOneTimeline} setProjectOneTimeline={setProjectOneTimeline} projectOneBulletOne={projectOneBulletOne} setProjectOneBulletOne={setProjectOneBulletOne} projectOneBulletTwo={projectOneBulletTwo} setProjectOneBulletTwo={setProjectOneBulletTwo} projectTwo={projectTwo} setProjectTwo={setProjectTwo} projectTwoTimeline={projectTwoTimeline} setProjectTwoTimeline={setProjectTwoTimeline} projectTwoBulletOne={projectTwoBulletOne} setProjectTwoBulletOne={setProjectTwoBulletOne} projectTwoBulletTwo={projectTwoBulletTwo} setProjectTwoBulletTwo={setProjectTwoBulletTwo} editing={editingIndex == 3} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(3)}/>
            <SkillsSection sectionname="Skills" languages={languages} setLanguages={setLanguages} frameworks={frameworks} setFrameworks={setFrameworks} devtools={devtools} setDevtools={setDevtools} editing={editingIndex == 4} onClose={() => setEditingIndex(-1)} onShow={() => setEditingIndex(4)}/>
          </div>
          <div style={{backgroundColor: "white", padding: '10' + 'px', width: "775px",margin: "auto", height: "1002px", display: "flex", flexDirection: "column"}}>
            <div style={{backgroundColor: "white", color: "black", padding: '3%', boxShadow: "1px 1px 5px 5px darkgray", maxHeight: "100%", flexGrow: "1"}}>
              <PreviewResume name={name} number={number} email={email} siteOne={siteOne} siteTwo={siteTwo} job={job} timeline={timeline} location={location} bulletOne={bulletOne} bulletTwo={bulletTwo} uni={uni} uniLocation={uniLocation} degree={degree} uniTimeline={uniTimeline} projectOne={projectOne} projectOneTimeline={projectOneTimeline} projectOneBulletOne={projectOneBulletOne} projectOneBulletTwo={projectOneBulletTwo} projectTwo={projectTwo} projectTwoTimeline={projectTwoTimeline} projectTwoBulletOne={projectTwoBulletOne} projectTwoBulletTwo={projectTwoBulletTwo} languages={languages} frameworks={frameworks} devtools={devtools} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
