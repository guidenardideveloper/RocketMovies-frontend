import { Container } from "./styles";
import { RiDeleteBin3Line } from 'react-icons/ri';

export function ButtonDelete({ title, isActive = false, ...rest }) {
    return (
        <Container type='button' $isactive={isActive.toString()} {...rest}>
            <RiDeleteBin3Line/>
            {title}
        </Container>
    );
}