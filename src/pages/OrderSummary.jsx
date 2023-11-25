import React from 'react';

const OrderSummary = () => {
  return (
    <div>
      <div className='border h-64 w-[500px] mt-12 mb-20 ml-40'>
         <h1 className='text-center'>ORDER SUMMARY</h1>
    <div className='flex justify-between ml-3 mr-3 mt-3'>
       <h1>Subtotal</h1>
       <p>Ghc20</p>
    </div>
    <div className='flex gap-5 justify-between ml-3 mr-3 mt-5'>
       <h1>Delivery Fees</h1>
       <p>Ghc20</p>
    </div> 
    <div className='justify-between ml-3 mr-3 mt-5'>
       <h1>Cuopon/Discount</h1>
       <a className='text-red-600'>Enter a coupon code</a>
    </div>
    <div className='flex gap-5 justify-between ml-3 mr-3 mt-5'>
       <h1>Total</h1>
       <p>Ghc100</p>
    </div>
   <div className='flex justify-center items-center'>
   <button className=' rounded-none 
    bg-green-600 
   text-white 
   border-green-600
    w-[500px]  mt-7'>Proceed to checkout</button>
   </div>   
</div>
    </div>
  )
}

export default OrderSummary