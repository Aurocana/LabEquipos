import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardProduct({ marca, modelo, img, precio }) {
    return (
        <Card sx={{ minWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450"
                    style={{ objectFit: "fill" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {marca}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${marca} / ${modelo}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`$${precio}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Agregar al carrito
                </Button>
            </CardActions>
        </Card>
    );
}

/* export default function Card({ marca, img, modelo, precio }) {
    return (


        < div style={{ border: "1px solid black", margin: "15px 15px" }} >
            <h5>{marca}</h5>
            <img src={img} />
            <h5>{modelo}</h5>
            <h4>{precio}</h4>
        </ div >
    );
}
 */