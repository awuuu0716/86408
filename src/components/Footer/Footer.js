import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #f2fffd;
`;

const RestaurantDetail = styled.p`
  color: #333;
  line-height: 2rem;
`;

const FooterBottom = styled.div`
  padding: 10px;
  background: #35564b;
  color: white;
  line-height: 1.5rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <FooterTop>
        <RestaurantDetail>
          餐館地址: 台北市信義區五段7號 <br />
          訂位專線：02-1314-5566 <br />
          營業時間：週一〜週五 09:00~18:00 / 週六、週日、國定假日（含連假）休息
          <br />
          email：service@86408.com.tw
          <br />
        </RestaurantDetail>
        <div></div>
      </FooterTop>
      <FooterBottom>
        Copyright © 2020 86408 Rights Reserved. 八六蔬食吧股份有限公司版權所有
      </FooterBottom>
    </Container>
  );
}
