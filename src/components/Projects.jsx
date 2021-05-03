export default function Projects( { projectOne, projectOneTimeline, projectOneBulletOne, projectOneBulletTwo, projectTwo, projectTwoTimeline, projectTwoBulletOne, projectTwoBulletTwo } ) {
  return (
    <>
      <p style={{marginBottom: "0"}}>Projects</p>
      <hr style={{margin: "0"}}/>
      <div style={{display: "grid", gridTemplateColumns: "auto auto", paddingLeft: "10px", paddingRight: "10px"}}>
        <p style={{margin: "0"}}><b>{projectOne}</b></p>
        <p style={{margin: "0", textAlign: "right"}}>{projectOneTimeline}</p>
        <ul style={{marginTop: "0"}}>
          <li>{projectOneBulletOne}</li>
          <li>{projectOneBulletTwo}</li>
        </ul>
        <p></p>
        <p style={{margin: "0"}}><b>{projectTwo}</b></p>
        <p style={{margin: "0", textAlign: "right"}}>{projectTwoTimeline}</p>
        <ul style={{marginTop: "0"}}>
          <li>{projectTwoBulletOne}</li>
          <li>{projectTwoBulletTwo}</li>
        </ul>
        <p></p>
      </div>
    </>
  )
}
