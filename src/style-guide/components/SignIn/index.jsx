import style from "./style.module.scss";
import { AiFillGoogleCircle } from "react-icons/ai";
// import { signInWithGoogle } from "@/utils/firebase";

const SignIn = ({ login }) => {
  const handleSignIn = async () => {
    try {
      // const { user } = await signInWithGoogle();
      const user = 1;
      if (!user) {
        alert("User Sign up failed");
        return;
      }
      console.log(user);
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          }),
        }
      );
      const res = await data.json();
      if (res.status !== "success") {
        alert("User Sign up failed");
        return;
      }
      login(res.token, res.user.photoURL, res.user._id);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={style.loginButton} onClick={handleSignIn}>
      <AiFillGoogleCircle className={style.googleLogo} />
      Login With Google
    </div>
  );
};

export default SignIn;
