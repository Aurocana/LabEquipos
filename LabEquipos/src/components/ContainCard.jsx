
import React, { useState, useEffect } from 'react';
import Pacmanloader from "react-spinners/Pacmanloader";


// Firebase
import { db } from "../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
import { Grid } from '@mui/material';
import CardProduct from './CardProduct';
import { data } from 'autoprefixer';

export default function ContainCard() {
    const [file, setFile] = useState([]);

    const [products, setProducts] = useState([]);

    let [loading, setLoading] = useState(true);

    /*  function chargeProducts() {
         const productCollection = collection(db, "LabEquipos");
         getDocs(productCollection)
             .then((data) => {
                 const allProductos = data.docs.map((product) => {
                     return {
                         ...product.data(),
                         id: product.id
                     };
                 });
                 setProducts(allProductos);
                 setLoading(false);
             });
     } */

    /*  useEffect(() => {
         const productCollection = collection(db, "LabEquipos");
         getDocs(productCollection)
             .then((data) => {
                 const allProductos = data.docs.map((product) => {
                     return {
                         ...product.data(),
                         id: product.id
                     };
                 });
                 setProducts(allProductos);
                 setLoading(false);
             });
     }, []);
  */
    /* useEffect(() => {
        const fileCollection = collection(file);
        getDocs(fileCollection)
            .then((data) => {
                const allFile = data.docs.map((files) => {
                    return {
                        ...file.data(),
                        id: file.id
                    };
                })
            })
    })



    setFile(allFile);
    const productCollection = collection(file);
    getDocs(productCollection)
        .then((data) => {
            const allProductos = data.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                };
            });
            setProducts(allProductos);
            setLoading(false);
        });
});

}, []); */
    useEffect(() => {
        const fileCollection1 = collection(db, "Accesorios");
        getDocs(fileCollection1)
            .then((data) => {
                const allFile = data.docs.map((products) => {
                    return {

                        ...products.data(),
                        id: products.id
                    };

                });
                setProducts([...products, allFile]);
                setLoading(false);
            })

        const fileCollection2 = collection(db, "Columna");
        getDocs(fileCollection2)
            .then((data) => {
                const allFile = data.docs.map((products) => {
                    return {

                        ...products.data(),
                        id: products.id
                    };

                });
                setProducts([...products, allFile]);
                setLoading(false);
            })
        const fileCollection3 = collection(db, "LabEquipos");
        getDocs(fileCollection3)
            .then((data) => {
                const allFile = data.docs.map((products) => {
                    return {

                        ...products.data(),
                        id: products.id
                    };

                });
                setProducts([...products, allFile]);
                setLoading(false);
            })
    }, []);
    return (


        <Grid container spacing={12}
            direcction="flex-row"
            style={{ justifyContent: "space-around", padding: "50px 0 " }}
        >
            {/* //div style= paddingTop: "5rem" */}
            {/* <button type="button" onClick={chargeProducts}>
                Hacer Peticion</button> */}
            {products[0] &&
                products.map((product) => (
                    <Grid item sm={3} md={4}>
                        <CardProduct
                            key={product.id}
                            marca={product.marca}
                            modelo={product.modelo}
                            img={product.img}
                            precio={product.precio}

                        />
                    </Grid>


                ))}
            <Pacmanloader
                color="#FF0000"
                loading={loading}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </Grid >


    );
}
