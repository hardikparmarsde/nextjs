import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AuthLayout({ children }) {
    const router = useRouter();
    return (
        <Box className="min-h-screen">
            <Box className="auth-container">
                <Box className="auth-box">
                    <Box className="auth-content-wraper">
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthLayout;