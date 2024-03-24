import { useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { PiSubtitlesLight } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilitis/LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const IndId = parseInt(id);
    const job = jobs.find(job => job.id === IndId);
    

    const handleApplyJob = () => {
        saveJobApplication(IndId);
        toast('You are apply job successfully')
    }
    return (
        <div className="mb-8">
            <h1 className="text-center text-2xl mb-4 font-bold">Job Details</h1>
            <div className="grid md:grid-cols-5 gap-4">
                <div className="col-span-3 space-y-8">
                    <p><span className="text-xl font-bold">Job Description: </span> {job.job_description}</p>
                    <p><span className="text-xl font-bold">Job Responsibility :</span> {job.job_responsibility}</p>
                    <p className="text-xl font-bold">Educational Requirements:</p>
                    <p>{job.educational_requirements}</p>
                    <p className="text-xl font-bold">Experiences:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className="col-span-2 ml-12 ">
                    <div className="bg-[#7E90FE] rounded p-4">
                        <h1 className="font-bold mb-2">Job Details</h1>
                        <hr className="text-[#7E90FE] mb-4"/>
                        <h1 className="flex items-center"><AiTwotoneDollarCircle  className="text-xl mr-2" /><span className="text-md font-semibold">Salary : </span> {job.salary} (Per Month)</h1>
                        <h1 className="flex items-center mt-2"><PiSubtitlesLight className="text-xl mr-2 text-white" /><span className="text-md font-semibold">Job Title : </span> {job.job_title}</h1>
                        <h1 className="font-bold my-4">Contact Information</h1>
                        
                        <hr />
                        <h2 className="flex items-center mt-4"><FaPhoneAlt className="text-xl mr-2" /> <span className="text-md font-semibold"> Phone : </span> {job.contact_information.phone}</h2>
                        <h2 className="flex items-center mt-4"><MdOutlineMailOutline  className="text-xl mr-2" /> <span className="text-md font-semibold"> Email : </span> {job.contact_information.email}</h2>
                        <h2 className="flex  mt-4"><FaLocationDot   className="text-xl mr-2" /> <span className="text-md font-semibold"> Address: </span> {job.contact_information.address}</h2>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="btn w-full mt-2 text-white bg-[#7E90FE]">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;