import React from 'react'

function About() {
  return(
    // Not part of the DOM
    // But we need it for encapsulation
    <React.Fragment>
       <h1>About Page</h1>
       <p>Simple To-Do List Application powered by React</p>
    </React.Fragment>
  );
}

export default About;