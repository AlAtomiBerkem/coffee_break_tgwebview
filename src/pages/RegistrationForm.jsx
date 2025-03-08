import React from "react";

const RegistrationForm = () => {
    return  (
        <>
            <p>тут пользователь будет регистрировать свой профиль</p>
            <form>
                <input type="text" placeholder="введите ваше имя"/>
                <input type="text" placeholder='введите город в котором вы хотите сходить на чашечку кофе'/>
                <input type="text" placeholder='введите вашу профессию'/>
                <input type="text" placeholder='введите стаж работы'/>
                <input type="text" placeholder='расскажите немного о себе'/>

                <button onSubmit='submmit'>отправить данные</button>
            </form>
        </>
    )
}

export default RegistrationForm;