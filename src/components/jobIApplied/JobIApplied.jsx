import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrodJobApplication } from "../../utilitis/LocalStorage";

const JobIApplied = () => {
    const jobs = useLoaderData();
    const [appliedJob ,setAppliedJob] = useState([]);
    const [jobDisplay, setJobDisplay] =useState([]);

    const handleFilterJob = filter => {
        if(filter ==="all"){
            setJobDisplay(appliedJob);
        }
        else if (filter === "remote"){
            const remotejob = appliedJob.filter(job => job.remote_or_onsite ==="Remote");
            setJobDisplay(remotejob)
        }
        else if(filter === "onsite"){
            const onsiteJob = appliedJob.filter(job => job.remote_or_onsite ==="Onsite");
            setJobDisplay(onsiteJob)
        }
    }

    useEffect(()=>{
        const storedJobIds = getStrodJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJob(jobsApplied)
            setJobDisplay(jobsApplied)
        }
        
    } ,[jobs])

   

    return (
        <div>
            <h1>applied Job:{appliedJob.length}</h1>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleFilterJob("all")}><a>ALL</a></li>
                    <li onClick={()=>handleFilterJob("remote")}><a>Remote</a></li>
                    <li onClick={()=>handleFilterJob("onsite")}><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    jobDisplay.map(job=> <div key={job.id} >
                        <h1>Job Title : {job.job_title}</h1>
                        <h1>Company name : {job.company_name}</h1>
                        <h1>Job position : {job.remote_or_onsite}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default JobIApplied;