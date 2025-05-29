import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchRandomBooks from "@/lib/fetch-random-books";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

export const getStaticProps = async () => {
  const [recoBooks, allBooks] = await Promise.all([
    fetchRandomBooks(),
    fetchBooks(),
  ]);

  return {
    props: { recoBooks, allBooks },
    revalidate: 3,
  };
};

export default function Home({
  recoBooks,
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입 북스</title>
      </Head>
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
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
