import { useEffect, useState } from "react";
import SingleJob from "../singleJob/SingleJob";

const FeaturedJob = () => {
    const [jobs , setJobs] =useState([]);
    const [jobLength , setJobLength] = useState(4)


    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(date => setJobs(date));
    },[])
    return (
        <div className="text-center">
            <h1 className="text-5xl">Featured Jobs :{jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {
                    jobs.slice(0,jobLength).map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
            <div className={jobLength === jobs.length ? 'hidden' : "mt-8"}>
                <button onClick={()=>setJobLength(jobs.length)} className="btn bg-primary text-white">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJob;