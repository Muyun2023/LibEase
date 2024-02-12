import React from 'react';
import './Card.css';
import mybook1 from '../assets/mybook1.jpg';
import mybook2 from '../assets/mybook2.jpg';
import mybook3 from '../assets/mybook3.jpg';
import mybook4 from '../assets/mybook4.jpg';
import mybook5 from '../assets/mybook5.jpg';
import mybook6 from '../assets/mybook6.jpg';
import mybook7 from '../assets/mybook7.jpg';
import mybook8 from '../assets/mybook8.jpg';
import mybook9 from '../assets/mybook9.jpg';
import mybook10 from '../assets/mybook10.jpg';
import mybook11 from '../assets/mybook11.jpg';
import mybook12 from '../assets/mybook12.jpg';

const Card = ({ title, description, imageSrc }) => {
  const getImage = (imageName) => {
    switch (imageName) {
      case 'mybook1':
        return mybook1;
      case 'mybook2':
        return mybook2;
      case 'mybook3':
        return mybook3;
      case 'mybook4':
        return mybook4;
      case 'mybook5':
        return mybook5;
      case 'mybook6':
        return mybook6;
      case 'mybook7':
        return mybook7;
      case 'mybook8':
        return mybook8;
      case 'mybook9':
        return mybook9;
      case 'mybook10':
        return mybook10;
      case 'mybook11':
        return mybook11;
      case 'mybook12':
        return mybook12;
      default:
        // Provide a default image or handle the case where the image is not found
        return mybook1;
    }
  };

  return (
    <div className="card">
      <img src={getImage(imageSrc)} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
