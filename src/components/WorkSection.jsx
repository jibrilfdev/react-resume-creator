import { useState } from "react";

export default function WorkSection( { sectionname, editing, onClose, onShow, job, setJob, timeline, setTimeline, location, setLocation, bulletOne, setBulletOne, bulletTwo, setBulletTwo } ) {

  if (!editing) {
    return (
    <>
      <p style={{margin: "0px"}}>{sectionname}</p>
      <p style={{margin: "0px"}}>{job}</p>
      <p style={{margin: "0px"}}>{timeline}</p>
      <p style={{margin: "0px"}}>{location}</p>
      <p style={{margin: "0px"}}>{bulletOne}</p>
      <p style={{margin: "0px"}}>{bulletTwo}</p>
      <button type="button" onClick={onShow}>Edit</button>
    </>
    )
  }
  return (
    <>
      <br />
      <label for="">{sectionname}</label><br />
      <div style={{paddingLeft: "5px"}}>
        <label for="">Job Name: </label><input type="name" value={job} onChange={(e) => setJob(e.target.value)} /> <br />
        <label for="">Job Timeline: </label><input type="name" value={timeline} onChange={(e) => setTimeline(e.target.value)} /> <br />
        <label for="">Job Location: </label><input type="name" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
        <label for="">Job Information: </label><input type="name" value={bulletOne} onChange={(e) => setBulletOne(e.target.value)} /> <br />
        <label for="">Job Information: </label><input type="name" value={bulletTwo} onChange={(e) => setBulletTwo(e.target.value)} /> <br />
        <button type="button" onClick={onClose}>Done</button>
      </div>
    </>
  )
}
