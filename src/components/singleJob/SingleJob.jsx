import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleJob = ({job}) => {
    
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-left text-lg">{company_name}</p>
                <div className="text-left">
                    <button className="border border-[#7E90FE] mr-4 text-[#7E90FE] font-bold p-2 rounded">{remote_or_onsite}</button>
                    <button className="border border-[#7E90FE] mr-4 text-[#7E90FE] font-bold p-2 rounded">{job_type}</button>
                </div>
                <div className="flex gap-4">
                    <h1 className="flex"><IoLocationOutline className="text-xl mr-1" />{location}</h1>
                    <h1 className="flex"><AiTwotoneDollarCircle  className="text-xl mr-1" />{salary}</h1>
                </div>
                <div className="card-actions">
                <Link to={`/job/${id}`}><button className="btn btn-primary font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;