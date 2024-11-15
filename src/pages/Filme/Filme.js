import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme.css'

import api from '../../services/api';

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "6648f19b8f09e1fc8d551f5926a5fcb3",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/', { replace: true});
                    return;
                })
        }

        loadFilme();

        return () => {
            console.log("Componente desmontado");
        }
    }, [navigate, id]);

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10 </strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button><a href="#">Trailer</a></button>
            </div>
        </div>
    )
};

export default Filme;