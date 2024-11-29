import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
    return (
        <>
            <div className="md:p-20 p-5">{/* <<= main container*/}

    <div className="md:flex items-center">{/* <= parent container*/}

<div>{/* <= text container*/}
                {/* brand logo */}
    <div className="flex items-center gap-2 text-2xl my-5">
        <img src="/public/assets/logo.png" className="w-8 h-8"/>
        <h1 className="font-bold">Wildearth Escapes</h1>
    </div>

    <div>
        <p className="lg:w-3/4">
        Explore the World, Sustainably.
        Discover breathtaking eco-adventures, from mountain treks to ocean dives, that inspire and protect our planet. Join our community to access expert insights, personalized recommendations, and unforgettable experiences. Together, let&apos;s embark on a journey that leaves only footprints.
        </p>

        <button className="flex items-center font-semibold pt-3
         border border-b border-transparent
         hover:border-b hover:border-b-black">
            contact <MdArrowOutward />
        </button>
    </div>
</div>

<div>{/* <= image container*/}
    <div className="">
        <img src="/public/assets/place-1.png"/>
    </div>
</div>



    </div>{/* <= parent container end*/}

            </div>{/* <<= main container end*/}
        </>
    );
};

export default Footer;