/** @format */
import drama from "./Dramas.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

function Dramas() {
  return (
    <div>
      <div class='container-fluid' className={drama.container}>
        <h2 className={drama.title}>최신 등록 콘텐츠</h2>
        <OwlCarousel
          items={5}
          className='owl-theme'
          loop={true}
          nav
          margin={10}
          center={true}
          mouseDrag={false}>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img1.jpg"} />
            </div>
          </a>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img2.jpg"} />
            </div>
          </a>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img4.jpg"} />
            </div>
          </a>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img3.jpg"} />
            </div>
          </a>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img5.jpg"} />
            </div>
          </a>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img6.jpg"} />
            </div>
          </a>
          <a href='#a'>
            <div>
              <img className='img' src={"assets/img/img7.jpg"} />
            </div>
          </a>
        </OwlCarousel>
      </div>
    </div>
  );
}
export default Dramas;
