import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <header className="top-header"></header>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Página Não Encontrada</h1>
            <p className="message__text">Desculpe, a página que você estava procurando não foi encontrada aqui. O link que você seguiu pode não existir mais. Por favor, tente novamente ou dê uma olhada no nossa.</p>
          </div>
          <div className="error__nav e-nav">
            <a href="/" className="e-nav__link">Página Inicial</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
