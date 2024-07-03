import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                if (user.accessToken) {
                    navigate(location.state ? location.state : "/")
                    toast.success("Logged In")
                }
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                toast.error('Wrong email or password')
            })
    }

    return (
        <div className="hero mt-14">
            <div className="hero-content flex-col lg:flex-row lg:w-3/4">
                <div className="flex-1">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center w-full">Login</button>
                        </div>
                        <h3 className='mt-3'>New to car doctor? <Link to="/signup" className=' text-orange-600 font-semibold'>Sign Up</Link></h3>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;