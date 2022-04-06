/** @format */

import {useState} from "react";
import Main from "./MainVisual.module.css";
import logoImg from "./img/logo.png";
import backImg from "./img/mountain-dark-nature.jpg";

function MainVisual() {
  const [userName, setUserName] = useState("Somi");
  return (
    <div>
      {/*<div className={Main.container}>
        <h2 className={Main.title}>{userName} 님을 위한 오늘의 콘텐츠</h2>
  </div>*/}
      <div className={Main.container}>
        <div className={Main.content}>
          <div className={Main.titleSize}>
            <img src={logoImg} />
          </div>
          <p className={Main.summary}>
            내 이름은 알렉스. 아이 아빠의 정신적 학대를 피해 딸을 데리고
            도망쳤다. 이제 나는 여자이자 엄마로서 세상에 정착해 홀로 육아를 하고
            미래를 준비해야 한다. 궂은일을 해서라도 반드시.
          </p>
          <div className={Main.btn_box}>
            <button>
              <i class='fa-solid fa-play'></i>재생
            </button>
            <button>
              <i class='fa-solid fa-circle-info'></i>상세 정보
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainVisual;
