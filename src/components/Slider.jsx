import React,{useState} from 'react'
import { BsChevronCompactLeft,  BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const sliders = [
       
    // {
    //   url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
    //   title: "Fresh Pizza going for $45.",
    //     btn: "Shop Now"
    //   },
    //   {
    //     url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
    //     title: "Fresh Pizza going for $45.",
    //     btn: "Shop Now"
    //   },
      {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        title: "Hot tomato rice going for $45.",
        btn: "Shop Now"
      },
      {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        title: "Hot tomato rice going for $45.",
        btn: "Shop Now"
      },
      {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        title: "Hot tomato rice going for $45.",
        btn: "Shop Now"
      },
  
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
     
       const prevSlider = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
       }  
       
       const nextSlider = ()=>{
        const isLastSlide  = currentIndex === sliders.length -1
        const newIndex = isLastSlide  ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
       }

       const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
       }

  return (
    <div className='max-w-[3540px] h-[550px] w-full m-auto py-2 relative group -mt-4'>
        <div className='w-full h-full bg-center bg-cover duration-300 relative '
             style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        >
          <div className='flex justify-center items-center flex-col m-5 absolute left-80 mt-52'>
          <h1 className='text-white font-bold text-5xl m-5'>{sliders[currentIndex]?.title}</h1>
          <button className='text-white bg-green-500 border-green-500 h-10'>{sliders[currentIndex]?.btn}</button>
          </div>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-green-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-green-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={ nextSlider}/>
        </div>
        <div  className='flex top-4 justify-center py-2'>
             {
                sliders.map((sliderItems, slideIndex)=>(
                   <div 
                    key={slideIndex}
                    onClick={()=>moveToNextSlide (slideIndex)}
                   className='text-2xl cursor-pointer'>
                    <RxDotFilled className='mt-2 flex justify-center items-center'/>
                   </div>
                ))
             }
        </div>
    </div>
  )
}

export default Featured