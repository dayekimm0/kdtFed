import { useQuery } from "@tanstack/react-query";
import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  margin-top: 10px;
`;

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface IsDark {
  isDark: boolean;
}

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval: 5000,
  });

  const { isDark } = useOutletContext<IsDark>();

  const isDark = useRecoilValue(isDarkAtom);

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];
  console.log(chartData);
  return (
    <Container>
      {isLoading ? (
        <div>Loading Start...</div>
      ) : chartData.length > 0 ? (
        <ApexCharts
          width={600}
          type="line"
          series={[
            {
              name: "Hello",
              data: chartData.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
              // mode: "dark",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              // background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
              },
            },
            colors: ["#5d91e6"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#005bea"],
              },
            },
          }}
        />
      ) : (
        "No Data Available to display chart."
      )}
    </Container>
  );
};

export default Chart;
