import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8FDFCE',
      light: '#A8E5D3',
      dark: '#76C9B7',
    },
    secondary: {
      main: '#5A5A5A',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
      color: '#666666',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 500,
          letterSpacing: '0.5px',
          borderRadius: '25px',
          padding: '12px 30px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="*" element={<NotFound />} />

            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;