

const AddProduct = () => {
    const handleUser = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const describe = form.describe.value;
        const rating = form.rating.value;
        console.log(image, brand, name, price, type, describe, rating);

        const addProduct = { image, name, brand, type, price, describe, rating };
        console.log(addProduct);

        
        fetch('http://localhost:5000/beauties',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(addProduct),
    })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
    }
    return (

        <div className=" h-screen bg-[url('https://i.ibb.co/RCnhxKR/441192-gorod-plitka-1680x1050-www-Gde-Fon-com-jpg.jpg')] bg-cover object-cover w-full  ">
            <div className="pt-[170px] flex w-[90%] justify-center items-center mx-auto gap-[50px] ">
                <img src="https://i.ibb.co/yFwBb7m/text.png" alt="" className="" />
                <form onSubmit={handleUser}
                    className="bg-[#2d8dba] bg-opacity-30  rounded-2xl shadow-2xl shadow-cyan/80  w-[800px] flex flex-col justify-center items-center mx-auto py-[50px]  ">
                    <div className="w-[500px] flex flex-col gap-[30px]">
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="text-[#5f414d] font-[600]">
                                IMAGE
                            </label>
                            <input
                                name='image'
                                type='text'
                                required
                                className=" h-full w-[800px] rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="image_url "
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="text-[#5f414d] font-[600]">
                                NAME
                            </label>
                            <input
                                type='text'
                                name='name'
                                required
                                className=" h-full w-[800px] rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter your name here"
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#5f414d] font-[600]">
                                Brand
                            </label>
                            <input
                                type='text'
                                name='brand'
                                required
                                className=" h-full w-[800px] rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter brand name here "
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#5f414d] font-[600]">
                                Type
                            </label>
                            <input
                                type='text'
                                name='type'
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="please enter your product type "
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#5f414d] font-[600]">
                                Price
                            </label>
                            <input
                                type='text'
                                name='price'
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter your sufficient amount"
                            />
                        </div>
                        <div className=" h-20 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#5f414d] font-[600]">
                                Short description
                            </label>
                            <input
                                type='text'
                                name='describe'
                                required
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter short description about your product"
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#5f414d] font-[600]">
                                Rating
                            </label>
                            <input
                                type='text'
                                name='rating'
                                required
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="rating here"
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">

                            <input
                                type='submit'


                                className=" h-full w-full rounded-[7px]    px-3 py-2.5 font-sans text-sm  text-blue-gray-700 transition-all bg-[#b02085] shadow-xl shadow-[#b02085]/50 text-white font-[600] "
                                value="ADD YOUR PRODUCT HERE"
                            />
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;