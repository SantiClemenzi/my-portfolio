import './App.css';
// components
import Home from './components/home/Home';

// MUI
// import { createTheme, ThemeProvider } from '@mui/system';
import { Box } from '@mui/material';


function App() {
	return (
		<Box sx={{ bgcolor: '#121212 ', color: '#fff' }}>
			<Home />
		</Box>
	);
}

export default App;
