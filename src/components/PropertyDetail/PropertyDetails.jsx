import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PropertyDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [unicCard, setUnicCard] = useState(null); 

    useEffect(() => {
        const foundCard = data.find(d => d.id == id);
        setUnicCard(foundCard);

    }, []);
    console.log(unicCard);


    if (!unicCard) {
        return <p>Loading property details...</p>; 
    }

    const { description, segment_name, image, estate_title, facilities, location, area, status, price, details } = unicCard;

    const {bedrooms, bathrooms, year_built} = details;

    return (
        <div className="h-[75vh] flex justify-center mt-20">
            <div className="card glass w-[70%]">
                <figure>
                    <img  src={`../../../public/${image}`} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{segment_name}</h2>
                    <p>{estate_title}</p>
                    <p>{description}</p>
                    {
                        facilities.map((f ,idx)=> <li key={idx}>{f}</li>)
                    }
                    <p><span className="font-bold text-black text-xl">Location:</span> {location}</p>
                    <p><span className="font-bold text-black text-xl">Area:</span> {area}</p>
                    <p><span className="font-bold text-black text-xl">Status:</span> {status}</p>
                    <p><span className="font-bold text-black text-xl">Price:</span> {price}</p>
                    <p><span className="font-bold text-black text-xl">Bedrooms:</span> {bedrooms}</p>
                    <p><span className="font-bold text-black text-xl">Bathrooms:</span> {bathrooms}</p>
                    <p><span className="font-bold text-black text-xl">Year of built:</span> {year_built}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
