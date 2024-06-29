import aboutImage from './../../../app/img/about-1.jpg';
import aboutImage2x from './../../../app/img/about-1_2x.jpg';

const AboutBlock = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__info">
          <h2 className="title title--small about__title">
            От студии в Лондоне до мирового бренда с более чем 400 торговыми
            точками
          </h2>
          <p className="about__descr">
            Когда мы запускали Avion, идея была проста. Сделать
            высококачественную мебель доступной и доступной для массового рынка.
          </p>
          <p className="about__descr">
            Мебель и товары для дома, изготовленные вручную и с любовью, — это
            то, чем мы живем, дышим и создаем, поэтому наш бутик в Челси стал
            рассадником лондонского сообщества дизайнеров интерьеров.
          </p>
          <button className="btn btn--theme-light about__btn">Связаться</button>
        </div>
        <img
          src={aboutImage}
          srcSet={aboutImage2x}
          aria-hidden="true"
          width="720"
          height="603"
          loading="lazy"
          alt=""
          className="about__image"
        />
      </div>
    </section>
  );
};

export default AboutBlock;
