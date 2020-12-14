import styled from 'styled-components';
import preloadPic from '../../img/preload.svg';

const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50%;
  width: 300px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 20px;
  transform: translate(-50%, 0);
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export default function Preload({ message, isShow }) {
  return (
    <Container $isShow={isShow}>
      <h1>{message}</h1>
      <Image src={preloadPic} />
    </Container>
  );
}
