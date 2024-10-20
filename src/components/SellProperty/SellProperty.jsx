import { useEffect, useState } from "react";
import SingleProperty from "../SingleProperty/SingleProperty";


const SellProperty = () => {
    const [property, setProperty] = useState([]);
    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setProperty(data)
            )
    }, [])
    return (
        <section className="mt-10">
            <div className='text-center space-y-4'>
                <h4 className='text-xl text-violet-400'>Featured Listing</h4>
                <h1 className='text-3xl font-bold'>Available Property</h1>
            </div>
            <div className="grid grid-cols-3 mx-auto items-center w-[70%] gap-8 mt-8">
                {
                    property.map(property => <SingleProperty key={property.id} property={property}></SingleProperty>)
                }
            </div>
        </section>
    );
};

export default SellProperty;