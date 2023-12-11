import { RiAddFill, RiCloseFill } from "react-icons/ri";
import { Container } from './styles';


export function MovieItem({isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} placeholder="Novo marcador" />

            <button type="button" onClick={onClick}>
                { isNew ? <RiAddFill/> : <RiCloseFill/> }
            </button>
        </Container>
    );
}