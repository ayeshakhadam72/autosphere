import React, { useState } from 'react';
import Titlehead from '../../../public/titlehead.png';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePara = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services does your platform provide?',
      answer: 'Our platform offers a wide range of services including car rentals, maintenance packages, and travel insurance options tailored to your needs.'
    },
    {
      question: 'Are there any hidden charges in the rental deals?',
      answer: 'No, we believe in transparent pricing. All charges are clearly mentioned during the booking process.'
    },
    {
      question: 'How do I modify or cancel my booking?',
      answer: 'You can modify or cancel your booking through our platform’s dashboard or by contacting our support team.'
    },
    {
      question: 'What areas do you operate in?',
      answer: 'We currently operate in major cities across the country, including metropolitan and suburban areas.'
    },
    {
      question: 'What is the process for vehicle pick-up and drop-off?',
      answer: 'Our process is simple. You can pick up the vehicle from our designated locations or opt for home delivery services, depending on availability.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Our customer support is available 24/7 via phone, email, or live chat on our website.'
    }
  ];

  return (
    <>
      <div className='py-10 md:py-20 bg-[#f2f7f6] font-FiraSans'>
        <div className='flex justify-center'>
          <div className='w-[90%] xl:w-[75%]'>
            <div className='text-center'>
              <h2 className='text-[36px] font-[700] text-black'>Frequently Asked Questions</h2>
              <Image src={Titlehead} className='mx-auto py-3' alt='FAQ Title' />
              <p className='text-[18px] text-[#676767]'>Find answers to the most common questions about our services and policies.</p>
            </div>

            <div className='mt-10'>
              {faqs.map((faq, index) => (
                <div key={index} onClick={() => togglePara(index)} className='mb-[20px] rounded-md bg-[#ffffff] px-5 py-5'>
                  <div className='flex justify-between cursor-pointer'>
                    <h2 className='w-[80%] text-[#111] text-[16px] font-[700]'>{faq.question}</h2>
                    <div className='w-[20%] flex justify-end'>
                      <span className='w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633] bg-[#828282] text-[16px] text-white rounded-full'>
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className={`${activeIndex === index ? 'block' : 'hidden'}`}>
                    <p className='mt-[15px] text-[#676767] text-[16px]'>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;