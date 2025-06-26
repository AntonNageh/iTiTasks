import { Button, Typography, Box } from "@mui/material";

export default function NotFound() {
    return (
        <Box
            className="flex flex-col items-center justify-center min-h-screen"
            sx={{
                backgroundColor: "#fff",
                color: "#000",
            }}
        >
            <Typography
                variant="h1"
                className="font-bold"
                sx={{ color: "#7ee0d6", fontSize: { xs: 80, md: 120 } }}
            >
                404
            </Typography>
            <Typography
                variant="h5"
                className="mb-4"
                sx={{ color: "#4a4a4a", fontWeight: 500 }}
            >
                Oops! Page Not Found
            </Typography>
            <Typography
                variant="body1"
                className="mb-8 text-center max-w-md"
                sx={{ color: "#4a4a4a" }}
            >
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>
            <Button
                variant="contained"
                href="/"
                sx={{
                    backgroundColor: "#7ee0d6",
                    color: "#000",
                    "&:hover": { backgroundColor: "#4a4a4a", color: "#fff" },
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    mt:2,
                }}
            >
                Go Home
            </Button>
        </Box>
    );
}
