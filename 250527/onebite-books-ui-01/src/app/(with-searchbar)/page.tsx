import style from "./page.module.css";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

// export const dynamic = "fore-dynamic";
/*
아래 Route Segment Option 가급적 사용 지양 => !important
1. auto : 그냥 컴포넌트 페이지가 기본적으로 가지고 있는 속성을 자동으로 진행
2. force-dynamic : 해당 컴포넌트 페이지를 동적 페이지로 강제
3. force-static : 해당 컴포넌트 페이지를 정적 페이지로 강제
4. error : 만약 특정 컴포넌트 페이지의 옵선을 강제했을 때, 에러가 발생한다면 해당 에러 출력
*/

const AllBooks = async () => {
  await delay(500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: "force-cache",
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다....</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
  // 제이슨데이터는 서버창에서 구현되고 있다. (해당 여기는 server component 이기 때문)
  // 브라우저는 모른다.
};

const RecoBooks = async () => {
  await delay(500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      // cache: "force-cache",
      next: {
        revalidate: 3,
      },
    }
  );
  console.log(response);
  if (!response.ok) {
    return <div>오류가 발생했습니다....</div>;
  }
  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
        // 전개연산자로 그 안에 있는 모든 값들 구조분해할당으로 불러옴
      ))}
    </div>
  );
};

export const dynamic = "force-dynamic";

const Home = async () => {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>

        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={12} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

/* 
Dynamic page로 설정되는 기준

1. 캐시되지 않은 Data Fetching을 사용할 경우
const Comp = async () => {
  const response = await fetch("...", {cache : "no-store"})
  return <div>...</div>
}

2. 동적함수(쿠키, 헤더, 쿼리스트링)를 사용하는 컴포넌트가 존재할 때
import {cookies} from "next/headers";

const Comp = async () => {
const cookieStore = cookies();
const theme = cookieStore.get("theme");

return <div>...</div>
}

동적함수 : 0, 데이터 캐시 : X => Dynamic Page
동적함수 : 0, 데이터 캐시 : O => Dynamic Page
동적함수 : X, 데이터 캐시 : X => Dynamic Page
동적함수 : X, 데이터 캐시 : O => Static Page (* Full Route Cache 사용 적합)

*/
