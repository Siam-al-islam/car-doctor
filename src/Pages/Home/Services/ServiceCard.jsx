import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
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
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;