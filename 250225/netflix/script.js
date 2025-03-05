import { API_KEY } from "./env.js";

// Document Items
const nowplayingUl = document.querySelector(".nowplaying ul");
const upcomingUl = document.querySelector(".upcoming ul");
const topratedUl = document.querySelector(".toprated ul");

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

// Create Element
const createElement = (movie, index, category) => {
  const {
    adult,
    genre_ids,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const li = document.createElement("li");
  const moviePoster = document.createElement("div");
  const movieTitle = document.createElement("div");
  const movieDesc = document.createElement("div");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const ageLimit = document.createElement("span");
  const movieNum = document.createElement("span");
  const release = document.createElement("span");
  const vote = document.createElement("span");

  moviePoster.className = "moviePoster";
  movieTitle.className = "movieTitle";
  movieDesc.className = "movieDesc";

  let adultKo = adult === false ? "ALL" : "18";

  ageLimit.innerText = adultKo;
  movieNum.innerText = index + 1;

  release.innerText = release_date;
  vote.innerText = `⭐${parseFloat(vote_average).toFixed(2)}`;

  li.className = id;
  li.setAttribute("data-category", category);

  moviePoster.append(img, ageLimit, movieNum);
  movieTitle.innerText = title;
  movieDesc.append(release, vote);
  li.append(moviePoster, movieTitle, movieDesc);

  if (category === "nowplaying") {
    nowplayingUl.appendChild(li);
  } else if (category === "upcoming") {
    upcomingUl.appendChild(li);
  } else if (category === "toprated") {
    topratedUl.appendChild(li);
  }
};

// Nowplaying DB
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};
const upComming = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};
const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// Promise DBs
const getMovies = async () => {
  const [nowPlayingMovie, upCommingMovie, topRatedMovie] = await Promise.all([
    nowPlaying(),
    upComming(),
    topRated(),
  ]);

  // Movie Items
  nowPlayingMovie.forEach((movie, index) => {
    createElement(movie, index, "nowplaying");
  });
  upCommingMovie.forEach((movie, index) => {
    createElement(movie, index, "upcoming");
  });
  topRatedMovie.forEach((movie, index) => {
    createElement(movie, index, "toprated");
  });

  // Item slider
  // 전체 총 영화 아이템 개수 : 20개
  // 한 번에 보여지는 영화 개수 : 5개
  // 좌 혹은 우측 슬라이드 버튼 클릭 시 : 5개 이동
  // 각 영화의 너비 값 : 160
  // 영화 사이 간격 : 25
  // 한 번에 보여지는 공간 : 900
  // (160 + 25) * 4 + 160 => 20개의 영화 아이템을 가지고 있는 ul태그가 슬라이드 버튼 클릭 시, 이동해야 하는 거리
  // 무한 슬라이드를 실행하기 위해서 아래와 같ㄷ이 노드를 복제
  // 15~19 +20개의 영화 아이템 + 0~4번째 인덱스 영화아이템
  // 1 2 3 4 5
  // 6 7 8 9 10
  // 11 12 13 14 15
  // 16 17 18 19 20

  const initializeSlider = (
    sliderSelector,
    rightArrowSelector,
    leftArrowSelector
  ) => {
    const slider = document.querySelector(sliderSelector);
    const slides = slider.querySelectorAll("li");
    const slideToShow = 5;
    const slideWidth = 160;
    const slideMargin = 25;
    let currentIndex = 0;
    let isTransitioning = false;

    const firstClones = Array.from(slides)
      .slice(0, slideToShow)
      .map((slide) => slide.cloneNode(true));

    const lastClones = Array.from(slides)
      .slice(-slideToShow)
      .map((slide) => slide.cloneNode(true));

    slider.append(...firstClones);
    slider.prepend(...lastClones);

    const updateSlider = () => {
      const offset = -(slideWidth + slideMargin) * (currentIndex + slideToShow);
      slider.style.transform = `translateX(${offset}px)`;
    };

    slider.style.transition = "none";
    updateSlider();
  };

  initializeSlider(
    ".nowplaying ul",
    "#nowPlayingRightArrow",
    "#nowPlayingLeftArrow"
  );
  initializeSlider(".upcoming ul", "#upcomingRightArrow", "#upcomingLeftArrow");
  initializeSlider(".toprated ul", "#topratedRightArrow", "#topratedLeftArrow");

  // Main slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`;
    mainSlider.appendChild(figure);
  });
  // fade effect
  const figures = mainSlider.querySelectorAll("figure");
  let currentIndex = 0;

  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };
  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

const naviLis = document.querySelectorAll(".gnb>ul>li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });
  naviLi.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});

// Accordion Event
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// search modal
const searchBtn = document.querySelector(".search-box .fa-magnifying-glass");
const closeBtn = document.querySelector(".close");
const modalSearch = document.querySelector(".modal-search");

searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
