import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'

// URL DA API: /movie/now_playing?api_key=6648f19b8f09e1fc8d551f5926a5fcb3&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "6648f19b8f09e1fc8d551f5926a5fcb3",
         language: "pt-BR",
         page: 1,
        }
      })

    //   console.log(response.data.results);
    setFilmes(response.data.results.slice(0,15));

    }

    loadFilmes();
    setLoading(false);

  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return(
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme) => {
            return (
                <article key={filme.id}>
                    <strong>{filme.title}</strong>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                    <Link to={`/filme/${filme.id}`}>Acessar</Link>
                </article>
            )
        })}
      </div>
    </div>
  )
}

export default Home;