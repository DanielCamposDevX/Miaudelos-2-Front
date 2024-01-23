import { AccountCircle, Add, Logout, Pets } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ReactEventHandler, useState, MouseEvent } from "react";

export default function UserOptions() {
    const [anchorEl, setAnchorEl] = useState<any>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <AccountCircle color='primary' sx={{ fontSize: '30px' }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem className="gap-3 h-16" onClick={handleClose}>
                    <AccountCircle color="primary" />
                    Meu Perfil
                </MenuItem>

                <MenuItem className="gap-3 h-16" onClick={handleClose}>
                    <Add color="primary" />
                    Adicionar novo gato
                </MenuItem>

                <MenuItem className="gap-3 h-16" onClick={handleClose}>
                    <Pets color="primary" />
                    Meus gatos
                </MenuItem>

                <MenuItem className="gap-3 h-16" onClick={handleClose}>
                    <Logout color="primary" />
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
