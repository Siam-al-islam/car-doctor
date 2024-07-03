import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-5">Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <h3>Select</h3>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;