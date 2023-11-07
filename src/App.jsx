import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon.jsx';

const  App = () => {

  const random = [
    { id: 1,
     author: "Oscar Wilde",
     quote: "I had the most wonderful experience at Nail Salon. The staff was friendly, welcoming, and incredibly skilled. My nail technician took the time to understand exactly what I wanted and executed it perfectly. My nails have never looked better! The atmosphere was relaxing, and I left feeling pampered and refreshed. I can't wait to go back!"
    , background: 'bg-red-500'
    }, 
    { id: 2,
      author: "Rivera Gomet",
      quote: "I am absolutely thrilled with the service I received at the shop. The attention to detail here is unmatched. From the moment I walked in, I felt valued as a customer. The salon is clean, well-organized, and stylish. The nail artists are not only talented but also passionate about their work. I left with a stunning manicure that lasted for weeks. I highly recommend this salon to anyone looking for top-notch nail care!"
      , background: 'bg-gray-500'
    }, {
      id: 3, 
      author:"Amanda Colden", 
      quote: "I cannot express how impressed I am with the salon. The staff's expertise and creativity are outstanding. I came in with a vague idea, and my nail artist turned it into a masterpiece. The color selection was vast, and they used high-quality products that made my nails shine. The overall experience was delightful, and I left feeling beautiful and confident. I found my new go-to nail salon!"
      , background: 'bg-blue-500'
    }, {id: 4, 
      author:"Beatriz Lalipa", 
    quote: "I had an amazing time. The ambiance is serene, and the staff is incredibly professional. My nail technician was not only skilled but also friendly and engaging. She made sure I was comfortable throughout the entire process. My nails turned out absolutely gorgeous, and the polish didn't chip for weeks. I appreciate the dedication to customer satisfaction and will definitely be returning!" 
    , background: 'bg-purple-500'
  }];
  const [currentReview, setCurrentReview] = useState(random[0])
  const [isVisible, setIsVisible] = useState(false);
const handleToggleVisibility = () => {
  setIsVisible(!isVisible)
}
  //setup UI  
  useEffect(() => {
    let timer;
    if(isVisible) {
      timer = setTimeout(()=>{
  const randomIndex = Math.floor(Math.random()* random.length);
  setCurrentReview(random[randomIndex]);
}, [2500]);
    }
return ()=> clearTimeout(timer);
}, [isVisible,random]);
return (
    <div className=' block text-center'>
    <span className=' p-4 inline-block max-w-full max-h-full'><big><h1> 4 Reviews</h1></big></span>
    <div className=' flex justify-center items-center max-w-full max-h-ful bg-inherit border-x-teal-600'>
    <span className=' max-w-max max-h-max mx-0 inline'><StarIcon /></span>
    </div>
    <button className="bg-gray-500 text-white p-2 rounded-lg mt-3 ml-3" onClick={handleToggleVisibility}>
        {isVisible ? 'Reviews' : 'Reviews'}
      </button>
      {isVisible && (
  <div key={currentReview.id} className={` p-52 max-w-full text-white ${currentReview.background} rounded-xl mt-5`}>
    <big><h1>{currentReview.author}:</h1></big>
    <p>"{currentReview.quote}"</p>
  </div>
)}
      </div>
  );
};



export default App;
