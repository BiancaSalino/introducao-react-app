import './card.css'

const Card = ({ titulo, texto }) => {
    return (
        <form className="form_css">
            <fieldset className= "fieldset_css">
                <legend className="titulo_css">FORMULÁRIO DE CADASTRO</legend>
                <input className="input_css" type='text' placeholder='Nome:'></input>
                <input className="input_css" type='email' placeholder='Email:'></input>
                <input className="input_css" type='password' placeholder='Senha:'></input>
                <button className="send_button_css" type='submit'>ENVIAR</button>
            </fieldset>
            <div className="tabela">
                <table>
                    <tr>
                        <th className="nome_css">NOME</th>
                        <th className="email_css">EMAIL</th>
                        <th className="senha_css">SENHA</th>
                        <th className="acoes_css" colSpan="2">AÇÕES</th>
                    </tr>
                    <tr>
                        <td>Fulana da Silva</td>
                        <td>fulana@gmail.com</td>
                        <td>abc123</td>
                        <td className="td_buttons_css"><button className="edit_button_css">EDITAR</button></td> 
                        <td className="td_buttons_css"><button className="delete_button_css">EXCLUIR</button></td>
                    </tr>
                    <tr>
                        <td>Fulana da Silva</td>
                        <td>fulana@gmail.com</td>
                        <td>abc123</td>
                        <td className="td_buttons_css"><button className="edit_button_css">EDITAR</button></td>
                        <td className="td_buttons_css"><button className="delete_button_css">EXCLUIR</button></td>
                    </tr>
                    <tr>
                        <td>Fulana da Silva</td>
                        <td>fulana@gmail.com</td>
                        <td>abc123</td>
                        <td className="td_buttons_css"><button className="edit_button_css">EDITAR</button></td> 
                        <td className="td_buttons_css"><button className="delete_button_css">EXCLUIR</button></td>
                        
                    </tr>
                    <tr>
                        <td>Fulana da Silva</td>
                        <td>fulana@gmail.com</td>
                        <td>abc123</td>
                        <td className="td_buttons_css"><button className="edit_button_css">EDITAR</button></td> 
                        <td className="td_buttons_css"><button className="delete_button_css">EXCLUIR</button></td>
                    </tr>
                   
                </table>
            </div>
        </form>
    );
}

export default Card;
