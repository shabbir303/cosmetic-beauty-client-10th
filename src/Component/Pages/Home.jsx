import BrandProducts from "./BrandProducts";
import Footer from "./Footer";
import Mybrands from "./Mybrands";
import NewArrivals from "./NewArrivals";
// import "./Swiper.css";


const Home = () => {
    return (
        <div className="">
            <div className=" bg-zinc-800 w-[100%] h-[400px]  lg:h-screen relative ">
                <img src="https://i.ibb.co/4TmmCMn/007-marketing-or-sales.jpg" alt="" className="w-full h-full mix-blend-overlay" />
                
                <div className="top-1/3 absolute left-1/4 ">
                <h1 className="text-[25px] font-[500] text-white text-center">NATURAL</h1>
                <h1 className="flex text-[20px] lg:text-[60px] font-[800] text-white bg-black px-[30px] py-[10px] shadow-xl shadow-cyan-500/90"><img src="https://i.ibb.co/y8JT37P/ede9e12f02ea32b3c13dc5d599204931-r.png" alt="" className="h-[10px]  lg:h-[100px] w-[10px] lg:w-full flex items-center justify-center" /> COSMETICS</h1>
                <div className="flex gap-[20px] justify-center items-center mt-[30px] ">
                    <h1 className=" text-[15px] lg:text-[40px] font-[600] text-white  uppercase">Save Up to</h1>
                    <h1 className="text-[25px] lg:text-[260px] font-poiretOne font-[600] text-[#ffc229] ">70%</h1>
                </div>
                </div>
            </div>
            
            
            <div className="mt-[50px] lg:mt-[200px]">
                <BrandProducts></BrandProducts>
            </div>

            <div className="mt-[200px] ">
                <Mybrands></Mybrands>
            </div>
            <div className="my-[150px]" >
                <NewArrivals></NewArrivals>
            </div>


            <div className="mt-[50px] bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;