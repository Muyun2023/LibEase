import React, { useState } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';

import myBook1Image from '../assets/mybook1.jpg';
import myBook2Image from '../assets/mybook2.jpg';
import myBook3Image from '../assets/mybook3.jpg';

const Search = () => {
  const carouselImages = [myBook1Image, myBook2Image, myBook3Image];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasReadBook, setHasReadBook] = useState(false); // State to track whether the user has read the book

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    setHasReadBook(true);
    closeModal();
  };

  return (
    <div>
      <h1>What have you been Reading ?</h1>
      <p>
        The library team would love to know what you have been reading.
        Whether it is to learn a new skill or grow within one,
        we will be able to provide the top content for you !
      </p>
      <Carousel images={carouselImages} />
      <h1>{hasReadBook ? '' : ' I Have Read It !'} <button onClick={openModal}>Submit</button></h1>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Submit Your Reading</h2>
        <form>
          <label>
            Have you read the book ?
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!hasReadBook}
                  onChange={() => setHasReadBook(false)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasReadBook}
                  onChange={() => setHasReadBook(true)}
                />
                No
              </label>
            </div>
          </label>
          <button type="button" onClick={handleModalSubmit}>
            Submit
          </button>
        </form>
      </Modal>
      
      <h1>Find your next Adventure ! </h1>
      <p>Where would you like to go next ? Here are our TOP3 books this month !</p>

      <div className="card-container">
        <Card
          imageSrc="mybook7"
          title="Python for Everyone"
          description="Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances."
        />
        <Card
          imageSrc="mybook8"
          title="Story of Hakkah"
          description="Hakkah is a festival that celebrates the rededication of the Second Temple in Jerusalem. The holiday lasts for eight nights to commemorate how long the holy light burned.          ."
        />
        <Card
          imageSrc="mybook9"
          title="Communicate with Pet"
          description="Despite a limited vocabulary, dogs and babies communicate with us. They may not be verbal creatures, but they manage to “speak” back to us. Even without an extensive vocabulary, they make us understand their whines, cries, and coos especially when combined with their own special body language."
        />
      </div>
    </div>
  );
};

export default Search;