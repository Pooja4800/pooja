import React, { useState } from "react"
import "./index.css";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";

import{ Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] =useState(false);
    const[errorType, setErrorType] = useState("");
    const[errorMessage, setErrorMessage] = useState("");

    const handlelogin = () => {
        if (email == "") {
            setErrorType("email");
            setErrorMessage("Email Required");
        } else if (password == ""){
                setErrorType("pasword");
                setErrorMessage("password Required"); 
            } else {
            alert(`${email}
${password}`);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
                <TextField
                    className="textField"
                    label={"Email*"}
                    type="email"
                    value={email}
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    error={errorType === "email"}
                    helperText={errorType === "email" ? errorMessage : ""}
                />

                <FormControl variant="outlined" className="textField" error={errorType==='password'}>
                    <InputLabel htmlFor="Outlined-adorment-password">password*</InputLabel>
                    <OutlinedInput
                        id="outlined-adorment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdorment= {
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="password"
                    />
                        {errorType==='passwor'&& <p style={{color:'red'}}>{errorMessage}</p>}
                </FormControl>
                <Button variant="contained" onClick={handlelogin}>
                  Login
                </Button>
        </div>
                
    );
};

export default Login; 