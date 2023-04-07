import style from "./style.module.scss";
import { AiOutlineLogout } from "react-icons/ai";

const SignOut = ({ logout }) => {
  return (
    <div className={style.logoutButton} onClick={logout}>
      <AiOutlineLogout className={style.logoutIcon} />
      Logout
    </div>
  );
};

export default SignOut;
