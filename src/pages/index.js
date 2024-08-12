import { Backdrop, Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import { DarkLogo, VisibilityIcon, VisibilityNoneIcon } from "../../public/assets/images";
import { LoginCarImg } from "../../public/assets/images";

import { useEffect, useState } from "react";
import { LoginSchema } from "@/schema/authSchema";
function Login() {
    const router = useRouter();
    // const loading = true

    const handleOnClickForgotPassword = () => {
        router.push("/auth/forgotpassword");
    }
    const submitHandler = async (values) => {
        // const data = {
        //     email: values.vEmail,
        //     password: values.vPassword,
        // }
    };

    useEffect(() => {
        router.push("auth/login")
    }, [])
    return (
<></>
    )
}

export default Login;