import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../constants/devices';
import AdminNav from '../../components/AdminNav';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getReserve, deleteReserve } from '../../WebAPI';
import { getToday, getAvailableTime, initAvailableTime } from '../../utils';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fefff8;
  padding-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: white;
  color: #333;
  box-shadow: 3px 3px 4px #ccc;
  border-radius: 10px;

  @media ${device.tablet} {
    width: 85%;
  }

  @media ${device.laptop} {
    width: 85%;
    padding: 20px;
  }
`;

const Button = styled.button`
  width: 75px;
  padding: 5px;
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
`;

const ReserveDataContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.$isDelete ? 0.2 : 1)};
`;

const ReserveHeader = styled.div`
  position: relative;
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

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin: 10px 10px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50%;
  box-shadow: 2px 2px 3px #ccc;
  background: white;
`;

export default function AdminReserve() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(() => getToday());
  const [reserves, setReserve] = useState([]);
  const [availableTime, setAvailableTime] = useState(() => initAvailableTime());

  useEffect(() => {
    getReserve(date).then((res) => {
      setReserve(res);
      setAvailableTime(getAvailableTime(res));
    });
  }, []);

  const handleClickDay = (value) => {
    const dateArray = value.toDateString().split(' ');
    const date = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
    setDate(date);
    getReserve(date).then((res) => {
      setReserve(res);
      setAvailableTime(getAvailableTime(res));
    });
  };

  const handleDelete = (id) => {
    deleteReserve(id).then((res) => {
      getReserve(date).then((res) => {
        setReserve(res);
        setAvailableTime(getAvailableTime(res));
      });
    });
  };

  return (
    <Root>
      <AdminNav />

      <Container>
        <Calendar
          onChange={onChange}
          showNeighboringMonth={false}
          value={value}
          onClickDay={handleClickDay}
        />
        <TimeContainer>
          {date} 剩餘時段：
          {availableTime.map(
            (timeData, index) =>
              timeData.isAvailable && <Time key={index}>{timeData.time}</Time>
          )}
        </TimeContainer>
      </Container>
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
            <Button onClick={() => handleDelete(reserve.id)}>刪除</Button>
          </ReserveDataContainer>
        </Container>
      ))}
    </Root>
  );
}
