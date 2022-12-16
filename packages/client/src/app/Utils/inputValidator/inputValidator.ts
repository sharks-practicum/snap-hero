interface IInputValidatorArgs{
  type: string;
  value: string;
}

const inputValidator = ({type, value}:IInputValidatorArgs): string => {
	let error = "";
	switch (type) {
	case "login":
		if (~value.search(/[^a-zA-Z0-9\-_]| /) || value.length < 3 || value.length > 20 || !~value.search(/[a-zA-Z]/)) {
			error = "Некорректный логин";
		}

		break;
	case "password":
		if (!~value.search(/[A-ZА-Я]/) || !~value.search(/[0-9]/) || value.length > 40 || value.length < 8) {
			error = "Некорректный пароль";
		}

		break;
	case "secondName":
	case "firstName":
		if (~value.search(/[^A-Za-zА-Яа-я-]/) || value.search(/[A-ZА-Я]/) !== 0) {
			error = type==="firstName"
        ?"Некорректное имя"
        :"Некорректная фамилия";
		}
		break;
	case "email":
		if (~value.search(/[А-Яа-я]/) || !~value.search(/@\w+\.\w+/)) {
			error = "Некорректная почта";
		}

		break;
	case "phone":
		if ((~value.search(/[^0-9]/) && ~value.search(/[^0-9]/)) || value.length < 10 || value.length > 15) {
			error = "Некорректный номер";
		}

		break;

	}

	return error;
};

export default inputValidator;
