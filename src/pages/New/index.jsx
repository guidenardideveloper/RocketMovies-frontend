import { RiSearch2Fill } from 'react-icons/ri';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';


export function New() {
    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <ButtonText title="Voltar" />
                    <header>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="inputsMovie">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações"/>

                    <div className="tagMakers">
                        <h2>Marcadores</h2>

                        <div className="editTags">
                            <MovieItem value={"Ação"} />
                            <MovieItem isNew />
                        </div>
                    </div>

                    <div className="buttonActions">
                        <Button className='removeMovie' title={"Excluir filme"}/>
                        <Button title={"Salvar alterações"}/>
                    </div>
                </Form>
            </main>
        </Container>
    );
}