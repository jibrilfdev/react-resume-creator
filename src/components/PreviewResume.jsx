import Education from './Education.jsx';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import { useState } from 'react';

export default function PreviewResume( {  } ) {

  return (
    <>
      <h1 style={{margin: "0", paddingBottom: "0"}}>{name}</h1>
      <h6 style={{margin: "0", paddingTop: "0", textAlign: "center"}}>{number} | {email} | {siteOne} | {siteTwo} </h6>
      <Education />
      <Work />
      <Projects />
      <Skills />
    </>
  )
}
