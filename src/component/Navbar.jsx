import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {
    return (
        <>
            <div className="p-5 flex justify-between">

                
{/* brand logo */}
    <div>
        <h1 className="font-bold">Wildearth Escapes</h1>
    </div>


{/* page swap button*/}
    <div className="flex gap-4">
        
        <button className="btn">
            Home
        </button>

        <button className="btn">
            5 days
        </button>

        <button className="btn">
            7 days
        </button>

    </div>


{/* User */}
    <div>
<div className="flex items-center gap-5">
<p>User name</p>
<FaRegCircleUser /> 
</div>
    </div>
            </div>
        </>
    );
};

export default Navbar;