import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosKey } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { logIn, googleLogin, githubLogin, setUser, user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    
    const location = useLocation();
    const navigate = useNavigate();

    
    const from = location.state?.from?.pathname || "/";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (user) {
            // Redirect to the intended page or home
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then(() => {
                console.log("Login successful");
                e.target.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                console.log(res.user);
                setUser(res.user);
                navigate(from, { replace: true });
            })
            .catch(() => console.log("Error with Google login"));
    };

    const handleGitHubLogin = () => {
        githubLogin()
            .then(() => {
                console.log("GitHub login successful");
                navigate(from, { replace: true });
            })
            .catch(() => console.log("Error with GitHub login"));
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <Helmet>
                <title>CityHaven | Login</title>
            </Helmet>
            <div className="border border-violet-400 rounded-xl max-w-[50%] p-10 space-y-4">
                <form onSubmit={handleLogin} className="space-y-5">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                            />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                            />
                        </svg>
                        <input name="email" type="text" className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 relative">
                        <IoIosKey />
                        <input
                            type={showPassword ? "text" : "password"}
                            className="grow"
                            placeholder="Password"
                            name="password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 text-xl"
                        >
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </button>
                    </label>

                    <p>
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-600">
                            Register Now
                        </Link>
                    </p>
                    <button className="btn btn-success w-full btn-outline text-white" type="submit">
                        Log In
                    </button>
                </form>

                <button onClick={handleGoogleLogin} className="btn btn-warning btn-outline w-full">
                    <FcGoogle className="text-xl mr-2" />
                    Log in with Google
                </button>
                <button onClick={handleGitHubLogin} className="btn btn-outline w-full">
                    <BsGithub className="text-xl mr-2" />
                    Log in with GitHub
                </button>
            </div>
        </div>
    );
};

export default Login;
