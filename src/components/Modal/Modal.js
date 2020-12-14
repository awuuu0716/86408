import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: ${(props) => (props.$isShowModal ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 500px;
  padding: 80px 0;
  border: 1px solid #226592;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 5px #b2cee0;

  h5 {
    font-weight: bold;
    margin-bottom: 60px;
  }
`;

const CloseModalButton = styled.button`
  width: 120px;
  height: 50px;
  background: #07273c;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #b2cee0;
  cursor: pointer;
`;

export default function Modal({ isShowModal, message, closeModal }) {
  return (
    <ModalContainer $isShowModal={isShowModal}>
      <h1>{message}</h1>
        <CloseModalButton onClick={closeModal}>返回</CloseModalButton>
    </ModalContainer>
  );
}
