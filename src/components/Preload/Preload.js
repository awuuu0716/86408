import styled from 'styled-components';
import preloadPic from '../../img/preload.svg';

const Container = styled.div`
  position:absolute;
  left:36%;
  display: ${(props) => (props.$isShow ? 'block' : 'none')};
  width:300px;
  background:rgba(255,255,255,0.8);
  border-radius:5px;
  padding:20px;
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
