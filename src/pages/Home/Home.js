import { useEffect, useState } from "react";
import api from "../../../services/api";

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadingFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "6648f19b8f09e1fc8d551f5926a5fcb3",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results);
        }

        loadingFilmes();
    }, [])
    return (
        <div>
            <h1>Bem-vindo ao nossa Home</h1>
        </div>
    )
}

export default Home;