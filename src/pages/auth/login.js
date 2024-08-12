import { LoginSchema } from '@/schema/authSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, InputLabel } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { VisibilityIcon, VisibilityNoneIcon } from '../../../public/assets/images';
import AuthLayout from '@/layout/AuthLayout';

export default function login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(LoginSchema) });
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const submitHandler = (values) => {
        if(values.vEmail === "hardik.parmar@teksun.com" && values?.vPassword === "Teksun@123") {
            router.push("/dashboard")
        }
    }
    return (
       <AuthLayout>
         <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(submitHandler)}
        >
            <Box className="flex flex-col gap-[15px] 2xl:gap-[20px] mb-[30px] 3xl:[40px]">
                <Box component="div" className="text-[#FCFCFC] text-[18px] text-center font-inter font-semibold mt-[15px] 2xl:mt-[25px] ">Welcome Back!</Box>
                <Box className="field-wrapper">
                    <InputLabel sx={{ fontFamily: "Poppins", color: "#AFB8C5", fontWeight: 500, fontSize: "14px", marginBottom: "7px" }}>Email Address</InputLabel>
                    <input
                        type="email"
                        className={`w-full rounded-[4px] px-[16px] py-[11px] bg-transparent border border-[#182141] text-[#F1F1F1] text-[14px] font-inter 
                                             ${errors?.vEmail?.message ? 'border-coralRed' : ""}`}
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="vEmail"
                        {...register('vEmail')}
                    />
                    {errors?.vEmail?.message && (
                        <Box component="div" className="text-red-500 text-[12px] mt-2 text-coralRed">{errors?.vEmail?.message}</Box>
                    )}
                </Box>
                <Box className="field-wrapper relative">
                    <InputLabel sx={{ fontFamily: "Poppins", color: "#AFB8C5", fontWeight: 500, fontSize: "14px", marginBottom: "7px" }}>Password</InputLabel>
                    <Box className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`w-full rounded-[4px] px-[16px] py-[11px] bg-transparent border border-[#182141] text-[#F1F1F1] text-[14px] font-inter 
                                             ${errors?.vPassword?.message ? 'border-coralRed' : ""}`}
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="vPassword"
                            {...register('vPassword')}
                        />
                        {
                            showPassword ?
                                <Image src={VisibilityIcon} sx={{ color: "#9D9D9D" }} className=" absolute right-[20px] top-[11px] " onClick={() => setShowPassword(false)} />
                                :
                                <Image src={VisibilityNoneIcon} sx={{ color: "#9D9D9D" }} className=" absolute right-[20px] top-[11px] " onClick={() => setShowPassword(true)} />
                        }
                    </Box>
                    {errors?.vPassword?.message && (
                        <Box component="div" className="text-red-500 text-[12px] mt-2 text-coralRed">{errors?.vPassword?.message}</Box>
                    )}
                </Box>
            </Box>
            <Box className="flex justify-end flex-wrap items-center mb-[15px] 2xl:mb-[40px]">
                {/* <FormControlLabel
                                    className="text-[#AFB8C5] login-checkbox"
                                    label="Remember me"
                                    control={<Checkbox size="small" />}
                                >
                                </FormControlLabel> */}
                {/* <Box
                            co  mponent="span"
                            className="text-[#3388F7] font-inter text-[14px] cursor-pointer"
                            onClick={handleOnClickForgotPassword}
                        >
                            Forgot Passsword?
                        </Box> */}
            </Box>
            <Button
                fullWidth
                type="submit"
                variant="contained"
                className={"auth-submit-btn"}
            >
                Login
            </Button>
        </Box>
       </AuthLayout>
    )
}
