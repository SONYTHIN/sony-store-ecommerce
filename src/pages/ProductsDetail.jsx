import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

function ProductsDetail() {
  const route = useParams();
  const {data, isLoading} = useGetOneProduct(route.id) //call product
  
  return (
    <>

      {//Loading page
        isLoading == true && (
          <div className='flex items-center justify-center my-10'>
            <div className='flex items-center gap-1'>
              <div className='border-4 border-gray-300 border-t-gray-600 w-8 h-8 rounded-full animate-spin'>
              </div>
            </div>
          </div>
        )
      }
      {
        isLoading == false && (
          <div>
            <div className="bg-gray-100 w-full py-1">
              <div className="max-w-[90%] lg:max-w-5xl mx-auto font-jost flex items-center gap-1 text-sm">
                <Link to="/"> Home </Link>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>

                <Link to="/products"> Products </Link>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span className="font-semibold"> {data.title} </span>
              </div>
            </div>

            <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                <div className="p-1 border border-gray-300">
                  <img
                    src={data.image}
                    alt=""
                    className=""
                  />
                </div>

                <div className="p-1">
                  <h3 className="text-lg uppercase"> {data.category} </h3>
                  <h1 className="font-bold text-xl"> {data.title} </h1>
                  <h1 className="text-red-500 font-bold text-2xl mt-2">
                    ${data.price}
                  </h1>

                  <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-4 my-8">
                    <div className="border border-gray-300 w-32 px-8 py-2 flex items-center justify-center rounded-lg">
                      <button className="hover:bg-indigo-500 px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 hover:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </button>

                      <button className="text-red-600 mx-3"> 1 </button>

                      <button className="hover:bg-indigo-500 px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 hover:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>

                    <button className="bg-primary text-white px-8 py-2 rounded-lg">
                      {" "}
                      Add to cart{" "}
                    </button>
                    <button className="bg-yellow-600 text-white px-8 py-2 rounded-lg hover:bg-yellow-500">
                      {" "}
                      Pay now{" "}
                    </button>
                  </div>
                  <hr />
                  <p className="mt-4 text-gray-600">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  );
}

export default ProductsDetail;
