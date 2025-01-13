'use client'
import React from 'react';

type Offer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "Unmissable Deal Alert! 70% Off Ice Creams – 5PM to 7PM!"
    },

    {
      title: "Family Bundle Deal",
      description: "Treat the family – 4 scoops, pay for 3!"
    },

    {
      title: "Ice Cream Party Pack",
      description: " Share the Joy – 10 Mini Cones in One Pack!"
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  }


  return (
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-bold mb-6 text-blue-900'>Special Offers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10'>
          {offers.map((offer, index) => (
            <button key={index}
            onClick={() => handleOfferClick(offer.description)}
            className='bg-yellow-200 shadow-lg rounded-lg text-center hover:bg-grey-300 transition duration-300 transform hover:scale-105'>
              <h3 className='text-2xl font-bold text-grey-600'>{offer.title}</h3>
              <p className='text-purple-700 font-bold mt-3 mb-2'>{offer.description}</p>

            </button>
          ))}

        </div>
      </div>
    </section>
  )

}

export default SpecialOffers;
