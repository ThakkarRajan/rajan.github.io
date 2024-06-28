import React from 'react';
import resumePDF from './rajan_resume.pdf'; // Import your resume PDF

function ResumeLink() {
  return (
    <>
   
        <a href={resumePDF} download >
        &lt; &gt;  Download Resume
        </a>
    </>
  );
}

export default ResumeLink;