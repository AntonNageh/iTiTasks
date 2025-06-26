import React, { useEffect } from 'react';
import { Box, Button, TextField, Paper } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../features/profile/profileSlice";

export default function SignUp() {
  let data = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data)
  }, [data])
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setProfileData(form));
    setForm({ name: '', email: '', password: '' });
    window.location.href = '/home';
  };

  return (
    <Box
      sx={{
        background: '#0f0f11',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={6}
        sx={{
          background: '#18181b',
          p: 4,
          borderRadius: 3,
          minWidth: 320,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                background: '#232326',
                color: '#fff',
                borderRadius: 1
              }
            },
            inputLabel: {
              sx: { color: '#fff' }
            }
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                background: '#232326',
                color: '#fff',
                borderRadius: 1
              }
            },
            inputLabel: {
              sx: { color: '#fff' }
            }
          }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                background: '#232326',
                color: '#fff',
                borderRadius: 1
              }
            },
            inputLabel: {
              sx: { color: '#fff' }
            }
          }}
          placeholder="Enter your password"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: '#2563eb',
            color: '#fff',
            fontWeight: 'bold',
            mt: 1,
            borderRadius: 1,
            '&:hover': { background: '#1e40af' }
          }}
          fullWidth
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
}
