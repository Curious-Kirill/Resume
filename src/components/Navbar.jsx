import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTelegram,
} from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

export var language = "Ru"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [lang, setLang] = useState(true);
  const handleLang = () => {
    setLang(!lang);
    console.log(lang);
    
    if(!lang){
      language = "Ru"
      document.getElementById('skills').innerHTML= "Навыки"
      document.getElementById('skills2').innerHTML= "// Технологии с которыми я работаю"
      document.getElementById('home1').innerHTML= "Приветствую! Меня зовут"
      document.getElementById('name').innerHTML= "Кирилл Логунов"
      document.getElementById('occupation').innerHTML= "Я Front End разработчик"
      document.getElementById('description').innerHTML= "Я специализируюсь на разработке сайтов со стороны клиента. На данный момент открыт к предложениям о сотрудничестве. "
      document.getElementById('myProjects').innerHTML= "Мои проекты "
      document.getElementById('work').innerHTML= "Мои проекты"
      document.getElementById('checkMyWork').innerHTML= "// Здесь вы можете ознакомиться с примерами моего кода "
      document.getElementById('hi').innerHTML= "Приветствую! Меня зовут Кирилл Логунов. На этом сайте я хочу показать вам некоторые свои работы."
      document.getElementById('about').innerHTML= "Обо мне"
      document.getElementById('self-description').innerHTML= "Кирилл Логунов"
      document.getElementById('self-description').innerHTML= "Я люблю создавать сайты, которые помогают качественно улучшить опыт взаимодействия клиентов с бизнесом. Я специализируюсь на создании сайтов любой направленности. От индивидуальных одностраничных визиток до крупных нагруженных сайтов с богатым функционалом. Пролистав этот сайт немного ниже вы сможете ознакомиться с примерами моих работ."
      document.getElementById('checkMyCerf').innerHTML= "Здесь вы можете ознакомиться с последними пройдеными мною курсами"
      document.getElementById('contact').innerHTML= "Связаться со мной"
      document.getElementById('email').innerHTML= "// Вы можете заполнить форму ниже или написать мне на email - kirill.log2020@gmail.com"
      document.getElementById('collab').innerHTML= "Отправить письмо"
      document.getElementById('certificates').innerHTML= "Мои сертификаты"
      document.getElementById('mobileHome').innerHTML= "Главная"
      document.getElementById('mobileAbout').innerHTML= "Обо мне"
      document.getElementById('mobileSkills').innerHTML= "Навыки"
      document.getElementById('mobileWork').innerHTML= "Портфолио"
      document.getElementById('mobileContact').innerHTML= "Контакты"
    
    
    }else{
      language = "En"
      document.getElementById('skills').innerHTML= "Skills"
      document.getElementById('name').innerHTML= "Kirill Logunov"
      document.getElementById('skills2').innerHTML= "// These are the technologies I've worked with"
      document.getElementById('home1').innerHTML= "Hi, my Name is"
      document.getElementById('occupation').innerHTML= "I'm a Front End Developer."
      document.getElementById('description').innerHTML= "I'm a Frontend Developer specializing in building and occasionally designing exeptional digital experiences. Currently available for hiring "
      document.getElementById('myProjects').innerHTML= "View Work"
      document.getElementById('hi').innerHTML= "Hi. I'm Kirill Logunov, nice to see you. Let's take a closer look at my portfolio"
      document.getElementById('self-description').innerHTML= "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. Below this section you will see my skiils and what I can do using them."
      document.getElementById('about').innerHTML= "About"
      document.getElementById('checkMyCerf').innerHTML=  "There are the last certificates that I've earned"
      document.getElementById('certificates').innerHTML= "Certificates"
      document.getElementById('checkMyWork').innerHTML= "// Check out some of my recent work"
      document.getElementById('work').innerHTML= "Work"
      document.getElementById('email').innerHTML= "// Submit the form below or shoot me an email - kirill.log2020@gmail.com"
      document.getElementById('contact').innerHTML= "Contact"
      document.getElementById('collab').innerHTML= "Let's Collaborate"
      document.getElementById('mobileHome').innerHTML= "Home"
      document.getElementById('mobileAbout').innerHTML= "About"
      document.getElementById('mobileSkills').innerHTML= "Skills"
      document.getElementById('mobileWork').innerHTML= "Work"
      document.getElementById('mobileContact').innerHTML= "Contact"
    }
    console.log(language);
      
    
  }
    

  return (
    <div  className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='relative left-[20px]'>

      <label className="switch relative border-2 solid 1px white hover:bg-pink-600 hover:border-pink-600">
          <input  type="checkbox"></input>
          <span onClick={handleLang} className="slider"> RU EN </span>
        </label>
     
       

        

      </div>
      
     
      
      {/* menu */}
      <ul className='hidden md:flex'>

      

        <li id="home">
          <Link to='home11' smooth={true} duration={500}>
            {lang?'Главная':'Home'}
          </Link>
        </li>
        
        <li>
          <Link to='aboutDiv' smooth={true} duration={500}>
          {lang?'Обо мне':'About'}
          </Link>
        </li>
        <li>
          <Link to='skillsDiv' smooth={true} duration={500}>
          {lang?'Навыки':'Skills'}
          </Link>
        </li>
        <li >
          <Link to='workDiv' smooth={true} duration={500}>
           {lang?'Портфолио':'Work'}
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
           {lang?'Контакты':'Contact'}
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6  text-4xl'>
          <Link   onClick={handleClick} to='home' smooth={true} duration={500}>
            <p id="mobileHome">
            Главная
              </p>
          </Link>
        </li>
        <li  className='py-6 text-4xl'>
          {' '}
          <Link  onClick={handleClick} to='about' smooth={true} duration={500}>
           <p id="mobileAbout">
           Обо мне
            </p> 
          </Link>
        </li>
        <li  className='py-6 text-4xl'>
          {' '}
          <Link  onClick={handleClick} to='skills' smooth={true} duration={500}>
            <p id="mobileSkills">
            Навыки
              </p>
          </Link>
        </li>
        <li  className='py-6 text-4xl'>
          {' '}
          <Link  onClick={handleClick} to='work' smooth={true} duration={500}>
            <p id="mobileWork">
            Портфолио
              </p>
          </Link>
        </li>
        <li  className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            <p id="mobileContact" >
            Контакты
              </p>
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://t.me/EnglishChriss'
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Curious-Kirill'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:kirill.log2020@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/kirill-logunov-7ba836170/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
