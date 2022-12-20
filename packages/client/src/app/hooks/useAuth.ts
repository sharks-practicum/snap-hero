import {useSelector} from "react-redux";
import {selectUser} from "../store/user/selectors";


const useAuth = () => {
  const {isAuth} = useSelector(selectUser);

  return {
    isAuth,
  };
};

export default useAuth;
