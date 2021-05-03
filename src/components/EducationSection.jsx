import { useState } from "react";

export default function EducationSection( { sectionname, editing, onClose, onShow } ) {
  const [uni, setUni] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [timeline, setTimeline] = useState("");

  if (!editing) {
    return (
    <>
      <p style={{margin: "0px"}}>{sectionname}</p>
      <p style={{margin: "0px"}}>{uni}</p>
      <p style={{margin: "0px"}}>{location}</p>
      <p style={{margin: "0px"}}>{degree}</p>
      <p style={{margin: "0px"}}>{timeline}</p>
      <button type="button" onClick={onShow}>Edit</button>
    </>
    )
  }
  return (
    <>
      <br />
      <label for="">{sectionname}</label><br />
      <div style={{paddingLeft: "5px"}}>
        <input type="name" value={uni} onChange={(e) => setUni(e.target.value)} /> <br />
        <input type="name" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
        <input type="name" value={degree} onChange={(e) => setDegree(e.target.value)} /> <br />
        <input type="name" value={timeline} onChange={(e) => setTimeline(e.target.value)} /> <br />
        <button type="button" onClick={onClose}>Done</button>
      </div>
    </>
  )
}
