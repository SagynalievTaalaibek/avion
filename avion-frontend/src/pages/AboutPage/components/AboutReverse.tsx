import imageAbout2 from './../../../app/img/about-2.jpg';
import imageAbout22x from './../../../app/img/about-2_2x.jpg';

const AboutReverse = () => {
  return (
    <section className="about about--reverse">
      <div className="about__content">
        <div className="about__info">
          <h2 className="title title--small about__title">
            Наш сервис не просто персональный, он на самом деле очень личный и
            изысканный.
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
          <button className="btn btn--theme-white about__btn">Связаться</button>
        </div>
        <img
          src={imageAbout2}
          srcSet={imageAbout22x}
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

export default AboutReverse;
