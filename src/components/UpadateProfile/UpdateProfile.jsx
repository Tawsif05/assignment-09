import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const {displayName, photoURL, email} = user;
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Helmet>
                <title>CityHaven | Update Profile</title>
            </Helmet>
            <div className="border border-violet-400 rounded-2xl flex flex-col gap-5 justify-center w-[50%] items-center h-[50%]">
                <div><h1>Name: {displayName}</h1></div>
                <div><h1>Email: {email}</h1></div>
                <div><h1>PhotoUrl: {photoURL}</h1></div>
                
            </div>
        </div>
    );
};

export default UpdateProfile;