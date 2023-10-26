import { useContext, useEffect } from "react";
import { Authcontext } from "./AuthProvider/AuthProvider";
import { useState } from "react";



const Cart = () => {
    const { user } = useContext(Authcontext);

    const [carts, setCarts] = useState([])
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCarts(data);
            })

    },[user?.email])

    console.log(carts);
    return (
        <div className="mt-[150px] w-[80%] mx-auto">
            {
              carts.map(everyUser => <div key={everyUser._id} className="flex justify-between border-b-stone-600 border-[1px] p-[20px]">
                   <div className="flex  gap-[10px] text-[25px] font-[600] ">
                   <h1>{everyUser.brand} </h1>
                    <h1 className="text-orange-600 ">{everyUser.type} </h1>
                   </div>
                   <button className="flex btn bg-red-300  p-[10px]">X</button>
                 </div>)
            }
        </div>
    );
};

export default Cart;