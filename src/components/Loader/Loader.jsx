import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Loading className='loading'>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
    </Loading>
  );
};

const Loading = styled.div`
  --speed-of-animation: 1.1s;
  --gap: 6px;
  --first-color: #4c86f9;
  --second-color: #49a84c;
  --third-color: #f6bb02;
  --fourth-color: #f6bb02;
  --fifth-color: #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  gap: 6px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20vh;
`;

const scale = keyframes`
  0%, 40%, 100% {
   transform: scaleY(0.05);
  }
 
  20% {
   transform: scaleY(1);
  }
  `;

const Span = styled.span`
  width: 10px;
  height: 100px;
  background: var(--first-color);
  animation: ${scale} var(--speed-of-animation) ease-in-out infinite;

  &:nth-child(2) {
    background: var(--second-color);
    animation-delay: -0.9s;
  }

  &:nth-child(3) {
    background: var(--third-color);
    animation-delay: -0.8s;
  }

  &:nth-child(4) {
    background: var(--fourth-color);
    animation-delay: -0.7s;
  }

  &:nth-child(5) {
    background: var(--fifth-color);
    animation-delay: -0.6s;
  }
`;

export default Loader;
