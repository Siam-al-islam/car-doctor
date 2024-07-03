import React from 'react';

const BookingRow = ({ booking }) => {
    const { customerName, email, date, service, price, img } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;