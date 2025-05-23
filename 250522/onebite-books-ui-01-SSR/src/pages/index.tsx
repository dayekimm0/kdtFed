import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";

export const getServerSideProps = () => {
  // 아래 Home이라는 컴포넌트보다 무조건 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 기능을 할 수 있는 함수
  console.log("서버사이드 프롭스");
  const data = "hello";
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: any) {
  console.log(data);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
