import Header from "../components/Header/Header";
import eventos from "./data-eventos.json";
import './eventos.css';

export const Eventos = () => {

    const renderEventos = (evento) => (
        <div key={evento.id} className="card">
                <div className="imagen">
                    <img src={evento.img} alt="" />
                </div>
                <div className="informacion">
                    <div className="informacion-1">
                        <h2>{evento.titulo}</h2>
                        <p>{evento.descripcion}</p>
                    </div>
                    <div className="informacion-2">
                        <p className="title">Lugar</p>
                        <p>{evento.lugar}</p>
                        <p className="title">Fecha y Hora</p>
                        <p>{evento.fechaHora}</p>
                    </div>
                </div>
            </div>
      );
    
    const eventosUX = eventos.map(renderEventos);

    return (
        <>
            <Header />
            {eventosUX}
        </>
    );
}