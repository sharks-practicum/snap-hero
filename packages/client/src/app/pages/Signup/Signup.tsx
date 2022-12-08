import { ChangeEvent, FC, useState } from "react";
import s from "./Signup.module.scss"
import Button from "../../components/core/Button/Button";
import { Input } from "../../components/core";
import { IRegistrationData, IValidateDataArgs } from "./types";
import { inputValidator } from "../../Utils";
import { Link } from "react-router-dom";


const Signup: FC = () => {
    const [registrationData, setRegistrationData] = useState<IRegistrationData>({
        values: {
            firstName: "",
            secondName: "",
            email: "",
            phone: "",
            login: "",
            password: "",
        },
        errors: {
            firstName: "",
            secondName: "",
            email: "",
            phone: "",
            login: "",
            password: "",
        }
    });

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
        console.log({ [name]: value })
        setRegistrationData({
            ...registrationData,
            values: {
                ...registrationData.values,
                [name]: value
            }
        });
    }

    const validateData = ({ name }: IValidateDataArgs) => {
        setRegistrationData((prevState) => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [name]: inputValidator({ type: name, value: (prevState.values[name]) })
            }
        }));
    }
    const error = registrationData.errors.firstName || registrationData.errors.secondName
        || registrationData.errors.email || registrationData.errors.phone
        || registrationData.errors.login || registrationData.errors.password
    const value = registrationData.values.firstName && registrationData.values.secondName
        && registrationData.values.email && registrationData.values.phone
        && registrationData.values.login && registrationData.values.password
    const isButtonDisabled = !!error || !value.length

    return (
        <div className={s.signup__wrapper}>
            <div className={s.signup}>
                <span className={s.signup__title}>
                    Регистрация
                </span>
                <form className={s.signup__form} onSubmit={(e) => { e.preventDefault(); console.log(registrationData) }}>
                    <Input
                        className={s.signup__input}
                        value={registrationData.values.firstName}
                        placeholder="Имя"
                        error={registrationData.errors.firstName}
                        onBlur={() => validateData({ name: "firstName" })}
                        onChange={handleChange}
                        name="firstName"
                    />
                    <Input
                        className={s.signup__input}
                        value={registrationData.values.secondName}
                        placeholder="Фамилия"
                        error={registrationData.errors.secondName}
                        onBlur={() => validateData({ name: "secondName" })}
                        onChange={handleChange}
                        name="secondName"
                    />
                    <Input
                        className={s.signup__input}
                        value={registrationData.values.email}
                        placeholder="Email"
                        error={registrationData.errors.email}
                        onBlur={() => validateData({ name: "email" })}
                        onChange={handleChange}
                        name="email"
                    />
                    <Input
                        className={s.signup__input}
                        value={registrationData.values.phone}
                        placeholder="Телефон"
                        error={registrationData.errors.phone}
                        onBlur={() => validateData({ name: "phone" })}
                        onChange={handleChange}
                        name="phone"
                    />
                    <Input
                        className={s.signup__input}
                        value={registrationData.values.login}
                        placeholder="Логин"
                        error={registrationData.errors.login}
                        onBlur={() => validateData({ name: "login" })}
                        onChange={handleChange}
                        name="login"
                    />
                    <Input
                        className={s.signup__input}
                        value={registrationData.values.password}
                        placeholder="Пароль"
                        type="password"
                        error={registrationData.errors.password}
                        onBlur={() => validateData({ name: "password" })}
                        onChange={handleChange}
                        name="password"
                    />
                    <Button className={s.signup__button} disabled={isButtonDisabled}>
                        Зарегистрироваться
                    </Button>
                </form>
                <Link className={s.signup__link} to="/login">У вас есть аккаунт? Войти</Link>
            </div>
        </div>
    )
}

export default Signup