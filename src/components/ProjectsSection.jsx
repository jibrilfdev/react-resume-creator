import { useState } from "react";

export default function ProjectsSection( { sectionname, editing, onClose, onShow } ) {
  const [projectOne, setProjectOne] = useState("");
  const [projectOneTimeline, setProjectOneTimeline] = useState("");
  const [projectOneBulletOne, setProjectOneBulletOne] = useState("");
  const [projectOneBulletTwo, setProjectOneBulletTwo] = useState("");
  const [projectTwo, setProjectTwo] = useState("");
  const [projectTwoTimeline, setProjectTwoTimeline] = useState("");
  const [projectTwoBulletOne, setProjectTwoBulletOne] = useState("");
  const [projectTwoBulletTwo, setProjectTwoBulletTwo] = useState("");

  if (!editing) {
    return (
    <>
      <p style={{margin: "0px"}}>{sectionname}</p>
      <p style={{margin: "0px"}}>{projectOne}</p>
      <p style={{margin: "0px"}}>{projectOneTimeline}</p>
      <p style={{margin: "0px"}}>{projectOneBulletOne}</p>
      <p style={{margin: "0px"}}>{projectOneBulletTwo}</p>
      <p style={{margin: "0px"}}>{projectTwo}</p>
      <p style={{margin: "0px"}}>{projectTwoTimeline}</p>
      <p style={{margin: "0px"}}>{projectTwoBulletOne}</p>
      <p style={{margin: "0px"}}>{projectTwoBulletTwo}</p>
      <button type="button" onClick={onShow}>Edit</button>
    </>
    )
  }
  return (
    <>
      <br />
      <label for="">{sectionname}</label><br />
      <div style={{paddingLeft: "5px"}}>
        <input type="name" value={projectOne} onChange={(e) => setProjectOne(e.target.value)} /> <br />
        <input type="name" value={projectOneTimeline} onChange={(e) => setProjectOneTimeline(e.target.value)} /> <br />
        <input type="name" value={projectOneBulletOne} onChange={(e) => setProjectOneBulletOne(e.target.value)} /> <br />
        <input type="name" value={projectOneBulletTwo} onChange={(e) => setProjectOneBulletTwo(e.target.value)} /> <br />
        <input type="name" value={projectTwo} onChange={(e) => setProjectTwo(e.target.value)} /> <br />
        <input type="name" value={projectTwoTimeline} onChange={(e) => setProjectTwoTimeline(e.target.value)} /> <br />
        <input type="name" value={projectTwoBulletOne} onChange={(e) => setProjectTwoBulletOne(e.target.value)} /> <br />
        <input type="name" value={projectTwoBulletTwo} onChange={(e) => setProjectTwoBulletTwo(e.target.value)} /> <br />
        <button type="button" onClick={onClose}>Done</button>
      </div>
    </>
  )
}
