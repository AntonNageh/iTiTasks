import { Container, TextField, Button, Paper, Typography, Box, Stack } from '@mui/material';

export default function Contact() {
    return (
        <Box className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#f9f9f9]">
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        borderRadius: 4,
                        background: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 8px 32px rgba(122,224,214,0.18)',
                        p: { xs: 3, sm: 6 },
                        backdropFilter: 'blur(2px)',
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            color: '#009688',
                            fontWeight: 800,
                            textAlign: 'center',
                            letterSpacing: 1,
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            color: '#4a4a4a',
                            textAlign: 'center',
                            mb: 4,
                        }}
                    >
                        We'd love to hear from you! Please fill out the form below.
                    </Typography>
                    <form>
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                required
                                autoComplete="name"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#f5f5f5',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                variant="outlined"
                                required
                                autoComplete="email"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#f5f5f5',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                required
                                multiline
                                minRows={4}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#f5f5f5',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{
                                    background: 'linear-gradient(90deg,#7ee0d6 0%,#009688 100%)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    borderRadius: 2,
                                    fontSize: '1.1rem',
                                    boxShadow: '0 2px 8px rgba(0,150,136,0.12)',
                                    py: 1.5,
                                    mt: 1,
                                    transition: '0.2s',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg,#009688 0%,#7ee0d6 100%)',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}
