import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const StartScreenAbout = () => {
  return (
    <section className="about-hero">
      <Container maxWidth="xl">
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            Бренд, основанный на любви к мастерству, качеству и превосходному
            обслуживанию клиентов.
          </h1>
          <Link
            to={'/product'}
            className="btn btn--theme-light about-hero__btn"
          >
            Посмотреть наши продукты
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default StartScreenAbout;
