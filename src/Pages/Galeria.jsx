import Header from "../components/Header/Header";
import fotos from './fotos.json';
import './galeria.css'

export const Galeria = () => {

    const renderFotos = (foto) => (
        <img key={foto.id} src={foto.img}/>

      );
    
      const fotosUX = fotos.map(renderFotos);

    return (
        <>
            <Header />

            <section className="galeria">
                {fotosUX}
            </section>
        </>
    );
}