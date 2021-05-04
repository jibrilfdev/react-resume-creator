import { usestate } from "react";

export default function SkillsSection( { sectionname, editing, onclose, onshow, languages, setlanguages, frameworks, setframeworks, devtools, setdevtools } ) {

  if (!editing) {
    return (
    <>
      <p style={{margin: "0px"}}>{sectionname}</p>
      <p style={{margin: "0px"}}>{languages}</p>
      <p style={{margin: "0px"}}>{frameworks}</p>
      <p style={{margin: "0px"}}>{devtools}</p>
      <button type="button" onclick={onshow}>edit</button>
    </>
    )
  }
  return (
    <>
      <br />
      <label for="">{sectionname}</label><br />
      <div style={{paddingleft: "5px"}}>
        <label for="">languages: </label><input type="name" value={languages} onchange={(e) => setlanguages(e.target.value)} /> <br />
        <label for="">frameworks: </label><input type="name" value={frameworks} onchange={(e) => setframeworks(e.target.value)} /> <br />
        <label for="">devtools: </label><input type="name" value={devtools} onchange={(e) => setdevtools(e.target.value)} /> <br />
        <button type="button" onclick={onclose}>done</button>
      </div>
    </>
  )
}
