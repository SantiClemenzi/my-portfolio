import './App.css';
// components
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';

// MUI
import { Box } from '@mui/material';


function App() {
	return (
		<Box sx={{ bgcolor: '#121212 ', color: '#fff', marginBottom: '0px' }}>
			<Home />
			<AboutMe />
		</Box>
	);
}

export default App;
