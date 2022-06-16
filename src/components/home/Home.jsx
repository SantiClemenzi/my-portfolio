import * as React from 'react';

// MUI
import { Grid, Box } from '@mui/material';

// Elements
import Header from './Header';
import Image from './Image';

const Home = () => {
	return (
		<Box container style={{ padding: '2%' }}>
			{/* grid de iconos */}
			<Grid item>
				<p>Iconos de LinkedIn y git hub</p>
			</Grid>
			<Grid container justifyContent="center" spacing={6}>
				{/* grid Titulo y botones */}
				<Header />
				{/* Grid Imagen */}
				<Image />
			</Grid>
		</Box>
	);
};

export default Home;
