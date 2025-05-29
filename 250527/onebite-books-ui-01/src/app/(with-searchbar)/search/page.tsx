import BookItem from "@/components/book-item";
import type { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";

// export const dynamic = "force-static";
// export const dynamic = "error";

const SearchResult = async ({ q }: { q: string }) => {
  // const { q } = await searchParams;
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생하였습니다!</div>;
  }
  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResult q={(await searchParams).q || ""} />
    </Suspense>
  );
};

export default Page;
