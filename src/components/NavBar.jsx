import '../styles/NavBar.css';

const NavBar = function () {
    return (
        <>
            <div className="navbar">
                <div className="conteiner">
                    <div className="navbar__profile">
                        <p>профиль</p>
                    </div>
                    <div className="navbar__search">
                        <p>поиск собеседника</p>
                    </div>
                    <div className="navbar__match">мэтчи</div>
                    <div className="navbar__rating">рейтинг/статистика</div>
                </div>
            </div>
        </>
    );
};

export default NavBar;