// Gallery.jsx
import React, { useState } from 'react';
import Card from '../components/Card';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, category: 'Tech', title: 'You are on Mute', imageSrc: 'mybook12' },
    { id: 2, category: 'Non-Tech', title: 'Dream World', imageSrc: 'mybook10' },
    { id: 3, category: 'Tech', title: 'A Game Changer', imageSrc: 'mybook11' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <div>
      <h1>Comming Soon</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('Non-Tech')}>Non-Tech</button>
        <button onClick={() => setFilter('Tech')}>Tech</button>
      </div>
      <div className="card-container">
        {filteredItems.map(item => (
          <Card key={item.id} imageSrc={item.imageSrc} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;