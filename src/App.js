/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);
     // fetch('./assets/data.json').then(res => res.json())
    // .then((data) => {
    //   setJobs(data);
    // })

  console.log(jobs);

  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img src="/images/bg-header-desktop.svg" alt="bg-image" />
      </header>
      {jobs.length === 0 ? (
        <p>Jobs are fetching ...</p>
      ): (
        jobs.map((job) => <JobBoardComponent job={job} key={job.id} /> )
      )}
    </div>
  );
}

export default App;

// TODOs
// 1. Study the design & json
// 2. Job Board Component
// 3. Get the data from the JSON
// 4. Pass down the data to the JBC
// 5. Style it
// 6. Filter component
// 7. Filter the data
