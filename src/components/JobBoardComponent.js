import React from 'react';

// {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "./images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   },

const JobBoardComponent = ({ job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools},
    handleTagClick,
 }) => {
    const tags = [role, level];

    if(tools) {
        tags.push(...tools);
    }

    if(languages) {
        tags.push(...languages)
    }

    return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-6 p-6 rounded-md ${
        featured && 'border-teal-500 border-l-4 border-solid'
    } sm:flex-row sm:my-4`}>
        <div>
            <img className='-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24 sm:mb-0' src={logo} alt={company} />
        </div>
        <div className='flex flex-col justify-between ml-4' >
            <h3 className=' font-bold text-teal-500'>
                {company}
                {isNew && <span className='m-2 bg-teal-500 text-teal-100 rounded-full py-1 px-2 uppercase sm:text-sm'>New</span>}
                {featured && <span className='bg-gray-800 text-white rounded-full py-1 px-2 uppercase sm:text-sm'>featured</span>}
            </h3>
            <h2 className=' font-bold text-xl my-2'>{position}</h2>
            <p className=' text-gray-700'>{postedAt} &bull; {contract} &bull; {location} </p>
        </div>
        <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
            {tags ? 
                tags.map((tag) => (
                    <span 
                    onClick= {() => handleTagClick(tag)}
                    className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>{tag}</span>
                )) :
                ''
            }
        </div>    
    </div>
)}

export default JobBoardComponent;