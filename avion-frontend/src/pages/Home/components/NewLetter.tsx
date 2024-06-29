import Container from '@mui/material/Container';

const NewLetter = () => {
  return (
    <section className="newsletter">
      <Container maxWidth={'xl'}>
        <div className="newsletter__content">
          <h2 className="title title--large-xl title--mb-small-xs newsletter__title">
            Вступайте в клуб и получайте преимущества
          </h2>
          <p className="newsletter__descr">
            Подпишитесь на нашу рассылку и получайте эксклюзивные предложения о
            новых ассортиментах, распродажах, всплывающих магазинах и многом
            другом.
          </p>
          <form action="#" method="POST" className="form newsletter__form">
            <input
              type="email"
              name="email"
              required
              className="form__input"
              placeholder="your@email.com"
            />
            <button className="btn btn--theme-darker form__btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewLetter;
