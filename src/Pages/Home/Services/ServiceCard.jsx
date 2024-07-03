import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card border border-[#cf7f0855] p-5">
            <figure className="">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='font-semibold text-orange-500 text-xl mt-4'>$ {price}</p>
                <div className="mt-5">
                    <Link to={`/checkout/${_id}`}><button className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center btn-wide">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;