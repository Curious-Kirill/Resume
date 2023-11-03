import React from 'react'
import FrontCerf from '../assets/FrontEndCertificate.png'
import jsCerf from '../assets/JavaScriptCertificate.png'
import WebCert from '../assets/WebCertificates.png'

const Cetificates = () => {
  return (
    <div name="certificates" className='w-full    text-gray-300  bg-[#0a192f] '>
        <div className='max-w-[1000px] pb-[200px] pt-[200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-1'>
            <p id="certificates" className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Сертификаты</p>
            <p id="checkMyCerf"className='py-6'>Здесь вы можете ознакомиться с последними пройдеными мною курсами</p>
          </div>

          <div 
           className='block w-full sm:grid-cols-2 md:flex gap-10'>
            <div style={{backgroundImage:`url(${FrontCerf})`}} className='shadow-lg  w-full   shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div2'>
            
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 '>
              
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Ознакомиться с сертификатом <br/> "Front End Development Libraries"
                  </span>
                  <div className='pt-8 text-center '>
                    <a href="https://www.freecodecamp.org/certification/Kirill_Log/responsive-web-design">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Просмотреть сертификат</button>
                    </a>
                   
                  </div>
              
              </div>
            </div>

               <div style={{backgroundImage:`url(${jsCerf})`}} className='shadow-lg  w-[50%]   shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div2'>

              {/* Hover Effects */}
              <div className='opacity-0  group-hover:opacity-100 '>
              
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Ознакомиться с сертификатом <br/>  "JS Algorithms and Data Structures"
                  </span>
                  <div className='pt-8 text-center '>
                    <a href="https://www.freecodecamp.org/certification/Kirill_Log/javascript-algorithms-and-data-structures">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Просмотреть сертификат</button>
                    </a>
                   
                  </div>
              
              </div>
            </div>

 
            
          </div>

          <div 
           className='flex mt-[20px] w-full sm:grid-cols-2 md:grid-cols-3 gap-10'>
            <div style={{backgroundImage:`url(${WebCert})`}} className='shadow-lg  w-[600px]   shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div2'>

              {/* Hover Effects */}
              <div className='opacity-0 text-align:center group-hover:opacity-100 '>
              
                  <span className='text-2xl text-align:center mt-10 font-bold text-white tracking-wider'>
                      Ознакомиться с сертификатом <br/>  &nbsp; &nbsp; &nbsp;  "Responsive Web Design" 
                  </span>
                  <div className='pt-8 text-center '>
                    <a href="https://www.freecodecamp.org/certification/Kirill_Log/responsive-web-design">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Просмотреть сертификат</button>
                    </a>
                   
                  </div>
              
              </div>
            </div>

               

 
            
          </div>
          

        </div>
    </div>
  )
}

export default Cetificates
