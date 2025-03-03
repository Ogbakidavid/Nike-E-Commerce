import { arrowRight } from '../assets/icons';
import Button from './Button';
import { shoes, statistics } from './constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from './ShoeCard';
import { useState } from 'react';


const Home = () => {

    const [bigShoeImg, setBigShoeImg] = 
    useState(bigShoe1);

  return (
    <section className='home' 
    id='home'>
      <div className='relative lg:w-2/5 flex flex-col justify-center items-start w-full
      max-lg:pl-8 lg:pl-10 pt-28'>
        <p className='text-coral text-xl font-medium font-tertiary'>Our Summer Collections</p>
        <h1 className='font-secondary uppercase font-extrabold text-[50px] leading-normal
        mt-10 max-sm:text-[30px] max-sm:leading-[52px]'>
          <span className='lg:bg-white lg:whitespace-nowrap relative z-10 py-8 pr-5 max-lg:static'>The New Arrival</span>
          <br />
          <span className='text-coral inline-block mt-3 max-sm:mt-0'>Nike</span> shoes
        </h1>
        <p className='text-slate-gray font-medium mt-6 mb-14 leading-8 text-lg sm:max-w-sm capitalize'>
          Discover stylish Nike arrivals, quality comfort,
          and innovation for your active life
        </p>
        <Button label={"Show now"}
        iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-tertiary font-bold'>{stat.value}</p>
              <p className='text-slate-gray font-medium leading-7'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

        <div className='relative flex 
        justify-center items-center lg:min-h-screen bg-primary
        bg-cover bg-center max-lg:py-40 bg-[url(./assets/images/collection-background.svg)]'>
        <img src={bigShoeImg} 
        alt="shoe collection" 
        width={600}
        height={500}
        className='object-contain z-10 relative max-lg:z-0'
        />

        <div className='flex sm:gap-6 gap-4 absolute
        max-sm:-bottom-[5%] -bottom-[12%] max-sm:left-[5%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg (shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
