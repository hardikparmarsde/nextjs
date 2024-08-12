import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DeletePrimaryIcon } from "../../public/assets/images";
import Image from "next/image";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function LogoutDialog({ CloseLogoutDialog }) {

    const router = useRouter()
    const handleLogout = (e) => {
        e.preventDefault();
        router.push("/auth/login")
    }

    return (
        <Dialog open={open} className="dialog-container delete">
        <DialogTitle>
            Logout
        </DialogTitle>
        <DialogContent>
            <Image src={DeletePrimaryIcon} alt="Delete" className="mb-[16px]" />
            <Box component={"p"} className="text-[16px] font-poppins text-white font-medium mb-[10px]">Are you sure want to logout?</Box>
            <Box component={"p"} className="text-[16px] font-poppins text-[#9D9D9D] ">Lorem ipsum is simply dummy text of the printing and typesetting industry.</Box>
            <DialogActions>
                <Button variant="text" className="dialog-cancel-btn" onClick={CloseLogoutDialog}>
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    className="dialog-submit-btn"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
    )
}