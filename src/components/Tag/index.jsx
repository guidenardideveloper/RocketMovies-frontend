import { Container } from './styles';

export function Tag({ title, variant, ...rest }) {
    return (
        <Container $variant={variant} {...rest}>
            {title}
        </Container>
    );
}