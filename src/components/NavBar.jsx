import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = function () {
    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <Link to="/RegistrationForm">
                        <div className="navbar__item">
                            <p>Профиль</p>
                        </div>
                    </Link>
                    <Link to="/CityProfessionSelection">
                        <div className="navbar__item">
                            <p>Поиск собеседника</p>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="navbar__item">
                            <p>Мэтчи</p>
                        </div>
                    </Link>
                    <Link to="/RatingForm">
                        <div className="navbar__item">
                            <link rel="stylesheet" href=""/>
                            <p>Рейтинг/статистика</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;