import './card.css'

const Card = ({ titulo, texto }) => {
    return (
        <form className="form_css">
            <fieldset className= "fieldset_css">
                <legend className="titulo_css">Formulário de cadastro</legend>
                <input className="input_css" type='text' placeholder='Nome:'></input>
                <input className="input_css" type='email' placeholder='Email:'></input>
                <input className="input_css" type='password' placeholder='Senha:'></input>
                <button className="send_button_css" type='submit'>ENVIAR</button>
            </fieldset>
        </form>
    );
}

export default Card;
