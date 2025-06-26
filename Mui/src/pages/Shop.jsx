import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Sample diffuser products (replace images with your own if needed)
const products = [
    {
        id: 1,
        name: "Mauris malesuada odio",
        desc: "diffusers",
        price: "$47.90",
        image: "/assets/perfume1.jpg", 
        rating: 3,
    },
    {
        id: 2,
        name: "Faucibus metus blandit",
        desc: "diffusers",
        price: "$42.90",
        image: "/assets/perfume2.jpg", 
        rating: 4,
    },
    {
        id: 3,
        name: "Fusce egestas odio",
        desc: "diffusers",
        price: "$24.90",
        image: "/assets/perfume3.jpg", 
        rating: 5,
    },
    {
        id: 4,
        name: "Vitae augue scelerisque",
        desc: "diffusers",
        price: "$24.90",
        image: "/assets/perfume4.jpg", 
        rating: 5,
    },
    {
        id: 5,
        name: "Laoreet nisi bibendum",
        desc: "diffusers",
        price: "$24.90",
        image: "/assets/perfume5.jpg", 
        rating: 3,
    },
    {
        id: 6,
        name: "Sed ultricies nisi ut",
        desc: "diffusers",
        price: "$24.90",
        image: "/assets/perfume6.jpg", 
        rating: 5,
    },
    {
        id: 7,
        name: "Suspendisse id luctus metus",
        desc: "diffusers",
        price: "$24.90",
        image: "/assets/perfume8.jpg", 
        rating: 3,
    },
    {
        id: 8,
        name: "Effictur tincidunt ornare",
        desc: "diffusers",
        price: "$24.90",
        image: "/assets/perfume7.webp", 
        rating: 4,
    },
];

export default function Shop() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #e0f7fa 0%, #fffde4 100%)',  
                py: 4,
                px: { xs: 2, md: 8 },
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: "#232b3b",
                    textAlign: "center",
                    fontFamily: "inherit",
                    fontWeight: 400,
                    mb: 1,
                }}
            >
                Popular Products
            </Typography>
            <Box sx={{ textAlign: "center", mb: 4 }}>
                {[...Array(8)].map((_, i) => (
                    <StarIcon
                        key={i}
                        sx={{
                            color: "#7ee0d6",
                            fontSize: 18,
                            mx: 0.2,
                            verticalAlign: "middle",
                        }}
                    />
                ))}
            </Box>
            <Grid container spacing={3} justifyContent="space-evenly">
                {products.map((product, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <Card
                            sx={{
                                boxShadow: "none",
                                borderRadius: 0,
                                background: "transparent",
                                textAlign: "center",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="220"
                                image={product.image}
                                alt={product.name}
                                sx={{
                                    objectFit: "cover",
                                    borderRadius: 0,
                                    mb: 2,
                                }}
                            />
                            <CardContent sx={{ p: 0 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "#8c8c8c",
                                        fontStyle: "italic",
                                        display: "block",
                                        mb: 0.5,
                                    }}
                                >
                                    {product.desc}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#232b3b",
                                        fontWeight: 400,
                                        mb: 1,
                                    }}
                                >
                                    {product.name}
                                </Typography>
                                {product.price && (
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#7ee0d6",
                                            fontWeight: 400,
                                            mb: 1,
                                        }}
                                    >
                                        {product.price}
                                    </Typography>
                                )}
                                {product.rating > 0 && (
                                    <Box>
                                        {[...Array(product.rating)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                sx={{
                                                    color: "#ffc107",
                                                    fontSize: 20,
                                                    verticalAlign: "middle",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}