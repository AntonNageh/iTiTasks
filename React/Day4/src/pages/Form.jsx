import { Button, Paper, Typography, Stack } from '@mui/material';

export default function Form() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-[#0f0f11]">
      <Paper
        elevation={6}
        className="p-10 flex flex-col items-center"
        sx={{ borderRadius: 4, minWidth: 340 }}
      >
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Welcome!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={4}>
          Please sign in or sign up to continue.
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ px: 4, fontWeight: 600, textTransform: 'none' }}
            onClick={() => { window.location.href = '/signin'; }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            sx={{ px: 4, fontWeight: 600, textTransform: 'none' }}
            onClick={() => { window.location.href = '/signup'; }}
          >
            Sign Up
          </Button>
        </Stack>
      </Paper>
    </div>
  );
}
