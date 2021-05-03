import { usestate } from "react";

export default function skillssection( { sectionname, editing, onclose, onshow } ) {
  const [languages, setLanguages] = useState("");
  const [frameworks, setFrameworks] = useState("");
  const [devtools, setDevtools] = useState("");

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
        <input type="name" value={languages} onchange={(e) => setlanguages(e.target.value)} /> <br />
        <input type="name" value={frameworks} onchange={(e) => setframeworks(e.target.value)} /> <br />
        <input type="name" value={devtools} onchange={(e) => setdevtools(e.target.value)} /> <br />
        <button type="button" onclick={onclose}>done</button>
      </div>
    </>
  )
}

