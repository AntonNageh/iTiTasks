import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, IconButton, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{
      minHeight: 'fit-content',
      background: 'linear-gradient(135deg, #eaf6fb 0%, #f5fafd 100%)',
    }}>
      {/* Top Bar */}
      <Box sx={{ background: '#80dbd0', px: { xs: 1, sm: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
          {/* Social Icons */}
          <Box>
            <IconButton sx={{color:"black"}} size="small"><TwitterIcon fontSize="inherit" /></IconButton>
            <IconButton sx={{color:"black"}} size="small"><FacebookIcon fontSize="inherit" /></IconButton>
            <IconButton sx={{color:"black"}} size="small"><PinterestIcon fontSize="inherit" /></IconButton>
            <IconButton sx={{color:"black"}} size="small"><InstagramIcon fontSize="inherit" /></IconButton>
            <IconButton sx={{color:"black"}} size="small"><LinkedInIcon fontSize="inherit" /></IconButton>
            <IconButton sx={{color:"black"}} size="small"><RssFeedIcon fontSize="inherit" /></IconButton>
          </Box>
          <Typography variant="body2" sx={{ color: 'black', fontSize: { xs: 10, sm: 14 } }}>
            Free delivery over $100 on all products
          </Typography>
        </Box>
      </Box>

      {/* Main Header */}
      <AppBar position="static" elevation={0} sx={{ background: 'transparent', boxShadow: 'none', py: { xs: 1, md: 2 } }}>
        <Toolbar sx={{ justifyContent: 'center', px: { xs: 1, sm: 2 } }}>
          <img
            src="./assets/logo.png"
            alt="Diffuser"
            style={{
              width: '40px',
              marginRight: 8,
              marginTop: '-5px',
              objectFit: 'contain'
            }}
          />
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              color: '#8b8b8b',
              letterSpacing: 2,
              fontSize: { xs: 18, sm: 24 }
            }}
          >
            DIFFUSERS
          </Typography>
          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, ml: 4 }}>
            {['Home', 'Shop', 'Contact', 'My Account'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase() === 'my account' ? 'myaccount' : item.toLowerCase()}`}
                underline="none"
                sx={{ color: 'black', fontWeight: 500, fontSize: 18, letterSpacing: 1 }}
              >
                {item}
              </Link>
            ))}
            <IconButton>
              <ShoppingCartIcon sx={{ color: 'black', translate: '0 -5px' }} />
            </IconButton>
          </Box>
          {/* Mobile Nav */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
            <IconButton>
              <MenuIcon sx={{ color: 'black', marginBottom:'10px' }} />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon sx={{ color: 'black', translate: '0 -5px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}