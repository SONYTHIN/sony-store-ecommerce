import React from 'react'
import Card from '../components/Card'
import useGetAllProduct from '../hooks/useGetAllProduct';


function Products() {
  const {data, isLoading} = useGetAllProduct()

  return (
    <div className='my-10 max-w-[90%] lg:max-w-5xl mx-auto'>
        <h1 className='uppercase text-center text-3xl'> All Products </h1>

        {
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
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-5'>
              {
                data?.map(item => (
                <Card 
                  key={item.id} data={item}/>
              ))}
          </div>
        )}
    </div>
  );
}

export default Products