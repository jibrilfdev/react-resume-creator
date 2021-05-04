export default function Skills( { languages, frameworks, devtools } ) {
  return (
    <>
      <p style={{marginBottom: "0"}}>Skills</p>
      <hr style={{margin: "0"}}/>
      <span><b>Languages: </b></span><span>{languages}</span><br />
      <span><b>Frameworks: </b></span><span>{frameworks}</span><br />
      <span><b>Developer Tools: </b></span><span>{devtools}</span><br />
    </>
  )
}
