export default function Work( {job, timeline, location, bulletOne, bulletTwo } ) {
  return (
    <>
      <p style={{marginBottom: "0"}}>Experience</p>
      <hr style={{margin: "0"}}/>
      <div style={{display: "grid", gridTemplateColumns: "auto auto", paddingLeft: "10px", paddingRight: "10px"}}>
        <p style={{margin: "0"}}><b>{job}</b></p>
        <p style={{margin: "0", textAlign: "right"}}>{timeline}</p>
        <p style={{margin: "0"}}>{location}</p>
        <p style={{margin: "0", textAlign: "right"}}></p>
        <ul style={{marginTop: "0"}}>
          <li>{bulletOne}</li>
          <li>{bulletTwo}</li>
        </ul>
      </div>
    </>
  )
}
