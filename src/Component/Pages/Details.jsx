import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    console.log(id);

    const details = useLoaderData();
    console.log(details);

    useEffect(()=>{
      const findDetails = details.find(eachDetail => eachDetail._id === id);
      console.log(findDetails);
      setDetail(findDetails);
    },[details,id] )
    return (
        <div className="w-[80%] mx-auto">
            <img src={detail.image} alt="" className="mt-[300px] w-[50%] h-[400px] rounded-xl shadow-2xl "/>
        </div>
    );
};

export default Details;