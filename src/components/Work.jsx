import React from 'react';
import ai from '../assets/ai.png';
import Burak from '../assets/Burak.png';
import Restik from '../assets/restaurant.png';
import robot from '../assets/robot.png'
import rvr from '../assets/RvR.png'
import dream from '../assets/DreamSchool.png'
const Work = () => {
  return (
    <div name="work" id='workDiv' className='w-full  text-gray-300  bg-[#0a192f] '>
        <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p id="work" className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Портфолио</p>
            {/*  eslint-disable-next-line */}
            <p id="checkMyWork"className='py-6'>// Здесь вы можете ознакомиться с примерами моего кода</p>
          </div>

          <div 
           className='grid sm:grid-cols-2  text-center md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${Restik})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 '>
              
                  <span className='text-2xl font-bold text-white tracking-wider'>
                       Сайт фелиала сети ресторанов  Skully
                  </span>
                  <div className='pt-8 text-center '>
                    <a href="https://polite-biscochitos-ee37db.netlify.app/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Посмотреть сайт</button>
                    </a>
                    <a href="https://github.com/Curious-Kirill/Skully-Restaurant.git">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Посмотреть код</button>
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
      <a href="https://github.com/Curious-Kirill/Burakov-School.git">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
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
                    <a href="https://wonderful-tartufo-35622e.netlify.app/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть Сайт</button>
                    </a>
                    <a href="https://github.com/Curious-Kirill/ChatGPT.git">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
                    </a>
                  </div>
              
              </div>
            </div>

           
<div style={{backgroundImage:`url(${robot})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100 '>

    <span className='text-2xl font-bold text-white tracking-wider'>
        Сайт приложения банка Lloyds
    </span>
    <div className='pt-8 text-center '>
      <a href="https://jolly-babka-ad0ae6.netlify.app/">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть сайт</button>
      </a>
      <a href="https://github.com/Curious-Kirill/NewBanking.git">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
      </a>
    </div>

</div>
</div>


<div style={{backgroundImage:`url(${dream})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100 '>

    <span className='text-2xl font-bold text-white tracking-wider'>
        Сайт частной школы <br/>"Мечта"
    </span>
    <div className='pt-8 text-center '>
      <a href="https://exquisite-shortbread-b8b83c.netlify.app/">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть сайт</button>
      </a>
      <a href="https://github.com/Curious-Kirill/NewBanking.git">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
      </a>
    </div>

</div>

</div>
<div style={{backgroundImage:`url(${rvr})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100 '>

    <span className='text-2xl font-bold text-white tracking-wider'>
        Сайт производителя систем автозапуска
    </span>
    <div className='pt-8 text-center '>
      <a href="https://jolly-babka-ad0ae6.netlify.app/">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть сайт</button>
      </a>
      <a href="https://github.com/Curious-Kirill/NewBanking.git">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' > Посмотреть код</button>
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
