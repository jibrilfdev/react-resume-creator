import { useState } from "react";

export default function EducationSection( { sectionname, editing, onClose, onShow, uni, setUni, uniLocation, setUniLocation, degree, setDegree, uniTimeline, setUniTimeline } ) {

  if (!editing) {
    return (
    <>
      <p style={{margin: "0px"}}>{sectionname}</p>
      <p style={{margin: "0px"}}>{uni}</p>
      <p style={{margin: "0px"}}>{uniLocation}</p>
      <p style={{margin: "0px"}}>{degree}</p>
      <p style={{margin: "0px"}}>{uniTimeline}</p>
      <button type="button" onClick={onShow}>Edit</button>
    </>
    )
  }
  return (
    <>
      <br />
      <label for="">{sectionname}</label><br />
      <div style={{paddingLeft: "5px"}}>
        <label for="">Education Name: </label><input type="name" value={uni} onChange={(e) => setUni(e.target.value)} /> <br />
        <label for="">Education Location: </label><input type="name" value={uniLocation} onChange={(e) => setUniLocation(e.target.value)} /> <br />
        <label for="">Degree: </label><input type="name" value={degree} onChange={(e) => setDegree(e.target.value)} /> <br />
        <label for="">Education Timeline: </label><input type="name" value={uniTimeline} onChange={(e) => setUniTimeline(e.target.value)} /> <br />
        <button type="button" onClick={onClose}>Done</button>
      </div>
    </>
  )
}
