import { RiAddFill, RiCloseFill } from "react-icons/ri";
import { Container } from './styles';


export function MovieItem({ isNew = false, value, onClick, ...rest} ) {
    return (
        <Container $isnew={isNew} {...rest} >
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            <button type="button" onClick={onClick} >
                { isNew ? <RiAddFill/> : <RiCloseFill/> }
            </button>
        </Container>
    );
}