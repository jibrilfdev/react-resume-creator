export default function Education( { uni, location, degree, timeline} ) {
  return (
    <>
      <p style={{marginBottom: "0"}}>Education</p>
      <hr style={{margin: "0"}}/>
      <div style={{display: "grid", gridTemplateColumns: "auto auto", paddingLeft: "10px", paddingRight: "10px"}}>
        <p style={{margin: "0"}}><b>{uni}</b></p>
        <p style={{margin: "0", textAlign: "right"}}>{location}</p>
        <p style={{margin: "0"}}>{degree}</p>
        <p style={{margin: "0", textAlign: "right"}}>{timeline}</p>
      </div>
    </>
  )
}
