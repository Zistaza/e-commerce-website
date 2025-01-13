import React from 'react';
import { Flavour } from '@/pages/types';

interface FlavourCardProps extends Flavour {
  onAddToCart: (flavour: Flavour) => void;
}

const FlavourCard: React.FC<FlavourCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return(
    <div className='bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
      <img 
      src={image}
      alt={name}
      className='w-full h-56 object-cover rounded-md mb-4 transform transition-all duration--300 ease-in-out hover:scale-110'/>

      <h3 className='text-xl font-semibold underline mb-2'>{name}</h3>
      <p className='text-lg text-green-700 underline mb-4'>${price}</p>


      <button onClick={() => onAddToCart({id, name, price, image})}
        className='bg-lime-600 ring-2 ring-rose-600 text-white px-4 rounded-lg text-l font-bold shadow-md hover:bg-blue-900 transition duration-300 ease-in-out'>
        Add To Cart
      </button>

    </div>
  );
};

export default FlavourCard;