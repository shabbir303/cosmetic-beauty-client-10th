

const NewArrivals = () => {
    return (
        <div className="">
            <h1 className="text-[40px] font-[500] mb-[50px] text-center">NEW ARRIVALS</h1>
            <div className="flex">
                <div>
                <div className="flex">
                <img src="https://i.ibb.co/C8LBPWW/makeup-products-cosmetic-bag-macaroons.jpg" alt="" className="w-[50%]" />
                <h1 className="bg-gradient-to-r from-slate-300 to-slate-200 uppercase w-[50%] text-center text-[30px] font-[500] items-center pt-[120px]">Women's <br /><span className="text-[45px] font-[600] text-[#ffc229]">Stylish Products</span></h1>
                </div>
                <div className="flex">
                    <h1 className="bg-[] uppercase w-[50%] text-center text-[30px] font-[500] items-center mt-[120px]">Men's <br /><span className="text-[45px] font-[600] text-[#ffc229] ">Collection</span></h1>
                    <img src="https://i.ibb.co/zP06Yj4/4361807.jpg" alt="" className="w-[50%]"/>
                </div>
                </div>
                <img src="https://i.ibb.co/z8fVyhf/28cdf6c2755c7d915fa4618147e46148.jpg" alt="" className="w-[35%] h-[782px]" />
            
            </div>
            <div className="flex">
                <img src="https://i.ibb.co/Pwy2C1z/perfume-n.jpg" alt="" className="w-[34%]" />
                <h1 className="bg-gradient-to-r from-slate-300 to-blue-200 w-[33%] text-center text-[30px] font-[500] items-center pt-[120px] uppercase">Men's <br /><span className="text-[45px] font-[600] text-[#ffc229]">Perfume</span></h1>
                <h1 className="bg-gradient-to-r from-slate-300 to-gray-400 w-[33%] text-center text-[30px] font-[500] items-center pt-[120px] uppercase">collection <br /><span  className="text-[45px] font-[600] text-[#ffc229]">Jewlery</span><br />
                  for girl
                </h1>
            </div>
        </div>
    );
};

export default NewArrivals;