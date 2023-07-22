const ProductList = () => {
    return (
        <div className="container z-10 mx-auto my-12 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">

                <div  className="container col-span-2">
                    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">

                        <div className="card card-side bg-white shadow-xl">
                            <figure><img className="w-40" src="https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg" alt="Movie"/></figure>
                            <div className="card-body">
                                <h6 className="text-black">iPhone 14 Pro Max iOS 16 6.7 inches Super Retina</h6>
                                <h3 className="text-xl font-bold text-gray-700">Price: $1,000</h3>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary btn-outline">Remove</button>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>

                <div className="card shadow-xl h-44 w-100 bg-white">
                    <div className="card-body">
                        <h2 className="card-title">Total Item: 10</h2>
                        <h6>Total Price: $1,000</h6>
                        <div className="card-actions">
                            <button className="btn btn-sm my-4 btn-primary btn-outline">Check out</button>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    );
};
export default ProductList;