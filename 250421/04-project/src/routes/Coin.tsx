import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Header = styled.header`
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.accentColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Overview = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  padding: 10px 20px;
  background: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  span:first-child {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(0, 0, 0, 1);
  }
`;

const Description = styled.div`
  width: 600px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 2rem;
  line-height: 140%;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.accentColor};
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  background: ${({ isActive, theme }) =>
    isActive ? theme.accentColor : theme.textColor};
  color: ${({ isActive, theme }) =>
    isActive ? theme.bgColor : theme.accentColor};
  padding: 16px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ isActive, theme }) =>
      isActive ? theme.textColor : theme.accentColor};
    color: ${({ isActive, theme }) =>
      isActive ? theme.accentColor : theme.textColor};
  }
`; //함수형 컴포넌트로부터 파생되어진 스타일 컴포넌트(바닐라js에서의 가상클래스 느낌)

interface IsActive {
  isActive: boolean;
}

interface IRouteParams {
  coinId: string;
}

interface ILocaionState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<IRouteParams | any>();
  const { state } = useLocation() as ILocaionState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      console.log(infoData, priceData);
      setLoading(false);
    })(); // 선언과 호출을 합쳐버린 고차함수
  }, []);

  return (
    <Container>
      <Header>
        <Link to={"/"}>
          <Title>
            Coin : {state ? state : loading ? "Loading..." : coinId}
          </Title>
        </Link>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>🏅 Rank 🏅 </span>
              <span>{info?.rank} </span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol 🗯️</span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>isActive 🗯️</span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            Infomation of {info?.type} type : Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aliquam quam commodi repellat animi!
            Omnis deserunt ipsa nostrum unde iure, asperiores inventore
            similique dolores nobis, sapiente quis facilis in, autem
            consequatur? consectetur adipisicing elit. Aliquam quam commodi
            repellat animi! Omnis deserunt ipsa nostrum unde iure, asperiores
            inventore similique dolores nobis, sapiente quis facilis in, autem
            consequatur?
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply 🗯️</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply 🗯️</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
