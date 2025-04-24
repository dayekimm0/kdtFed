// import { useState, useEffect } from "react";
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { Helmet } from "react-helmet";

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
  font-size: 22px;
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
  margin-bottom: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.accentColor : theme.textColor};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.bgColor : theme.accentColor};
  padding: 16px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.textColor : theme.accentColor};
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.accentColor : theme.textColor};
  }
`;

interface IsActive {
  $isActive: boolean;
}

interface IRouteParams {
  coinId: string;
}

interface ILocationState {
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
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

// interface IsDark {
//   isDark: boolean;
// }

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { coinId } = useParams<IRouteParams | any>();
  const { state } = useLocation() as ILocationState;
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");
  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();

  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  // const { isDark } = useOutletContext<IsDark>();
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["coinInfo", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["coinPrice", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });

  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Helmet>
        <title>{state ? state : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
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
              <span>🏅Rank🏅</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>✅ Symbol</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>✅ isActive</span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            Information of {infoData?.type} type : Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint sed, sequi in adipisci sunt omnis
            blanditiis. Vel ipsam quae quo ullam perspiciatis est non quam
            aperiam quis officia, dolores commodi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint sed, sequi in adipisci sunt omnis
            blanditiis. Vel ipsam quae quo ullam perspiciatis est non quam
            aperiam quis officia, dolores commodi.
          </Description>
          <Overview>
            <OverviewItem>
              <span>✅ Total Supply</span>
              <span>
                {priceData?.total_supply?.toLocaleString("ko-KR") ?? "No-data"}
              </span>
              {/* <span>{priceData?.total_supply?.toLocaleString("ko-KR")}</span> */}
            </OverviewItem>
            <OverviewItem>
              <span>✅ Max Supply</span>
              <span>
                {priceData?.max_supply?.toLocaleString("ko-KR") ?? "No-data"}
              </span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
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
