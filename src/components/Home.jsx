import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
const Home = () => {


  return (
    <div className='w-full h-screen  bg-[#0a192f]'>
       {/* Container */}
       <div name="home" id="home11" className='max-w-[1000px] md:h-[115%] mx-auto px-8 flex flex-col justify-center h-full'>
        <p id="home1" className='text-pink-600'>Приветствую! Меня зовут</p>
        <h1 id="name" className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Кирилл Логунов</h1>
        <h2 id="occupation" className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Я Front End разработчик.</h2>
        <p  id="description"className='text-[#8892b0] py-4 max-w-[700px]'>Я специализируюсь на разработке сайтов со стороны клиента. На данный момент открыт к предложениям о сотрудничестве.
           </p>
           <div>
           <Link to='work' smooth={true} duration={500}><button className='text-white z-0 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              <p id="myProjects">
             
            Мои работы
         </p>
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 hover:' />
                </span> </button> </Link>
           </div>
       </div>
    </div>
  )
}

export default Home
