import brandInfoImage from './../../../app/img/brand-info.jpg';
import brandInfoImage2x from './../../../app/img/brand-info_2x.jpg';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const BrandInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="brand-info">
      <Container maxWidth={'xl'}>
        <div className="brand-info__content">
          <div className="brand-info__text">
            <h2 className="title title--large title--mb-small-xs brand-info__title">
              Все началось с маленькой идеи
            </h2>
            <p className="brand-info__descr">
              Наша история глобального бренда с местным началом началась в
              небольшой студии в Южном Лондоне в начале 2014 года.
            </p>
            <button
              onClick={() => navigate('/product')}
              className="btn btn--theme-dark brand-info__btn"
            >
              Посмотреть коллекциюView collection
            </button>
          </div>
          <div className="brand-info__image">
            <img
              src={brandInfoImage}
              srcSet={brandInfoImage2x}
              aria-hidden="true"
              width="630"
              height="478"
              alt=""
              className="brand-info__pic"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandInfo;
