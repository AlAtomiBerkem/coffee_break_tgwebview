import React from 'react';

const CityProfessionSelection = () => {
    return (
        <>
            <p>
                тут будут отображатся настройки выбор пользователя по кофебрейку
            </p>

            <form action="">
                <input type="text" placeholder='введите город в котором вы ищите собеседника'/>
                <input type="text" placeholder='выберете проффесию которой вы интересуетесь'/>
                <input type="" placeholder='выберете дополнительную проффесию'/>

                <button onChange=''>найти собиседника</button>
            </form>
        </>
    )
}

export default CityProfessionSelection;