import img from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className="hero mt-14">
            <div className="hero-content flex-col lg:flex-row gap-6">
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;