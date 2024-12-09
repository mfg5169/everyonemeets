import { useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../utils/superbase";
const Landing = () => {

    useEffect(() => {
        // Create an async function inside the useEffect hook
        const fetchMeetings = async () => {
          const { data, error } = await supabase
            .from('Meetings')  // Specify the table name
            .select('*');  // Select all columns
    
          if (error) {
            console.error('Error fetching meetings:', error);
          } else {
            console.log('Meetings data:', data);
          }
        };
    
        fetchMeetings();  // Call the async function
    
        console.log("Landing component rendered");
        console.log(import.meta.env);
      }, []); // Empty dependency array ensures this runs only once when the component mounts
    
    return (
        <div className='space-y-14 m-14'>
            <h1 className='text-center text-6xl font-bold space-y-2'>
                We Have the Meets 🥩
            </h1>
            <br></br>
            <div className='flex justify-center gap-20 text-2xl font'>
                <Link className='rounded bg-slate-300 px-4 py-2' to='/find'>
                    
                    {import.meta.env.VITE_SERVICE_KEY}
                </Link>
                <Link to='/create' className='rounded bg-slate-300 px-4 py-2'>
                    Create meet
                </Link>
            </div>
        </div>
    );
};

export default Landing;
