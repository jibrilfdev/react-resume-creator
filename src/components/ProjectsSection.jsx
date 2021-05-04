import { useState } from "react";

export default function ProjectsSection( { sectionname, editing, onClose, onShow, projectOne, setProjectOne, projectOneTimeline, setProjectOneTimeline, projectOneBulletOne, setProjectOneBulletOne, projectOneBulletTwo, setProjectOneBulletTwo, projectTwo, setProjectTwo, projectTwoTimeline, setProjectTwoTimeline, projectTwoBulletOne, setProjectTwoBulletOne, projectTwoBulletTwo, setProjectTwoBulletTwo } ) {

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
        <label for="">Project One Name: </label><input type="name" value={projectOne} onChange={(e) => setProjectOne(e.target.value)} /> <br />
        <label for="">Project One Timeline: </label><input type="name" value={projectOneTimeline} onChange={(e) => setProjectOneTimeline(e.target.value)} /> <br />
        <label for="">Project One Information: </label><input type="name" value={projectOneBulletOne} onChange={(e) => setProjectOneBulletOne(e.target.value)} /> <br />
        <label for="">Project One Information: </label><input type="name" value={projectOneBulletTwo} onChange={(e) => setProjectOneBulletTwo(e.target.value)} /> <br />
        <label for="">Project Two Name: </label><input type="name" value={projectTwo} onChange={(e) => setProjectTwo(e.target.value)} /> <br />
        <label for="">Project Two Timeline: </label><input type="name" value={projectTwoTimeline} onChange={(e) => setProjectTwoTimeline(e.target.value)} /> <br />
        <label for="">Project Two Information: </label><input type="name" value={projectTwoBulletOne} onChange={(e) => setProjectTwoBulletOne(e.target.value)} /> <br />
        <label for="">Project Two Information: </label><input type="name" value={projectTwoBulletTwo} onChange={(e) => setProjectTwoBulletTwo(e.target.value)} /> <br />
        <button type="button" onClick={onClose}>Done</button>
      </div>
    </>
  )
}
