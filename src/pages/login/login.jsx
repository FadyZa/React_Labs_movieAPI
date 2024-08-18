import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loginStyle.css"
import { SectionTitle } from "../../components/sectionTitle";

export function Login() {
    const [user, setUser] = useState({
        email: "fady@gmail.com",
        password: "Test@123",
    });

    const [err, setErr] = useState({
        emailErr: "",
        passwordErr: "",
    });



    const getFormVals = (e) => {
        const emailRegex = new RegExp("^[a-zA-Z][a-zA-Z0-9-\_]*@[a-zA-Z]{2,10}\.(com|eg|net)$");
        const passRegex = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$");


        if (e.target.name == "email") {
            console.log(emailRegex.test(e.target.value));
            setUser({
                ...user,
                email: e.target.value
            })

            setErr({
                ...err,
                emailErr: !emailRegex.test(e.target.value) && "enter a valid Email"
            })
        }


        if (e.target.name == "password") {
            setUser({
                ...user,
                password: e.target.value
            })

            setErr({
                ...err,
                passwordErr: !passRegex.test(e.target.value) && "enter a valid Password"
            })
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const triggerPassword = () => {
        setShowPassword(!showPassword);
    }





    return (
        <>
            <SectionTitle title="login" />
            <Form className="bg-light text-dark w-50 mx-auto mt-2 rounded-2 p-3">
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={user.email}
                        name="email"
                        onChange={(e) => getFormVals(e)}
                    />
                    <p className="text-danger text-capitalize p-2">{err.emailErr}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative triggerPassword">
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={user.password}
                            name="password"
                            onChange={(e) => getFormVals(e)}
                        />
                        <i
                            className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                            onClick={() => triggerPassword()}
                        ></i>
                    </div>
                    <p className="text-danger text-capitalize p-2">{err.passwordErr}</p>
                </Form.Group>

                <Button
                    disabled={
                        err.confirmPasswordErr ||
                            err.emailErr ||
                            err.nameErr ||
                            err.passwordErr ||
                            err.userNameErr
                            ? true
                            : false
                    }
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </>
    );
}

