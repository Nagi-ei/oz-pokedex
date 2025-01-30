import { useState } from 'react';
import styled from 'styled-components';

const FlipContainer = styled.div`
  transform-style: preserve-3d;
  width: 288px;
  height: 288px;
  transform: ${(props) =>
    props.$side === 'front' ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  position: relative;
  transition: all ease-in 150ms;
`;

const FrontImg = styled.img`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BackImg = styled.img`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default function FlippingCard({ front, back }) {
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <>
      <FlipContainer $side={isFront ? 'front' : 'back'}>
        <FrontImg src={front} draggable='false' />
        <BackImg src={back} draggable='false' />
      </FlipContainer>
      <button onClick={handleFlip}>뒤집기</button>
    </>
  );
}
