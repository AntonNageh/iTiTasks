import { 
  Box, 
  Typography, 
  Button, 
} from '@mui/material';

const HeroSection = () => {
  return (
      <Box 
      sx={{ px: { xs: 2, md: 12 },
      backgroundColor:'rgba(255,255,255,0.95)',
      pt: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 400, color: '#232b3b', mb: 2 }}>
            Smell is the sense of imagination
          </Typography>
          <Typography variant="h6" sx={{ color: '#7ee0d6', mb: 1 }}>
            Discover the art of aroma
          </Typography>
          <Typography variant="body1" sx={{ color: '#4a4a4a', mb: 4 }}>
            Elevate your space with our premium diffusers and scents. Designed for those who appreciate the finer details in life.
          </Typography>
          <Button
            onClick={() => window.location.href = '/shop'}
            variant="contained"
            sx={{
              background: '#7ee0d6',
              color: '#232b3b',
              borderRadius: '30px',
              px: 5,
              py: 1.5,
              fontWeight: 600,
              fontSize: 18,
              boxShadow: 5,
              '&:hover': { background: '#5fd1c6' }
            }}
          >
            SHOP NOW
          </Button>
        </Box>
        {/* Hero Image with overlay */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 4, md: 0 } }}>
          <Box sx={{ position: 'relative', width: 500, height: 350 }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/85ea96d3-0076-4a49-c55f-47fcf4a7d728.jpg"
              alt="Book and Plate"
              style={{ width: '100%', borderRadius: 30, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
            />
            {/* Overlay diffuser illustration */}
            <Box sx={{
              position: 'absolute',
              top: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 80,
              zIndex: 2,
            }}>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default HeroSection;