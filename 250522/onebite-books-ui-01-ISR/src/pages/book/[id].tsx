import React from "react";
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // fallback: false,
    fallback: "blocking",
    // fallback 옵션 세가지 : false(*존재하지 않는 페이지 없음) & blocking(*최초에는 없는 페이지로 간주하나, 즉시 SSR방식으로 변화해서 해당 페이지를 생성) & true(*즉시 생성 + 페이지만 미리 반환)
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const book = await fetchOneBook(Number(id));
  return {
    props: { book },
  };
};

const Book = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!book) return "문제가 발생했습니다. 다시 시도하세요!";
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.desc}>{description}</div>
      </div>
    </>
  );
};

export default Book;
