import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!name || !photoUrl) {
            toast.error("Name and Photo URL cannot be empty!");
            return;
        }

        // Update the user's profile in Firebase Auth
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl,
        })
        .then(() => {
            // Update the user state in the AuthContext
            setUser({
                ...user,
                displayName: name,
                photoURL: photoUrl,
            });
            toast.success("Profile updated successfully!");
        })
        .catch((error) => {
            toast.error("Error updating profile: " + error.message);
        });
    };

    return (
        <div className="flex flex-col justify-center items-center my-[5%] sm:mt-[15%] lg:mt-[5%]">
            <Helmet>
                <title>CityHaven | Update Profile</title>
            </Helmet>
            <div className="border border-violet-400 rounded-2xl flex flex-col gap-5 justify-center w-[90%] md:w-[50%] items-center p-5">
                <h1 className="text-xl font-bold">Update Profile</h1>

                <form className="flex flex-col gap-4 w-full" onSubmit={handleUpdateProfile}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-violet-500 text-white p-2 rounded-md"
                    >
                        Update Profile
                    </button>
                </form>

                <div className="mt-5 text-center w-full">
                    <h2 className="text-lg font-semibold">Current Profile</h2>
                    <p><strong>Name:</strong> {user.displayName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <div className="break-words w-full"><strong>Photo URL:</strong> {user.photoURL}</div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
