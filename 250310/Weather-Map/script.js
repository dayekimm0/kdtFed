const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=GTIf1X0krpWYc7eenddVszmXN%252BeshBTovPNqZW1d0yH7j%252BuRuD9cVONS0Hgtz%252BHaEIPw8ccq5jMVZ3hp%252BcUZbQ%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => console.log(result));

const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  var container = document.getElementById("map");
  var options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  var map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(latitude, longitude);

  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  var iwContent = '<div style="padding:5px;">EZEN DX CENTER</div>',
    iwPosition = new kakao.maps.LatLng(latitude, longitude),
    iwRemoveable = true;

  // 인포윈도우를 생성하고 지도에 표시합니다
  var infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position: iwPosition,
    content: iwContent,
    removable: iwRemoveable,
  });

  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });

  // 마커 클러스터러를 생성합니다
  var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 10, // 클러스터 할 최소 지도 레벨
  });

  // 마커를 표시할 위치와 title 객체 배열입니다
  var positions = [
    {
      title: `<div style="padding: 10px; font-size: 0.8rem;">EZEN DX Center</div>`,
      latlng: new kakao.maps.LatLng(latitude, longitude),
    },
    {
      title: `<div style="padding: 10px; font-size: 0.8rem;">하이미디어 강남캠퍼스</div>`,
      latlng: new kakao.maps.LatLng(37.4987358, 127.026693),
    },
    {
      title: `<div style="padding: 10px; font-size: 0.8rem;">그린아카데미 강남캠퍼스</div>`,
      latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
    },
    {
      title: `<div style="padding: 10px; font-size: 0.8rem;">SBS아카데미 강남캠퍼스</div>`,
      latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
    },
  ];

  let markers = [];

  for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });

    var infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  clusterer.addMarkers(markers);
};

const errorPosition = (err) => {
  alert(err.message);
};

window.navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
