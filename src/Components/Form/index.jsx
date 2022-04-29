const Form = ({}) => {
    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Nome completo" />
                    <span></span>
                </div>
                <div>
                    <input type="text" placeholder="Endereço de e-mail"/>
                    <span></span>
                </div>
                <div>
                    <input type="text" placeholder="Confirme e-mail" />
                    <span></span>
                </div>
                <div>
                    <input type="text" placeholder="Senha" />
                    <span></span>
                </div>
                <div>
                    <input type="text" placeholder="Confirme a senha"/>
                    <span></span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Eu concordo com os Termos de Usuário</p>
                </div>
                <div>
                    <button>
                        <p>Cadastrar</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form