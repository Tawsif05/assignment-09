import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SingleProperty = ({ property }) => {
    const { id, description, segment_name, image, estate_title, facilities, location, area, status, price } = property;

    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="overflow-hidden">
                <img
                    className="object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
                    src={image}
                    alt="Property" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="flex justify-between">
                    <p className="flex items-center "><span className="text-base mr-2 "><IoLocationOutline /></span> {location}</p>
                    <h2><span className="font-bold">Type:</span> {segment_name}</h2>
                </div>
                <hr />
                <div className="flex justify-between">
                    <div>
                        <h2 ><span className="font-bold">Status:</span> {status}</h2>
                    </div>
                    <div>
                        <h2 ><span className="font-bold">Area:</span> {area}</h2>
                    </div>
                    <div>
                        <h2 ><span className="font-bold">Price:</span> {price}</h2>
                    </div>

                </div>
                <div>
                    <p className="font-bold">Facilities:</p>
                    {facilities.map((facility, idx) => <li key={idx}>{facility}</li>)}
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/property/${id}`}>
                        <button className="btn btn-primary btn-outline">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProperty;
