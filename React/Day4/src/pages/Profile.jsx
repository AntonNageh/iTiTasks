import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../features/profile/profileSlice";
import { Button } from "@mui/material";


export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profileData);
    const [showPassword, setShowPassword] = useState(false);
    const LOCAL_STORAGE_KEY = "profile";
    useEffect(() => {
        dispatch(setProfileData());
    }, [dispatch]);

    if (!profile) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
                <div className="loader"></div>
                <span style={{ marginLeft: 10, color: "#fff" }}>Loading profile...</span>
            </div>
        );
    }

    return (
        <div style={{
            maxWidth: 400,
            margin: "40px auto",
            padding: 32,
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            background: "#0f0f11",
            fontFamily: "Segoe UI, Arial, sans-serif",
            color: "#fff"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 24
            }}>
                <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#e0e7ef",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    color: "#4a5568",
                    marginBottom: 12
                }}>
                    {profile.name?.[0]?.toUpperCase() || "U"}
                </div>
                <h2 style={{ margin: 0, fontWeight: 600, color: "#fff" }}>{profile.name}</h2>
                <span style={{ color: "#cbd5e1", fontSize: 15 }}>{profile.email}</span>
            </div>
            <div style={{ borderTop: "1px solid #23232a", paddingTop: 16 }}>
                <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
                    <strong>Password:</strong>
                    <span style={{ marginLeft: 8, letterSpacing: 2 }}>
                        {showPassword
                            ? profile.password
                            : "*".repeat(profile.password?.length || 8)}
                    </span>
                    <button
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{
                            marginLeft: "auto",
                            padding: "2px 10px",
                            borderRadius: 6,
                            border: "none",
                            background: "#23232a",
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: 13
                        }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                    <Button onClick={() => { localStorage.removeItem(LOCAL_STORAGE_KEY); window.location.href = '/signin'; }} variant="contained" color="primary" sx={{ px: 4, fontWeight: 600, textTransform: 'none' }} style={{ marginLeft: 20 }}>Logout</Button>
            </div>
        </div>
    );
}
