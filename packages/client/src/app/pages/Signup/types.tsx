interface IRegistration {
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
    login: string;
    password: string;
}
export interface IRegistrationData{
    values:IRegistration;
    errors:IRegistration;
}
export interface IValidateDataArgs{
    name:"firstName"|"secondName"|"email"|"phone"|"login"|"password"
}