// [entrada].jsx
import { useParams } from "react-router-dom";

const Entrada = () => {
    const { entrada } = useParams();

    return (
        <h1>
            {entrada}
        </h1>
    );
}

export default Entrada;
