import { Avatar, Button, Paper, TextField, Typography, Box, Divider, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function MyAccount() {
    return (
        <Box
            className="flex justify-center items-center min-h-screen"
            sx={{
                background: 'linear-gradient(135deg, #e0f7fa 0%, #fffde4 100%)',                
            }}
        >
            <Paper
                elevation={10}
                className="p-10 rounded-3xl"
                sx={{
                    background: 'rgba(255,255,255,0.95)',
                    padding: '2rem',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    maxWidth: 400,
                    width: '100%',
                }}
            >
                <Box className="flex flex-col items-center mb-8 relative">
                    <Avatar
                        sx={{
                            width: 100,
                            height: 100,
                            bgcolor: 'linear-gradient(135deg, #7ee0d6 30%, #b2fefa 90%)',
                            color: '#4a4a4a',
                            fontSize: 40,
                            boxShadow: 4,
                        }}
                    >
                        A
                    </Avatar>
                    <Tooltip title="Change profile picture">
                        <IconButton
                            sx={{
                                position: 'absolute',
                                right: 16,
                                top: 70,
                                bgcolor: '#fff',
                                boxShadow: 1,
                                '&:hover': { bgcolor: '#f0f0f0' },
                            }}
                            size="small"
                        >
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Typography
                        variant="h5"
                        className="mt-5 font-bold"
                        sx={{
                            color: '#222',
                            letterSpacing: 1,
                            fontWeight: 700,
                        }}
                    >
                        My Account
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#7ee0d6',
                            fontWeight: 500,
                            letterSpacing: 1,
                            mt: 0.5,
                        }}
                    >
                        Personal Information
                    </Typography>
                </Box>
                <Divider sx={{ mb: 4 }} />
                <form className="space-y-6">
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        autoComplete="name"
                        sx={{
                            mb: 2,
                            '& .MuiInputBase-root': {
                                bgcolor: '#f5f7fa',
                                borderRadius: 2,
                                boxShadow: '0 1px 4px rgba(126,224,214,0.08)',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#4a4a4a',
                                fontWeight: 500,
                            },
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        autoComplete="email"
                        sx={{
                            mb: 2,
                            '& .MuiInputBase-root': {
                                bgcolor: '#f5f7fa',
                                borderRadius: 2,
                                boxShadow: '0 1px 4px rgba(126,224,214,0.08)',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#4a4a4a',
                                fontWeight: 500,
                            },
                        }}
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        autoComplete="tel"
                        sx={{
                            mb: 2,
                            '& .MuiInputBase-root': {
                                bgcolor: '#f5f7fa',
                                borderRadius: 2,
                                boxShadow: '0 1px 4px rgba(126,224,214,0.08)',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#4a4a4a',
                                fontWeight: 500,
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                            bgcolor: 'linear-gradient(90deg, #7ee0d6 0%, #b2fefa 100%)',
                            color: '#222',
                            fontWeight: 'bold',
                            borderRadius: 2,
                            boxShadow: 2,
                            letterSpacing: 1,
                            mt: 2,
                            py: 1.5,
                            fontSize: 18,
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: '#4a4a4a',
                                color: '#7ee0d6',
                                transform: 'translateY(-2px) scale(1.03)',
                                background: '#4a4a4a',
                            },
                        }}
                    >
                        Save Changes
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
