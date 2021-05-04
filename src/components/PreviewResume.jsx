import Education from './Education.jsx';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import { useState } from 'react';

export default function PreviewResume( { name, number, email, siteOne, siteTwo, job, timeline, location, bulletOne, bulletTwo, uni, uniLocation, degree, uniTimeline, projectOne, projectOneTimeline, projectOneBulletOne, projectOneBulletTwo, projectTwo, projectTwoTimeline, projectTwoBulletOne, projectTwoBulletTwo, languages, frameworks, devtools } ) {

  return (
    <>
      <h1 style={{margin: "0", paddingBottom: "0"}}>{name}</h1>
      <h6 style={{margin: "0", paddingTop: "0", textAlign: "center"}}>{number} | {email} | {siteOne} | {siteTwo} </h6>
      <Education uni={uni} uniLocation={uniLocation} degree={degree} uniTimeline={uniTimeline} />
      <Work job={job} timeline={timeline} location={location} bulletOne={bulletOne} bulletTwo={bulletTwo} />
      <Projects projectOne={projectOne} projectOneTimeline={projectOneTimeline} projectOneBulletOne={projectOneBulletOne} projectOneBulletTwo={projectOneBulletTwo} projectTwo={projectTwo} projectTwoTimeline={projectTwoTimeline} projectTwoBulletOne={projectTwoBulletOne} projectTwoBulletTwo={projectTwoBulletTwo} />
      <Skills languages={languages} frameworks={frameworks} devtools={devtools}/>
    </>
  )
}
