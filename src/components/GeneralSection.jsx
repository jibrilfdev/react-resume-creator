import { useState } from "react";

export default function GeneralSection( { sectionname, editing, onClose, onShow, name, setName, number, setNumber, email, setEmail, siteOne, setSiteOne, siteTwo, setSiteTwo } ) {

  if (!editing) {
    return (
    <>
      <p style={{margin: "0px"}}>{sectionname}</p>
      <p style={{margin: "0px"}}>{name}</p>
      <p style={{margin: "0px"}}>{number}</p>
      <p style={{margin: "0px"}}>{email}</p>
      <p style={{margin: "0px"}}>{siteOne}</p>
      <p style={{margin: "0px"}}>{siteTwo}</p>
      <button type="button" onClick={onShow}>Edit</button>
    </>
    )
  }
  return (
    <>
      <br />
      <label for="">{sectionname}</label><br />
      <div style={{paddingLeft: "5px"}}>
        <label for="">Name: </label><input type="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <label for="">Phone Number: </label><input type="name" value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
        <label for="">Email: </label><input type="name" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <label for="">Social Media / Website: </label><input type="name" value={siteOne} onChange={(e) => setSiteOne(e.target.value)} /> <br />
        <label for="">Social Media / Website: </label><input type="name" value={siteTwo} onChange={(e) => setSiteTwo(e.target.value)} /> <br />
        <button type="button" onClick={onClose}>Done</button>
      </div>
    </>
  )
}
