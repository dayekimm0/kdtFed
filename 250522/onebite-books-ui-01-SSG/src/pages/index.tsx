import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchRandomBooks from "@/lib/fetch-random-books";
import fetchBooks from "@/lib/fetch-books";

export const getStaticProps = async () => {
  const [recoBooks, allBooks] = await Promise.all([
    fetchRandomBooks(),
    fetchBooks(),
  ]);
  return {
    props: { recoBooks, allBooks },
  };
};

export default function Home({
  recoBooks,
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
