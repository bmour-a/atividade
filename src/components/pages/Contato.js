import ItemFormulario from "./ItemFormulario"

function Contato() {
    return (
        <div>
            <ItemFormulario name="Nome" tipo="text" placeholder="digite seu nome" />
            <ItemFormulario name="Email" tipo="text" placeholder="digite seu email" />
            <ItemFormulario name="Assunto" tipo="text" placeholder="digite seu assunto" />
            <textarea placeholder="Deixe sua mensagem"></textarea>
            <button type="submit">Enviar</button>
        </div>
    )
}
export default Contato