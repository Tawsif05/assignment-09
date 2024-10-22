import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl">Opps 404 Not found</h1>
            <Link to="/"><button className="btn btn-primary btn-outline mt-5">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;

