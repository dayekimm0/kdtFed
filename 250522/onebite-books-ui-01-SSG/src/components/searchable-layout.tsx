import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };
  return (
    <div>
      <div>
        <form className={style.searchbar_container} onSubmit={onSubmit}>
          <input
            value={search}
            type="text"
            onKeyDown={onKeyDown}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요..."
          />
          <input type="submit" value="검색" />
        </form>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
