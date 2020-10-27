/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(['CSS']);

  useEffect(() => setJobs(data), []);
     // fetch('./assets/data.json').then(res => res.json())
    // .then((data) => {
    //   setJobs(data);
    // })
  
  const filterFunc = ({role, level, tools, languages}) => {
    if(filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if(tools) {
        tags.push(...tools);
    }

    if(languages) {
        tags.push(...languages)
    }
    
    return filters.every(filter => tags.includes(filter));
  }

  const handleTagClick = (tag) => {
    // avoid reading the tag
    if(filters.includes(tag)) return;
    setFilters([...filters, tag])
  }
    
  const filteredJobs = jobs.filter(filterFunc);

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }


  console.log(jobs);

  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img className='w-full' src="/images/bg-header-desktop.svg" alt="bg-image" />
      </header>
      <div className="container m-auto relative z-10">
        {
          filters.length > 0 && (
          <div className={`flex flex-wrap bg-white shadow-md mb-16 -my-20 mx-6 p-6 rounded-md justify-items-center`}>
          {filters.map(
          (filter) => (
          <span onClick= {() => handleFilterClick(filter)}
          className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 pl-4 pt-2 rounded lg:mb-0'>
          {filter}
          <span className=' bg-teal-500 text-white ml-4 p-2'>&#10005;</span>
          </span>
          ))}
          <button onClick={clearFilters} className='bg-teal-500 p-2 text-white ml-auto rounded'>Clear</button>
          </div>
        )}
      
      {jobs.length === 0 ? (
        <p>Jobs are fetching ...</p>
      ): (
        filteredJobs.map((job) => <JobBoardComponent 
        job={job}
        key={job.id} 
        handleTagClick={handleTagClick}
        /> )
      )}
      </div>
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
