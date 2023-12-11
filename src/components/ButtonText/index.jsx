import { RiArrowLeftLine } from 'react-icons/ri';
import { Container } from './styles';


export function ButtonText({ title, isActive = false, ...rest }) {
    return (
        <Container type='button' $isactive={isActive.toString()} {...rest}>
            <RiArrowLeftLine/>
            {title}
        </Container>
    );
}