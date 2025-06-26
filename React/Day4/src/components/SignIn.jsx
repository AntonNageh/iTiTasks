import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

const LOCAL_STORAGE_KEY = "profile";

export default function Signin() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [signedIn, setSignedIn] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (signedIn && profile) {
      window.location.href = "/home";
    }
  }, [signedIn, profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.name) {
      setError("Please fill in all fields.");
      return;
    }
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) {
      setError("No account found. Please sign up first.");
      return;
    }
    const storedProfile = JSON.parse(stored);
    if (
      storedProfile.email === form.email &&
      storedProfile.password === form.password &&
      storedProfile.name === form.name
    ) {
      setProfile(storedProfile);
      setSignedIn(true);
      setError("");
    } else {
      setError("Incorrect credentials. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0f0f11",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "#18181b",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "#fff", fontWeight: 700, mb: 2 }}
          >
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#bbb" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#6a82fb" },
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#bbb" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#6a82fb" },
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              variant="outlined"
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#bbb" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#6a82fb" },
                },
              }}
            />
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "primary",
                background:
                  "primary",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "none",
                "&:hover": {
                  background:
                    "secondary",
                  boxShadow: "none",
                },
              }}
            >
              Sign In
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#bbb", mt: 2 }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{ color: "#6a82fb", textDecoration: "none" }}
              >
                Sign Up
              </a>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}