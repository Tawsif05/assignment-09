import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-100 mt-[5%]">
            <Helmet>
                <title>CityHaven | Contact</title>
            </Helmet>
            <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>
                <p className="text-center text-gray-600 mb-12">
                    We would love to hear from you! Please fill out the form below or send us an email at
                    <a href="mailto:info@example.com" className="text-blue-500"> info@example.com</a>.
                </p>
                {/* Contact form goes here */}
                <form className="flex flex-col gap-5">
                    <label className="input input-bordered flex items-center">
                        
                        <input name="Name" type="text" className="grow" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center ">
                        
                        <input name="email" type="email" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-primary btn-outline">Send Us</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;