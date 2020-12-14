import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../constants/devices';
import 'react-calendar/dist/Calendar.css';
import { getUserReserve } from '../../WebAPI';
import { useContext } from 'react';
import { AuthContext } from '../../contexts';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fefff8;
  padding-top: 20px;
  animation: fade-in 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: white;
  color: #333;
  box-shadow: 3px 3px 4px #ccc;

  @media ${device.mobileS} {
    border-radius: 0;
    padding: 10px;
    width: 100%;
  }

  @media ${device.laptop} {
    border-radius: 10px;
    padding: 10px;
    width: 70%;
  }
`;

const ReserveDataContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.$isDelete ? 0.2 : 1)};
  @media ${device.mobileS} {
    justify-content: space-around;
  }
`;

const ReserveHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    justify-content: space-around;
  }
`;

const ReserveData = styled.div`
  padding: 10px 0;
  font-weight: bold;

  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

const EntryTimeArray = [
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];

export default function CheckReserve() {
  const { user, setUser } = useContext(AuthContext);
  const [reserves, setReserve] = useState([]);

  useEffect(() => {
    getUserReserve(user).then((data) => {
      setReserve(data);
    });
  }, [user]);

  return (
    <Root>
      <Container>
        <ReserveHeader>
          <ReserveData>日期</ReserveData>
          <ReserveData>時段</ReserveData>
          <ReserveData>姓名</ReserveData>
          <ReserveData>人數</ReserveData>
          <ReserveData>電話</ReserveData>
        </ReserveHeader>
      </Container>

      {reserves.map((reserve) => (
        <Container key={reserve.id}>
          <ReserveDataContainer $isDelete={reserve.isDelete}>
            <ReserveData>{reserve.date}</ReserveData>
            <ReserveData>{EntryTimeArray[reserve.entryTime]}</ReserveData>
            <ReserveData>{reserve.name}</ReserveData>
            <ReserveData>{reserve.amount}</ReserveData>
            <ReserveData>{reserve.phone}</ReserveData>
          </ReserveDataContainer>
        </Container>
      ))}
    </Root>
  );
}
