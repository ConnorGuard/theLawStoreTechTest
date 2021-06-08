import React, {useEffect, useState } from 'react';
import NewJob from '../components/newJob';
import GetJobs from '../requests/getJobs';

function Admin() {
  const [jobs, setjobs] = useState([]);

  //On page load
  useEffect(() => {
    GetJobs().then((data)=>{
      setjobs(data);
    })
    .catch((error) => {
      console.log(error)
      alert('Error:', error);
    });
  }, []);

  return (
    <div className="Admin">
            <NewJob />
    </div>);
}

export default Admin;


