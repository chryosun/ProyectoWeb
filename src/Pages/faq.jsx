import Header from "../components/Header/Header";
import './faq.css';
import preguntas from "./preguntas.json";

export const FAQ = () => {
  const handleClick = (event) => {
    const faq = event.target.closest(".faq");
    if (faq) {
      faq.classList.toggle("reveal");
    }
  };

  const renderPreguntas = (pregunta) => (
    <div key={pregunta.id} className="faq">
          <div className="question">
            <h3>{pregunta.pregunta}</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>
          <div className="answer">
            <p>{pregunta.respuesta}</p>
          </div>
        </div>
  );

  const preguntasUX = preguntas.map(renderPreguntas);

  return (
    <>
      <Header />
      <section className="faqs" onClick={handleClick}>
        {preguntasUX}
      </section>
    </>
  );
};
