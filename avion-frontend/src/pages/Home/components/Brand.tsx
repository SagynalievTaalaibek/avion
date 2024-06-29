import Container from '@mui/material/Container';

const Brand = () => {
  return (
    <section className="benefits">
      <Container maxWidth={'xl'}>
        <h2 className="title title--small title--centered title--mb-large">
          Чем отличается наш брендdifferent
        </h2>
        <ul className="list-reset grid benefits__list">
          <li className="benefits__item benefits__item--next">
            <h3 className="benefits__subtitle">На следующий день стандартно</h3>
            <p className="benefits__descr">
              Сделайте заказ до 15:00 и получите свой заказ на следующий день в
              стандартной комплектации.
            </p>
          </li>
          <li className="benefits__item benefits__item--made">
            <h3 className="benefits__subtitle">Сделано настоящими мастерами</h3>
            <p className="benefits__descr">
              Изделия ручной работы, изготовленные из настоящая страсть и
              мастерство
            </p>
          </li>
          <li className="benefits__item benefits__item--prices">
            <h3 className="benefits__subtitle">Непревзойденные цены</h3>
            <p className="benefits__descr">
              За наши материалы и качество лучшей цены вы не найдете нигде.
            </p>
          </li>
          <li className="benefits__item benefits__item--packaging">
            <h3 className="benefits__subtitle">Переработанная упаковка</h3>
            <p className="benefits__descr">
              Мы используем 100% переработанную упаковку, чтобы обеспечить
              управляемость нашего следа.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Brand;
