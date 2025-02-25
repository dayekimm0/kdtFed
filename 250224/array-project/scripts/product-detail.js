const productInfo =
  "https://my-json-server.typicode.com/dayekimm0/Array-project/data";

let productData = null;

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    const params = new URLSearchParams(window.location.search);

    const category = params.get("category");
    const productName = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === productName
    );

    const price = new Intl.NumberFormat("ko-kr", {
      currency: "KRW",
    }).format(product.price);

    const productDetailDiv = document.querySelector("#product-detail");
    if (product) {
      productData = product;
      productDetailDiv.innerHTML = `
      <div class="product-category">
        <h3>현재 카테고리 ${product.category} > ${product.name}</h3>
      </div>
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p>카테고리 : ${product.category}</p>
        <p>소비자가 : ${price}원</p>
      </div>
      `;
    } else {
      productDetailDiv.innerText = "상품이 존재하지 않습니다!";
    }
  })
  .catch((error) => {
    console.error(error);
  });
Kakao.init("21058d867c4f4e03c691830be7ac91b8");

console.log(Kakao.isInitialized());
const shareMessage = () => {
  Kakao.Share.createDefaultButton({
    container: "#kakaotalk-sharing-btn",
    objectType: "feed",
    content: {
      title: `${productData.name}`,
      description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
      imageUrl:
        "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};
