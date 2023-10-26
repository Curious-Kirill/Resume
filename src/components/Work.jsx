import React from 'react';
import ai from '../assets/ai.png';
import Burak from '../assets/Burak.png';
import Restik from '../assets/restaurant.png';

const Work = () => {
  return (
    <div name="work" className='w-full pt-[400px] md:h-screen text-gray-300  bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p id="work" className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
            <p id="checkMyWork"className='py-6'>// Check out some of my recent work</p>
          </div>

          <div 
           className='grid sm:grid-cols-2  text-center md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${Restik})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 '>
              
                  <span className='text-2xl font-bold text-white tracking-wider'>
                       Сайт фелиала сети ресторанов <br/>&nbsp; Skully
                  </span>
                  <div className='pt-8 text-center '>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Demo</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Code</button>
                    </a>
                  </div>
              
              </div>
            </div>

             <div style={{backgroundImage:`url(${ai})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

              {/* Hover Effects */}
              <div className='opacity-0 text-center group-hover:opacity-100 '>
              
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Новостной сайт <br/>&nbsp; про ChatGPT
                  </span>
                  <div className='pt-8 text-center '>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть Сайт</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
                    </a>
                  </div>
              
              </div>
            </div>

            <div style={{backgroundImage:`url(${Burak})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

{/* Hover Effects */}
<div className='opacity-0 text-center group-hover:opacity-100 '>

    <span className='text-xl  font-bold text-white tracking-wider'>
    &nbsp;&nbsp;&nbsp;Cайт центра <br/> дошкольной подготовки
    </span>
    <div className='pt-8 text-center '>
      <a href="https://burakov-club71.ru/">
        <button className='text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-lg' > Посмотреть сайт</button>
      </a>
      <a href="/">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
      </a>
    </div>
    

</div>
</div>
<div style={{backgroundImage:`url(${ai})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100 '>

    <span className='text-2xl font-bold text-white tracking-wider'>
        Новостной сайт <br/>&nbsp; про ChatGPT
    </span>
    <div className='pt-8 text-center '>
      <a href="/">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Demo</button>
      </a>
      <a href="/">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Code</button>
      </a>
    </div>

</div>
</div>

          </div>

        </div>
    </div>
  )
}

export default Work
