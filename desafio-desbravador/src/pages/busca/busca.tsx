import React, { useState } from "react";
import * as B from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsuario } from "../../store/actionCreators";

export const Busca = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [busca, setBusca] = useState("");
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(true);
    const [pesquisando, setPesquisando] = useState(false);

    const buscar = async(e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            fetchDadosUsuario();
        }
    }

    async function fetchDadosUsuario(){
        try {
            const response = await fetch(`https://api.github.com/users/${busca}`);
            if (response.status === 200) {
                const data = await response.json();
                dispatch(getUsuario({
                    nome: data.nome,
                    login: data.login,
                    followers: data.followers,
                    following: data.following,
                    imagem_avatar: data.avatar_url,
                    email: data.email,
                    bio: data.bio
                }));
                setUsuarioEncontrado(true);
                navigate("/perfil");
            } else {
                setUsuarioEncontrado(false);
            }
        } catch (error) {
            setUsuarioEncontrado(false);
        }
    }
    

return (
    <B.Container>
        <B.Pesquisa>
            <h1>
                Bem vindo!
            </h1>
            <p>
                Para encontrar as informações de um perfil do GitHub, basta inserir o nome do usuario no campo a baixo!
            </p>
            <input placeholder="Digite o nome de usuário do GitHub..." value={busca} onChange={(e) => setBusca(e.target.value)} onKeyDown={buscar} />
        </B.Pesquisa>
        {usuarioEncontrado === false && pesquisando === false && (
            <B.Mensagem>
                <h2>
                    Usuário não encontrado, por favor, verificar se está digitado corretamente.
                </h2>
            </B.Mensagem>
        )}

    </B.Container>
)
}