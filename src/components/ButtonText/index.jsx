import { RiArrowLeftLine } from 'react-icons/ri';
import { Container } from './styles';


export function ButtonText({ title, ...rest }) {
    return (
        <Container type='button' {...rest}>
            <RiArrowLeftLine/>
            {title}
        </Container>
    );
}