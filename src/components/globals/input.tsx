import { TextField } from "@mui/material";

export default function Input({ type, label, value, setValue }: any) {
    return (
        <TextField 
        label={label} 
        type={type} 
        variant="outlined" 
        value={value} 
        onChange={(e) => { setValue(e.currentTarget.value) }}
        className="w-full" />
    )

}