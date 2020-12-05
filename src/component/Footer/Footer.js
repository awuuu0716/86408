import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  margin-top: 100px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #e8efee;
`;

const RestaurantDetail = styled.p`
  color:#333;
  line-height: 2rem;
`;

const FooterBottom = styled.div`
  padding: 10px;
  background: #35564b;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <FooterTop>
        <RestaurantDetail>
          餐館地址: 天上地下天堂路三分之一里六段520號 <br />
          訂位專線：02-1314-5566 <br />
          營業時間：週一〜週五 09:00~18:00 / 週六、週日、國定假日（含連假）休息{' '}
          <br />
          email：service@justabite.com.tw
          <br />
        </RestaurantDetail>
        <div></div>
      </FooterTop>
      <FooterBottom>
        Copyright © 2020 Just A Bite All Rights Reserved.
        咬一口股份有限公司版權所有
      </FooterBottom>
    </Container>
  );
}
