import "../../Assests/Styles/Css/form.css";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { useNavigate } from "react-router-dom";


const Form = ({ addName }) => {

    const navigateReturn = useNavigate();
    const navigateFrom = useNavigate();


    const [isActive, setIsActive] = useState(true);
    const [isActiveConfirm, setIsActiveConfirm] = useState(true);
    const [isRequired, setIsRequired] = useState(true);
    const [userInput, setUserInput] = useState("");

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome completo obrigatório').min(6, "Mínimo 6 caracteres."),
        email: yup.string().email('E-mail invalido').required("E-mail obrigatório").min(10),
        confirmEmail: yup.string().email('E-mail invalido').required("E-mail obrigatório").oneOf([yup.ref('email')],
            'Os email devem corresponder'),
        password: yup.string().required("").matches("^(?=.*[A-Z])", "Necessária 1 letra maiúscula.").matches("^(?=.*[a-z])", "Necessária 1 letra minúscula.")
            .matches("^(?=.*[0-9])", "Necessária ter 1 numero").matches("^(?=.*[!#@$%&])", "Necessária 1 caractere especial").min(8, "Necessária no mínimo 8 caracteres."),
        confirmPassword: yup.string().required('Confirmação de senha necessária').oneOf([yup.ref('password')],
            'As senhas devem corresponder'),
        checkbox: yup.boolean().oneOf([true], 'Necessário aceitar os termos')


    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const formSubmit = (data) => {
        addName(data.name);
        navigateFrom('/welcome');
        reset()
    }

    const notify = () => {

        const name = errors.name ? toast.error("Nome completo obrigatório", {
            position: toast.POSITION.TOP_CENTER
        }) : null;
        const email = errors.email ? toast.error("Email obrigatório", {
            position: toast.POSITION.TOP_CENTER
        }) : null;
        const confirmEmail = errors.confirmEmail ? toast.error("Confirme o obrigatorio", {
            position: toast.POSITION.TOP_CENTER
        }) : null;
        const password = errors.password ? toast.error("Senha é obrigatorio", {
            position: toast.POSITION.TOP_CENTER
        }) : null;
        const confirmPassword = errors.confirmPassword ? toast.error('Confirmação de senha necessária', {
            position: toast.POSITION.TOP_CENTER
        }) : null;
        const checkbox = errors.checkbox ? toast.error('Necessário aceitar os termos', {
            position: toast.POSITION.TOP_CENTER
        }) : null;


    }
    const eventName = (e) => console.log(e.target.value);




    return (
        <div className="container--main-form">
            <div className="container--cadastro">
                <h3>Cadastro</h3>
            </div>
            <div className="division"></div>
            <form className=" container--form" onSubmit={handleSubmit(formSubmit)} >
                <div className="form--name">
                    <input type="text" 
                        className={errors.name ? "invalid" : ""} placeholder="Nome completo" {...register("name")} />
                    <span className="fonts--icons">u</span>
                    <span className="border--bottom"></span>

                </div>
                <div className="form--email">
                    <input type="text" className={errors.email ? "invalid" : ""} placeholder="Endereço de e-mail"{...register("email")} />
                    <span className="fonts--icons-email">M</span>
                    <span className="border--bottom-email"></span>
                </div>
                <div className="form--confirmEmail">
                    <input type="text" className={errors.confirmEmail ? "invalid" : ""} placeholder="Confirme e-mail" {...register("confirmEmail")} />
                    <span className="fonts--icons-confirmEmail">M</span>
                    <span className="border--bottom-confirmEmail"></span>
                </div>
                <div className="form--senha">
                    <input type={isActive === true ? "password" : "text"} className={errors.password ? "invalid" : ""} placeholder="Senha" {...register("password")} />
                    <span className="fonts--icons-senha" onClick={() => setIsActive(!isActive)}>{isActive === true ? "L" : "U"}</span>
                    <span className="border--bottom-senha"></span>
                    {<span className={errors.password ? "input--NotFilled" :
                        "input--correct"}>{errors.password?.message}</span>}
                </div>
                <div className="form--confirmSenha">
                    <input type={isActiveConfirm === true ? "password" : "text"} className={errors.confirmPassword ? "invalid" : ""} placeholder="Confirme a senha" {...register("confirmPassword")} />
                    <span className="fonts--icons-confirmSenha" onClick={() => setIsActiveConfirm(!isActiveConfirm)}>{isActiveConfirm === true ? "L" : "U"}</span>
                    <span className="border--bottom-confirmSenha"></span>
                </div>
                <div className="form--checkbox">
                    <input type="checkbox" className={errors.checkbox ? "input--NotFilled-checkbox" :
                        "input--correct"} {...register("checkbox")} />
                    <p>Eu concordo com os Termos de Usuário</p>
                </div>
                <div className="form--button">
                    <button onClick={notify}>
                        <p>Cadastrar</p>
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Form