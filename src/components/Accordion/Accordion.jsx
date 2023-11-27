import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Plus from '../Icons/Plus';
import './Accordion.css';

const Accordion = ({ data }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (activeItem !== null) {
      const element = document.querySelector('.accordion__content');
      const scrollHeight = element.scrollHeight;
      setScrollHeight(scrollHeight);
    }
  }, [activeItem]);

  const exercises = data.exercises;

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <section className='accordion container'>
      <Header>
        <Title className='accordion__title'>{data.title}</Title>
        <p className='accordion__description'>{data.description}</p>
      </Header>
      <div className='accordion__container'>
        {exercises.map((item, index) => (
          <div key={index} className='accordion__item'>
            <header
              className={`accordion__header ${
                activeItem === index ? 'accordion-open' : ''
              }`}
              onClick={() => handleItemClick(index)}
            >
              <Plus className='bx bx-plus accordion__icon' />
              <h3 className='accordion__title'>{item.name}</h3>
            </header>

            <div
              className={`accordion__content`}
              style={
                activeItem === index
                  ? { height: `${scrollHeight}px`, overflowY: 'scroll' }
                  : {}
              }
            >
              <p className='accordion__description'>{item.description}</p>
              {item.steps.map((step, index) => (
                <div key={index} className='accordion__step'>
                  {`${index + 1}. ${step}`}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

const Header = styled.header`
  padding: 40px;
  max-width: 700px;
`;
export default Accordion;
