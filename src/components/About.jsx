import React from 'react';

const About = () => {
  return (
    <div name='about' id="aboutDiv" className='w-full  h-screen bg-[#0a192f] text-gray-300 md:-[200px] md:mt-[200px]'>
      <div className='flex ma flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p id="about" className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Обо мне
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' sm:text-right text-4xl font-bold'>
              <p id="hi" >"Пиветствую! Меня зовут Кирилл Логунов. На этом сайте я хочу показать вам некоторые свои работы."</p>
            </div>
            <div>
              <p id="self-description">Я люблю создавать сайты, которые помогают качественно улучшить опыт взаимодействия клиентов с бизнесом. Я специализируюсь на создании сайтов любой направленности. От индивидуальных одностраничных визиток до крупных нагруженных сайтов с богатым функционалом. Пролистав этот сайт немного ниже вы сможете ознакомиться с примерами моих работ.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;