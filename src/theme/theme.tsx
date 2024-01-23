import { ThemeOptions, createTheme } from '@mui/material/styles';
import { Lato } from "next/font/google";

const josefin_Sans = Lato({
    weight: ["400"],
    subsets: ["latin"],
});

export const theme: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9e21e0',
        },
        secondary: {
            main: '#ffd159',
        },
    },
    typography: {
        fontFamily: josefin_Sans.style.fontFamily,
    },
    components: {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 46,
                    height: 27,
                    padding: 0,
                    margin: 8,
                },
                switchBase: {
                    padding: 1,
                    '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                        transform: 'translateX(16px)',
                        color: '#fff',
                        '& + $track': {
                            opacity: 1,
                            border: 'none',
                        },
                    },
                },
                thumb: {
                    width: 24,
                    height: 24,
                },
                track: {
                    borderRadius: 13,
                    border: '1px solid #bdbdbd',
                    backgroundColor: '#fafafa',
                    opacity: 1,
                    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            },
        },
    },
    shape: {
        borderRadius: 15,
    },
});