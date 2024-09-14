import React, { useState } from 'react'
import './FAQ.css'; // For styling (optional)



const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs=[
        {
            question: "What services do you provide?",
            answer: "We offer cooking and maid services including home-cooked meals, cleaning, laundry, and more."
          },
          {
            question: "How can I book a service?",
            answer: "You can book a service by visiting our booking page and selecting the desired service and time."
          },
          {
            question: "What are your working hours?",
            answer: "We operate from 9 AM to 6 PM on weekdays, and 10 AM to 4 PM on weekends."
          }, {
            question: "What services do you provide?",
            answer: "We offer cooking and maid services including home-cooked meals, cleaning, laundry, and more."
          },
          {
            question: "How can I book a service?",
            answer: "You can book a service by visiting our booking page and selecting the desired service and time."
          }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    

  return (
    <div className='faq-container'>

    <h2>Frequently Asked Questions</h2>

{
    faqs.map((faq,index)=>(

        <div key={index} className="faq-item">
        <div className='faq-question' onClick={() => toggleFAQ(index)}>
        {faq.question}
    </div>

    {openIndex === index && (
    <div className="faq-answer">
              {faq.answer}
            </div>
              )}

            </div>
    )) }


    </div>
  )
}

export default FAQ