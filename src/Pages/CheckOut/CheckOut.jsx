import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Order Confirmed')
                }
            })
    }

    return (
        <div className="mt-5">
            <h2 className="text-center text-3xl font-bold">{title}</h2>
            <div className="hero">
                <div className="hero-content w-full">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl flex-1">
                        <form onSubmit={handleBookService} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" name='name' className="input input-bordered" defaultValue={user?.displayName} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" placeholder="Your email" name='date' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" name='email' className="input input-bordered" defaultValue={user?.email} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Amount</span>
                                    </label>
                                    <input type="number" defaultValue={price} name='price' className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center w-full">Confirm Order</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;