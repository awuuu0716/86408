import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';
import AdminNav from '../../components/AdminNav';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fefff8;
  padding-top: 20px;
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
    padding: 0;
    width: 100%;
  }

  @media ${device.laptop} {
    border-radius: 10px;
    width: 1200px;
    padding: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-right: 30px;
  font-size: 24px;
  width: 160px;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 50px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #eee;
  }

  @media ${device.mobileS} {
    width: 80px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 160px;
    font-size: 24px;
  }
`;

const SignUpButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-left: 30px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #eee;
  }

  & + & {
    margin-left: 30px;
  }

  @media ${device.mobileS} {
    width: 80px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 160px;
    font-size: 24px;
  }
`;

const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadImg = styled.input`
  width: 300px;
  height: 300px;
  box-shadow: 2px 2px 3px #ccc;
  cursor: pointer;
`;

const Topcontainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ReserveDataContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ReserveData = styled.div`
  width: 300px;
  font-size: 24px;
  font-weight: bold;
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

export default function AdminReserve() {
  const [value, onChange] = useState(new Date());
  const [reserves, setReserve] = useState([
    {
      date: 'Wed Dec 16 2020',
      time: 2,
      name: '王大明',
      amount: 2,
      phone: '0912345678',
    },
    {
      date: 'Wed Dec 16 2020',
      time: 3,
      name: '王中明',
      amount: 2,
      phone: '0912345678',
    },
  ]);
  return (
    <Root>
      <AdminNav />

      <Container>
        <Calendar
          onChange={onChange}
          showNeighboringMonth={false}
          value={value}
          onClickDay={(value, event) => console.log(value.toDateString())}
        />
      </Container>
      <Container>
        <ReserveDataContainer>
          <ReserveData>日期</ReserveData>
          <ReserveData>時段</ReserveData>
          <ReserveData>姓名</ReserveData>
          <ReserveData>人數</ReserveData>
          <ReserveData>電話</ReserveData>
        </ReserveDataContainer>
      </Container>

      {reserves.map((reserve) => (
        <Container>
          <ReserveDataContainer>
            <ReserveData>{reserve.date}</ReserveData>
            <ReserveData>{EntryTimeArray[reserve.time]}</ReserveData>
            <ReserveData>{reserve.name}</ReserveData>
            <ReserveData>{reserve.amount}</ReserveData>
            <ReserveData>{reserve.phone}</ReserveData>
          </ReserveDataContainer>
        </Container>
      ))}
    </Root>
  );
}
