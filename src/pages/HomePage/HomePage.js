import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';
import banner from '../../img/banner.jpg';
import menu_1 from '../../img/menu_1.png';
import menu_2 from '../../img/menu_2.png';
import menu_3 from '../../img/menu_3.png';
import menu_4 from '../../img/menu_4.png';

import reviewer_1 from '../../img/reviewer_1.png';
import reviewer_2 from '../../img/reviewer_2.png';
import reviewer_3 from '../../img/reviewer_3.png';

const Root = styled.div`
  width: 100%;
  background: #fefff8;
`;

const Banner = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  background: url(${banner}) no-repeat center/cover;
  animation: fade-in 0.5s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  h1 {
    z-index: 2;
  }

  @media ${device.mobileS} {
    h1 {
      font-size: 24px;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 48px;
    }
  }
`;
const Title = styled.h2`
  font-size: 36px;
  margin-top: 80px;
  border-left: 12px solid #a3dea2;
  padding-left: 12px;
`;

const Main = styled.main`
  display: flex;
  padding: 20px;
  padding-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  max-width: 1360px;
`;

const Actions = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Action = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(porps) => porps.$color};
  margin-top: 50px;
  height: 160px;
  width: 280px;
  font-size: 36px;
  font-weight: bold;
  color: #3e613d;
  border-radius: 10px;
  transition: transform 0.5s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.mobileS} {
    & + & {
      margin-left: 0;
    }
  }

  @media ${device.tablet} {
    & + & {
      margin-left: 20px;
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const MenuImgContainer = styled.div`
  width: 100%;
`;

const MenuImg = styled.img`
  width: 100%;
`;

const Reviews = styled.div`
  width: 80vw;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const Reviewer = styled.div`
  flex: 1;
  min-height: 170px;
  border-radius: 5px;
  box-shadow: -1.4px -1.4px 4px 0 #d8eaef;
  border: solid 1px #c7e5ec;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 20px;
  }

  @media ${device.mobileS} {
    margin: 50px 0;
    width: 100%;
    & + & {
      margin-left: 0;
    }
  }

  @media ${device.tablet} {
    margin: 50px 0;
    width: 100%;
    & + & {
      margin-left: 0;
    }
  }

  @media ${device.tablet} {
    & + & {
      margin-left: 20px;
    }
  }
`;

const ReviewerImg = styled.div`
  margin-top: -70px;
  width: 105px;
  height: 105px;
  text-align: center;
  background: url(${(props) => props.$img});

  &::after {
    content: '${(props) => props.$name}';
    position: relative;
    top: 115px;
  }
`;

const ReviewContent = styled.p`
  margin-top: 50px;
`;

export default function HomePage() {
  return (
    <Root>
      <Banner>
        <h1>八六蔬食吧</h1>
      </Banner>
      <Main>
        <Title>當輕食之風盛起</Title>
        <Description>
          由於現代人生活忙碌，常以外食為主，當高糖、高鹽、高油成為人們的日常，會導致慢性疾病與肥胖的機率大增。
          <br />
          我們定期走訪農田，選用最天然、營養的食材，以簡單的烹調方式處理，最大化忠實呈現食材原本的鮮味。
          <br />
          咬一口不只賣餐點，我們希望能夠讓大家愛上料理的魅力，餐館特意打造全開放式廚房，烹調透明化，也不定時舉辦美食廚房DIY，讓大家體驗不需要過多調味，就能擁有千變萬化的食物口感。
        </Description>
        <Actions>
          <Action $color="#a8e8e1" to="/reserve">
            我要訂位
          </Action>
        </Actions>
        <Title>Menu 搶先看</Title>
        <Menu>
          <MenuImgContainer>
            <MenuImg src={menu_1} />
          </MenuImgContainer>
          <MenuImgContainer>
            <MenuImg src={menu_2} />
          </MenuImgContainer>
          <MenuImgContainer>
            <MenuImg src={menu_3} />
          </MenuImgContainer>
          <MenuImgContainer>
            <MenuImg src={menu_4} />
          </MenuImgContainer>
        </Menu>
        <Title>吃過都說讚</Title>

        <Reviews>
          <Reviewer>
            <ReviewerImg $img={reviewer_1} $name="國父桑" />
            <ReviewContent>
              我一生疲於建國，去過日本，去過歐洲，卻從未到過台北101，也從來沒有吃過這麼好吃的東西...今天在時空旅行者的幫助下我終於吃到了...此生再無遺憾
              QAQ!!
            </ReviewContent>
          </Reviewer>
          <Reviewer>
            <ReviewerImg $img={reviewer_2} $name="可達鴨" />
            <ReviewContent>
              三雙鞋等於30，兩個人加一雙鞋等於20，一雙冰淇淋加一雙冰淇淋加一個人等於13，那$#%$#%^%$^##$%等於多少...唉，大概咬一口就知道了!!!
            </ReviewContent>
          </Reviewer>
          <Reviewer>
            <ReviewerImg $img={reviewer_3} $name="旅かえる旅行青蛙" />
            <ReviewContent>
              自從呱呱呱呱呱以後，我呱呱呱呱呱，非常感謝呱呱呱呱呱，下次呱呱呱呱呱我呱呱呱呱呱，一定呱呱呱呱呱!!!
            </ReviewContent>
          </Reviewer>
        </Reviews>

        <Title>我們在哪裡</Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002890183707!2d121.5623502150063!3d25.03397598397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1594718483804!5m2!1szh-TW!2stw"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Main>
    </Root>
  );
}
