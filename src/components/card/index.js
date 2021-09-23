import './card.css'

const Card = ({ titulo, texto }) => {
    return (
        <form>
            <fieldset>
                <legend>Formulario</legend>
                    <input type = 'text' placeholder = 'Nome:'></input>
                    <input type = 'email' placeholder = 'Email:'></input>
                    <input type = 'password' placeholder = 'Senha:'></input>
                    <button type = 'submit'>ENVIAR</button>
            </fieldset>
        </form>
    );
}

export default Card;
