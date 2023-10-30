import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full  h-screen md:h-[100%] md:mt-[200px] bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c9dbe998-1506-4e7c-8295-99d4b6d8d9d2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                
                <p id="contact" className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Связаться со мной</p>
                {/*  eslint-disable-next-line */}
                <p id="email" className='text-gray-300 py-4'>// Вы можете заполнить форму ниже или написать мне на email - kirill.log2020@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button id="collab" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Отправить письмо</button>
        </form>
    </div>
  )
}

export default Contact