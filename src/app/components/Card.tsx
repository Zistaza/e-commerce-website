import React from 'react';

const FloatingImageContent = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10 px-20'>
      <h2 className='text-4xl font-bold mb-4 text-purple-700'>Whimsical Frozen Wonders!</h2>
      <p className='text-pink-600 font-bold mb-4'>"Discover frozen wonders that transport you to a world of pure magic! Our playful flavors and enchanting designs make every bite unforgettable."</p>
      <button className='text-white  font-bold bg-lime-500 px-4 py-2 ring-4 ring-cyan-400 rounded hover:bg-purple-300 transition duration-300'>
        Order Now
      </button>
      
      
      
      
      <h3 className='text-2xl font-bold mt-6 mb-2 text-center text-blue-700'>"Craving something fresh? Our delightful new flavours will be available soon!"</h3>
      

      <ul className='mt-4'>

      <li className='text-purple-900'> <span className='font-bold text-black'>✨Ice Cream Happy Hour: </span>"Cool off with a sweet deal – 50% off all ice creams from 3 PM to 6 PM. Don't miss out on the happiest hour of the day!" </li>
      <br />
     

        <li className='text-purple-900'> <span className='font-bold text-black'>🍨Buy One, Get One Free: </span>
        "Double the sweetness! Buy any ice cream and get another one absolutely free. Share the joy!" </li>
        <br />

        <li className='text-purple-900'> <span className='font-bold text-black'>👨‍👩‍👧‍👦Family Bundle Deal: </span>
        "Perfect for the whole family! Get 4 ice creams for the price of 3. Enjoy a delicious treat together."</li>
        <br />

        <li className='text-purple-900'> <span className='font-bold text-black'>🎉Ice Cream Party Pack: </span>
        "Planning a party? Get a pack of 10 mini ice cream cones for $X. Perfect for sharing with friends!"</li>
        <br />

        </ul>
        </div>

        <div className='md:w-1/2 mt-6 md:mt-0 pr-10'>
        <img 
        src= "https://files.oaiusercontent.com/file-W8q1rGEzAXr7oLXikRL1et?se=2025-01-10T12%3A49%3A51Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D278c9a44-a5f8-4cc1-8efd-698a7a653461.webp&sig=ngrVhtcpkE0%2B4glKztxwLQdOgrRqU94b8sqk0y5LoCw%3D"
        alt= "alterpic"
        className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>
        </div>
      
    </section>
  )
}

export default FloatingImageContent;
