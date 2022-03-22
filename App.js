import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [Questions,setQuestion]=useState(data);
  return <main>
    <div className='container'>
      <h3>Questions and Answers about login</h3>
      <section className='info'>
      {
          Questions.map((question)=> {
            return <SingleQuestion key={question.id}{...question} />
          })
      }
      </section>
    </div>

  </main>;
}

export default App;
