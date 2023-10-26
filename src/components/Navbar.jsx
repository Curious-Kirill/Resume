import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTelegram,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import Telegramm from '../assets/pngwing.com.png'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { getElementError } from '@testing-library/react';
import Skills from './Skills';
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
      document.getElementById('checkMyWork').innerHTML= "Здесь вы можете ознакомиться с примерами моего кода "
      document.getElementById('name').innerHTML= "Кирилл Логунов"
      document.getElementById('name').innerHTML= "Кирилл Логунов"
    }else{
      language = "En"
      document.getElementById('skills').innerHTML= "Skills"
      document.getElementById('skills2').innerHTML= "// These are the technologies I've worked with"
      document.getElementById('home1').innerHTML= "Hi, my Name is"
      document.getElementById('occupation').innerHTML= "I'm a Front End Developer."
      document.getElementById('description').innerHTML= "I'm a Frontend Developer specializing in building and occasionally designing exeptional digital experiences. Currently available for hiring "
      document.getElementById('myProjects').innerHTML= "View Work"
      document.getElementById('name').innerHTML= "Kirill Logunov"
      document.getElementById('name').innerHTML= "Kirill Logunov"
      document.getElementById('name').innerHTML= "Kirill Logunov"
    }
    console.log(language);
      
    
  }
    

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='relative left-[20px]'>

      <label className="switch relative border-2 solid 1px white hover:bg-pink-600 hover:border-pink-600">
          <input  type="checkbox"></input>
          <span onClick={handleLang} className="slider"> RU EN </span>
        </label>
     
       

        

      </div>
      
     
      
      {/* menu */}
      <ul className='hidden md:flex'>

      

        <li id="home">
          <Link to='home' smooth={true} duration={500}>
            {lang?'Главная':'Home'}
          </Link>
        </li>
        
        <li>
          <Link to='about' smooth={true} duration={500}>
          {lang?'Обо мне':'About'}
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
          {lang?'Навыки':'Skills'}
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
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
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='t.me/EnglishChriss'
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
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
