import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get(`http://localhost:3000/posts`);
    },
    retry: 1,
    select: (data) => {
      return data.data;
    },
    gcTime: 20000,
    staleTime: 10000,
    enabled: false, // 최초에 컴포넌트를 들어가도 호출이 안됨 (검색 기능)
    // refetchInterval: 3000, //주식과 같이 계속 값을 업데이트 시켜와야할 때 사용 (Js->setInterval)
    // refetchOnMount: false, //컴포넌트가 마운트되는 시점에 다시 호출을 할것이냐 말것이냐 (정적페이지 정보값이 일정하게 안바껴도 되는곳)
    // refetchOnWindowFocus: true, //다른 페이지에 있다가 해당 컴포넌트로 들어왔을 때 자동으로 최신 api를 호출해오는것
  });
};
