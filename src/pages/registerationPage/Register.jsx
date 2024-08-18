import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SectionTitle } from "../../components/sectionTitle";

export function Register() {
    const [user, setUser] = useState({
        name: "fady",
        email: "fady@gmail.com",
        userName: "fadyZa",
        password: "Test@123",
        confirmPassword: "Test@123"
    });

    const [err, setErr] = useState({
        nameErr: "",
        emailErr: "",
        userNameErr: "",
        passwordErr: "",
        confirmPasswordErr: ""
    });



    const getFormVals = (e) => {
        const emailRegex = new RegExp("^[a-zA-Z][a-zA-Z0-9-\_]*@[a-zA-Z]{2,10}\.(com|eg|net)$");
        const passRegex = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$");
        const userNameRegex = new RegExp("^[a-zA-Z0-9]{3,10}$");

        if (e.target.name == "name") {
            setUser({
                ...user,
                name: e.target.value
            })

            setErr({
                ...err,
                nameErr: e.target.value.length < 2 && "this field is requred enter a valid name"
            })
        }

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

        if (e.target.name == "userName") {
            console.log((userNameRegex).test(e.target.value));
            setUser({
                ...user,
                userName: e.target.value
            })

            setErr({
                ...err,
                userNameErr: !userNameRegex.test(e.target.value) && "enter a user name"
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

        if (e.target.name == "rePassword") {
            setUser(prevState => ({
                ...prevState,
                confirmPassword: e.target.value
            })
            )

            setErr({
                ...err,
                confirmPasswordErr: e.target.value !== user.password && "the rePassword does not match the password"
            })
        }

    }

    const [showPassword, setShowPassword] = useState(false);

    const triggerPassword = () => {
        setShowPassword(!showPassword);
    }



    return (
        <>
            <SectionTitle title="sign up" />
            <Form className="bg-light text-dark w-50 mx-auto mt-2 rounded-2 p-3">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={user.name} name="name" onChange={(e) => getFormVals(e)} />
                    <p className="text-danger text-capitalize p-2">{err.nameErr}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => getFormVals(e)} />
                    <p className="text-danger text-capitalize p-2">{err.emailErr}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" value={user.userName} name="userName" onChange={(e) => getFormVals(e)} />
                    <p className="text-danger text-capitalize p-2">{err.userNameErr}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative triggerPassword">
                        <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" value={user.password} name="password" onChange={(e) => getFormVals(e)} />
                        <i className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={() => triggerPassword()}></i>
                    </div>
                    <p className="text-danger text-capitalize p-2">{err.passwordErr}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <h2>{user.confirmPassword}</h2>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re Password" value={user.confirmPassword} name="rePassword" onChange={(e) => getFormVals(e)} />
                    <p className="text-danger text-capitalize p-2">{err.confirmPasswordErr}</p>
                </Form.Group>

                <Button disabled={err.confirmPasswordErr || err.emailErr || err.nameErr || err.passwordErr || err.userNameErr ? true : false} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

