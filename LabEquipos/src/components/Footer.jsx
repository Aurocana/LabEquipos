import * as React from 'react';
import { Box, Typography } from '@mui/material';


export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "black",
                color: "white",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "150px",
            }}
        >
            <Typography variant="body1" >Conocemos </Typography>
            <Typography variant="body1" > Contactanos </Typography>

            <Typography variant="body1" > Saludanos </Typography>
        </Box>
    );
}