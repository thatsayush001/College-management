import { onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Styles from "./LoginForm.module.css";
import { getAuth, signInWithRedirect } from "firebase/auth";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook"
// const auth = getAuth();
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FullScreenDialog from "../FullScreenDialog/FullScreenDialog";
// import { GoogleAuthProvider } from "firebase/auth";


export default function LoginForm() {
    // console.log(Styles)
    const [userid, setuserid] = useState("");

    const google_login = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                const user = result.user;
                // userid=result.user;
                setuserid(result.user)
                localStorage.setItem("uid", result.user)
                // IdP data available using getAdditionalUserInfo(result)
                console.log(user);
                // ...
                // window.location.href = '/dashboard';
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential);
                //
            });
        //  signInWithRedirect(auth, provider);
        setTimeout(() => { }, 3000);
    };
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");



    const submitform = async (e) => {
        e.preventDefault();
        if (
            submitStudentName === false ||
            submitStudentEmail === false ||
            submitStudentPass === false
        ) {
            console.log("sent");
        } else {
            var form = new FormData(e.target);

            let arr = [];
            var i = 0;
            console.log(form.entries());
            for (var pair of form.entries()) {
                console.log(pair);
                arr[i] = pair[1];
                i++;
                // console.log(form.values())
            }

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, arr[1], arr[2])
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    console.log(user + "user created");
                    const close = document.getElementById("container");
                   const a= document.getElementById("autoclick2")
                //    const b= document.getElementById("disable_mj")
                //    b.style.display="none"

                   a.click();
                    setInterval(() => {
                        close.style.display = "none";
                    }, 150);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    };

    const loginner = async (e) => {
        e.preventDefault();
        if (false) {
        } else {
            var form2 = new FormData(e.target);
            console.log(e.target);
            console.log(form2.entries());
            let arr = [];
            var i = 0;

            console.log({ loginEmail, loginPassword });

            // for (var pair of form2.entries()) {
            //   console.log(pair);
            //   arr[i] = pair[1];
            //   // console.log(arr[i])
            //   i++;
            //   console.log(i);
            // }

            form2.forEach((file) => {
                console.log(file);
            });
            // console.log(arr)
            const auth = getAuth();
            signInWithEmailAndPassword(auth, loginEmail, loginPassword)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user + ".then method of signInWithEmailAndPassword");
                    const close = document.getElementById("container");
                    console.log(userCredential.uid)
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            // User is signed in, see docs for a list of available properties
                            // https://firebase.google.com/docs/reference/js/firebase.User
                            const uid = user.uid;
                            // userid=user.uid;
                            setuserid(user.uid)
                            localStorage.setItem("uid", user.uid)

                            console.log(uid + " onauthataechanged is working");
                            // ...
                        } else {
                            // User is signed out
                            // ...
                            console.log("USER signed out onauthstatechanged");
                        }
                    });
                    setInterval(() => {
                        close.style.display = "none";
                    }, 1000);
                    document.getElementById("autoclick").click();
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode + "of signInWithEmailAndPassword");
                    const errorMessage = error.message;
                    console.log(
                        errorMessage + "of signInWithEmailAndPassword errormessage"
                    );
                });
        }
        // onAuthStateChanged(auth, (user) => {
        //   if (user) {
        //     // User is signed in, see docs for a list of available properties
        //     // https://firebase.google.com/docs/reference/js/firebase.User
        //     const uid = user.uid;
        //     console.log(uid + "onauthataechanged is working");
        //     // ...
        //   } else {
        //     // User is signed out
        //     // ...
        //     console.log("USER signed out onauthstatechanged");
        //   }
        // });
    };

    // useEffect(()=>{
    //alert this may be harmful ,i added custom login but for now its a failure

    //  const newPostKey = push(child(ref(database), 'users')).key;
    //  // console.log(user)
    //  const updates = {};
    // updates['/users/' + newPostKey] = user
    //  update(ref(database), updates).then(()=>{
    //    const a=document.getElementById('container')
    //    setTimeout(() => {
    //      a.style.display="none";
    //      console.log("done")
    //    }, 4000);
    //  })
    //  })

    //! Handles the sliding of blue div
    const signUpButton = () => {
        const container = document.getElementById("container");
        container.classList.add(Styles["right-panel-active"]);
        console.log("sign up button clicked");
        console.log(sLogin);
    };
    const signInButton = () => {
        const container = document.getElementById("container");
        container.classList.remove(Styles["right-panel-active"]);
    };

    const divStyle = {
        color: "red",
        fontSize: "14px",
        textAlign: "left",
    };

    //! Handles the checks applied on create new account section

    const [studentMessage, setstudentMessage] = useState("");
    const [submitStudentName, setsubmitStudentName] = useState(false);
    const [submitStudentEmail, setsubmitStudentEmail] = useState(false);
    const [submitStudentPass, setsubmitStudentPass] = useState(false);

    const valueOfStudentName = (event) => {
        const val = event.target.value;
        setsubmitStudentName(val);
        const regex = /[^a-zA-Z\s]/;
        console.log(val);
        if (val.length > 0 && regex.test(val)) {
            setstudentMessage("* Only alphabets allowed");
            setsubmitStudentName(false);
        } else {
            setstudentMessage("");
            setsubmitStudentName(true);
        }
    };

    const valueOfStudentEmail = (event) => {
        const val = event.target.value;
        setsubmitStudentEmail(val);
        // const regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        const regex = /^[a-zA-Z]{3}20\d{2}\d{3}@iiitl\.ac\.in$/;
        console.log(val);
        if (val.length > 0 && !regex.test(val)) {
            setstudentMessage("* Please Enter throughyour College Mail Id");
            setsubmitStudentEmail(false);
        } else {
            setstudentMessage("");
            setsubmitStudentEmail(true);
        }
    };

    const valueOfStudentPassword = (event) => {
        const val = event.target.value;
        setsubmitStudentPass(val);
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        // console.log(val);
        if (val.length < 8) {
            setstudentMessage("* Password must be of at least 8 characters");
            setsubmitStudentPass(false);
        } else if (val.length > 20) {
            setstudentMessage("* Password must be of at most 20 characters");
            setsubmitStudentPass(false);
        } else {
            if (!regex.test(val)) {
                setstudentMessage("* Password must have 1 Capital & 1 special chars");
                setsubmitStudentPass(false);
            } else {
                setstudentMessage("");
                setsubmitStudentPass(true);
            }
        }
    };

    const [width, setWidth] = useState(window.innerWidth);

    //! Handles the display of which div is to be displayed at what time
    const [sLogin, setsLogin] = useState("true");
    const [Login, setLogin] = useState("true");

    //// JADOO CODE ( COPYRIGHT MJ )
    setInterval(() => {
        setWidth(window.innerWidth);
    }, 900);

    //! Handles the closing of login form
    const closeForm = () => {
        const close = document.getElementById("container");
        // setInterval(() => {
        //     close.style.display = "none";
        // }, 150);
        // window.close();
    };

    return (
        <motion
            initial={{ opacity: 0, x: "-1000px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
        >

            <div className={Styles.container} id="container">
                <div
                    className={`${Styles['form-container']} ${Styles['sign-up-container']}`}
                    style={
                        width < 850
                            ? { display: sLogin ? "none" : "block" }
                            : { display: sLogin ? "block" : "none" }
                    }
                >
                    <div className={Styles.Login_cross2} onClick={closeForm}>
                        <Link to={'/'}>&times;</Link>
                    </div>
                    <div className={Styles.form}>
                        <h1 className={Styles.Login_h1}>Create Account</h1>
                        <div className={Styles.createAccount}>
                            <div className={Styles.accountType}>
                                {
                                    <div className={Styles.NewSignUp}>
                                        <input
                                            className={Styles.Login_input_tag}
                                            type="radio"
                                            id="memberSignUp"
                                            name="tabby-tabs"
                                        />
                                        <label htmlFor="memberSignUp" className={Styles.signUp_Tabs}>
                                            Others
                                        </label>
                                        <div className={`${Styles.member} ${Styles.content}`}>
                                            <form
                                                className={`${Styles.memberForm} ${Styles.Login_form_tag}`}
                                                id="formdata"
                                                onSubmit={(e) => {
                                                    submitform(e);
                                                }}
                                            >
                                                <div className={Styles["social-container"]}>
                                                    <FacebookIcon
                                                        className={Styles.coloradd}
                                                        onClick={google_login}
                                                    />
                                                    <GoogleIcon
                                                        className={Styles.coloradd}
                                                        onClick={google_login}
                                                    />
                                                    <GitHubIcon
                                                        className={Styles.coloradd}
                                                        onClick={google_login}
                                                    />
                                                </div>
                                                <span className={Styles.Login_span_tag}>
                                                    or use your email for registration
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    id="name"
                                                    className={`${Styles.sUpUserName} ${Styles.Login_input_tag}`}
                                                    name="name"
                                                    required
                                                />
                                                {/* <label htmlFor="name">Full name</label> */}
                                                {/* <input
              className="sUpUserName Login_input_tag"
              autoComplete="off"
              type="text"
              id="name"
              name="name"
              required
            /> */}
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    id="Email"
                                                    className={`${Styles.sUpUserEmail} ${Styles.Login_input_tag}`}
                                                    name="Email"
                                                    required
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    id="Password"
                                                    name="Password"
                                                    className={`${Styles.sUpUserPassword} ${Styles.Login_input_tag}`}
                                                    required
                                                />
                                                <select
                                                    name="Wing"
                                                    id="Wing"
                                                    placeholder="Select your Wing"
                                                    className={Styles.sUpUserWing}
                                                    required
                                                >
                                                    <option>Select your Wing</option>
                                                    <option>Competitive Programming (CP)</option>
                                                    <option>Machine Learning (ML)</option>
                                                    <option>Blockchain</option>
                                                    <option>Web Development</option>
                                                    <option>App Development</option>
                                                    <option>Design Wing</option>
                                                    <option>infosec Wing</option>
                                                </select>
                                                <div id="sUpMemberAlert" style={divStyle}>
                                                    <br />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className={`${Styles.button} ${Styles.MainButtons}`}
                                                    // value="Sign Up"
                                                    form="formdata"
                                                    name="submit"
                                                >
                                                    Sign Up
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                }

                                <div className={Styles.NewSignUp}>
                                    <input
                                        className={Styles.Login_input_tag}
                                        type="radio"
                                        id="studentSignUp"
                                        name="tabby-tabs"
                                        checked
                                        readOnly
                                    />
                                    <label htmlFor="studentSignUp" className={Styles.signUp_Tabs}>
                                        Student
                                    </label>

                                    <div className={`${Styles.student} ${Styles.content}`}>
                                        <form
                                            className={`${Styles.studentForm} ${Styles.Login_form_tag}`}
                                            onSubmit={(e) => submitform(e)}
                                            id="my-form-signup2"
                                        >
                                            <div className={Styles["social-container"]}>
                                                <FacebookIcon
                                                    className={Styles.coloradd}
                                                    onClick={google_login}
                                                />
                                                <GoogleIcon
                                                    className={Styles.coloradd}
                                                    onClick={google_login}
                                                />
                                                <GitHubIcon
                                                    className={Styles.coloradd}
                                                    onClick={google_login}
                                                />
                                            </div>
                                            <span className={Styles.Login_span_tag}>
                                                or use your email for registration
                                            </span>
                                            <input
                                                type="text"
                                                // defaultValue={user.studentName}
                                                onChange={valueOfStudentName}
                                                placeholder="Name"
                                                id="studentName"
                                                name="name"
                                                className={`${Styles.sUpUserName} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                onChange={valueOfStudentEmail}
                                                id="studentEmail"
                                                name="Email"
                                                // defaultValue={user.Email}
                                                className={`${Styles.sUpUserEmail} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                onChange={valueOfStudentPassword}
                                                id="studentPassword"
                                                // defaultValue={user.Password}
                                                name="Password"
                                                className={`${Styles.sUpUserPassword} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <div id="sUpStudentAlert" style={divStyle}>
                                                {studentMessage}
                                                <br />
                                            </div>

                                            <input
                                                type="submit"
                                                className={`${Styles.button} ${Styles.MainButtons}`}
                                                value="Sign Up"
                                                form="my-form-signup2"
                                            />
                                            <FullScreenDialog/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`${Styles['form-container']} ${Styles['sign-in-container']}`}
                    style={
                        width < 850
                            ? { display: Login ? "block" : "none" }
                            : { display: Login ? "block" : "block" }
                    }
                >
                    <div className={Styles.Login_cross} onClick={closeForm}>
                        <Link to={'/'}>&times;</Link>
                    </div>

                    <form
                        className={`${Styles.Login_form_tag} ${Styles.Login_login}`}
                        id="signinform"
                        onSubmit={(e) => {
                            loginner(e);
                        }}
                    >
                        <h1 className={Styles.Login_h1}>Log In</h1>
                        <div className={Styles["social-container"]}>
                            <FacebookIcon
                                className={Styles.coloradd}
                                onClick={google_login}
                            />
                            <GoogleIcon
                                className={Styles.coloradd}
                                onClick={google_login}
                            />
                            <GitHubIcon
                                className={Styles.coloradd}
                                onClick={google_login}
                            />
                        </div>
                        <span className={Styles.Login_span_tag}>or use your account</span>
                        <input
                            className={Styles.Login_input_tag}
                            type="email"
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <input
                            className={Styles.Login_input_tag}
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <a className={Styles.Login_a_tag} href="/">
                            Forgot your password?
                        </a>
                        <button className={`${Styles.Login_btn_tag} ${Styles.MainButtons}`} type="submit" form="signinform">
                            Log In
                        </button>
                        <button
                            className={`${Styles.reverseGhost} ${Styles.Login_btn_tag} `}
                            id="signUpOnLogin"
                            onClick={(e) => {
                                setsLogin(!sLogin);
                                setLogin(!Login);
                                e.preventDefault();
                            }}
                        >
                            Sign Up
                        </button>
                    </form>
                    <Link to="/dashboard" id="autoclick" style={{ display: 'none' }}>click me</Link>
                </div>
                <div className={Styles["overlay-container"]}>
                    <div className={Styles.overlay}>
                        <div className={`${Styles["overlay-panel"]} ${Styles["overlay-left"]}`}>
                            <h1 className={Styles.Login_h1}>Hello, Friend!</h1>
                            <p className={Styles.Login_p_tag}>
                                Enter your personal details and start journey with us
                            </p>
                            <button
                                className={`${Styles.ghost} ${Styles.Login_btn_tag}`}
                                id="signIn"
                                onClick={signInButton}
                            >
                                Log In
                            </button>
                        </div>
                        <div className={`${Styles["overlay-panel"]} ${Styles["overlay-right"]}`}>
                            <h1 className={Styles.Login_h1}>Welcome Back!</h1>
                            <p className={Styles.Login_p_tag}>
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                className={`${Styles.ghost} ${Styles.Login_btn_tag}`}
                                id="signUp"
                                onClick={signUpButton}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion>
    );
}
// export {userid};