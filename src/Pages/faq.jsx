import Header from "../components/Header/Header";
import './faq.css';

export const FAQ = () => {
  const handleClick = (event) => {
    const faq = event.target.closest(".faq");
    if (faq) {
      faq.classList.toggle("reveal");
    }
  };

  return (
    <>
      <Header />
      <section className="faqs" onClick={handleClick}>
        <div className="faq">
          <div className="question">
            <h3>Como puedo ayudarlos con su trabajo?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="faq">
          <div className="question">
            <h3>What is JavaScript?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};
