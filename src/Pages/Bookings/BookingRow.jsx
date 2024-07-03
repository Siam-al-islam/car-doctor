import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, date, service, price, img, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => { handleDelete(_id) }} className='btn bg-red-400 text-white'>remove</button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        {img && <img
                            src={img} />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {status === "confirm" ? <span className='font-semibold text-green-600'>Confirmed</span> : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm Now</button>}
            </th>
        </tr >
    );
};

export default BookingRow;