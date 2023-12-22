import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api';


export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deletedTag) {
        setTags(prevState => prevState.filter(tag => tag !== deletedTag));
    }

    async function handleNewMovie() {

        if (!title) {
            return alert("Digite o título do filme")
        }

        if (!rating) {
            return alert("Você esqueceu de adicionar uma nota de 0 a 5 para o filme.");
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        await api.post("/movienotes", {
            title,
            rating,
            description,
            tags
        });

        alert("Filme criado com sucesso!");
        navigate("/");
    }

    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <Link to="/">
                        <ButtonText title="Voltar"/>
                    </Link>
                    <header>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="inputsMovie">
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)} 
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)} 
                        />
                    </div>

                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <div className="tagMakers">
                        <h2>Marcadores</h2>

                        <div className="editTags">

                            {
                                tags.map((tag, index) => (
                                    <MovieItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <MovieItem 
                                isNew 
                                placeholder="Novo marcador"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />

                        </div>
                    </div>

                    <div className="buttonActions">
                        <Button className='removeMovie' title={"Excluir filme"} />
                        <Button title={"Salvar filme"} onClick={handleNewMovie} />
                    </div>
                </Form>
            </main>
        </Container>
    );
}