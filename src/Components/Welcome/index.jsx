import { Link, useNavigate, useParams } from "react-router-dom";
import "../../Assests/Styles/Css/welcome.css"


const Welcome = ({ addName }) => {

    const navigate = useNavigate();


    const handleNavigate = () => navigate(-1)

    return (
        <>
            <h2 className="welcome--title">Cadastro finalizado</h2>
            <div className="container--welcome">
                <div className="welcome--addName">
                    <p className="add--welcome">Bem vindo, </p>
                    <p><span>{addName} !</span></p>
                </div>
                <div className="welcome--btn">
                    <button onClick={handleNavigate}>
                        <p>Voltar</p>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Welcome