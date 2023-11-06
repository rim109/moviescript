import { useNavigate } from 'react-router-dom';
import './Loginicon.css'


const Loginicon = () => {
    const navigate = useNavigate();

    const navigatelogin = () => {
        navigate("/pages/Loginpage")
    }

    const navigateres = () => {
        navigate("/pages/Reserveration")
    }
    return (
        <>
        <div className="login-img" onClick={navigatelogin}>
            <img
            src="https://cdn-icons-png.flaticon.com/512/8109/8109306.png" width={150} height={150} />
        
        </div>
        <div className="res-img" onClick={navigateres}>
            <img
            src="https://cdn-icons-png.flaticon.com/512/4088/4088034.png" width={160} height={160} />
        </div>
        <div className="movie-img">
            <img
            src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" width={150} height={150} />
        </div>
        <div className="popcon-img">
            <img
            src="https://cdn-icons-png.flaticon.com/512/2798/2798007.png" width={150} height={150} />
        </div>
        <div className="film-img">
            <img
            src="https://cdn-icons-png.flaticon.com/512/1275/1275136.png" width={145} height={145} />
        </div>
        <div className="film2-img">
            <img
            src="https://cdn-icons-png.flaticon.com/512/1974/1974054.png" width={150} height={150} />
        </div>
        <div className="camera-img">
            <img
            src="https://cdn-icons-png.flaticon.com/512/2699/2699194.png" width={150} height={150} />
        </div>


        </>
    )
}

console.log()

export default Loginicon