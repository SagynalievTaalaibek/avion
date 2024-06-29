import hero_image from './../../../../src/app/img/hero-image.jpg';
import hero_image_mob from './../../../../src/app/img/hero-image_2x.jpg';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const StartScreen = () => {
  return (
    <section className="hero">
      <Container maxWidth={'xl'}>
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Мебельный бренд будущего с вневременным дизайном
            </h1>
            <Link to={'/product'} className="btn btn--theme-dark hero__link">
              Посмотреть коллекцию
            </Link>
            <p className="hero__descr">
              Новая эра экологически чистой мебели с Avelon, французским
              люксовым розничным брендом с красивыми шрифтами, изысканными
              цветами и прекрасным способом демонстрации вещей в цифровом
              формате с использованием современных веб-технологий.
            </p>
          </div>
          <img
            src={hero_image}
            width="520"
            height="584"
            alt="Chair"
            srcSet={hero_image_mob}
            className="hero__image"
          />
        </div>
      </Container>
    </section>
  );
};

export default StartScreen;
