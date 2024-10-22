import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosKey } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaImage } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { registerUser, setError, setUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.Name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoUrl = e.target.photoUrl.value;

        if (password.length < 6) {
            toast.error("Password must be 6 characters or longer");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
            toast.error("Password must have one uppercase and one lowercase letter");
            return;
        }

        setError('');
        registerUser(email, password)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photoUrl,
                })
                .then(() => {
                    setUser({
                        ...res.user,
                        displayName: name,
                        photoURL: photoUrl,
                    })
                    toast.success("Registration successful!");
                })
                .catch((error) => {
                    toast.error(error.message);
                });
                
                console.log(res.user);
            })
            .catch((error) => {
                toast.error(error.message);
            });
            e.target.reset();
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <Helmet>
                <title>CityHaven | Register</title>
            </Helmet>
            <div className="border border-violet-400 rounded-xl max-w-[50%] p-10 space-y-4">
                <form onSubmit={handleRegister} className="space-y-5">
                    <label className="input input-bordered flex items-center gap-2">
                        <CiUser />
                        <input name="Name" type="text" className="grow" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input name="email" type="email" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <FaImage />
                        <input name="photoUrl" type="text" className="grow" placeholder="Photo Url" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 relative">
                        <IoIosKey />
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="grow"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 text-xl"
                        >
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </button>
                    </label>
                    <ToastContainer />
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600">
                            Log in Now
                        </Link>
                    </p>
                    <button className="btn btn-success w-full btn-outline text-white" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
