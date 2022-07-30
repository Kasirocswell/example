import React from 'react'
import img1 from './images/image-product-mobile.jpg'
import img2 from './images/image-product-desktop.jpg'

const Product = () => {
  return (
    <div className='w-[100%] h-screen pt-8 flex'>
        <div className='flex bg-white w-[90%] h-[95%] ml-[18px] rounded-xl flex-col overflow-hidden lg:flex-row lg:w-[500px] lg:h-[350px] lg:mx-auto lg:my-auto'>
            <img id='img1' src={img1} className='w-full h-[40%] lg:invisible lg:ml-[-217px]'></img>
            <img id='img2' src={img2} className='invisible mt-[-525px] lg:mt-[0px] lg:visible last:lg:w-[50%] lg:h-full'></img>
            <div className='lg:flex-col'>
                <p className='font-perfum text-xl tracking-widest pt-4 pl-4 text-[#6C7289] lg:text-xs'>PERFUME</p>
                <p className='font-body text-[40px] mx-4 leading-9 pb-4 pl-2 pt-4 lg:text-[40px]'>Gabrielle Essence Eau De Parfum</p>
                <p className='font-body pl-2 text-[15px] mx-4 text-[#6C7289] lg:text-[13px] lg:mr-6'>A floral, solar, and voluptuous interpretation composed by Oliver Polge, Perfume-Creator for the House of CHANEL</p>
                <div className='flex flex-row pt-4 w-[93%] pb-4 pl-4 pr-4 items-center'>
                    <p className='font-body pl-2 text-4xl font-black text-[#3C8067] lg:text-xl'>$149.99</p><p className='font-body text-[#6C7289] ml-2 text-lg line-through lg:text-sm'>$169.99</p>
                </div>
                <button className='flex flex-row align-middle items-center justify-center h-[50px] w-[85%] bg-[#3C8067] rounded-xl mb-4 ml-[25px] font-black text-white' type='button'>
                <svg className='mr-2' width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>   Add to Cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default Product