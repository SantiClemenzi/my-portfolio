import * as React from 'react';

// MUI
import { Grid, Box } from '@mui/material';

// Elements
import Header from './modules/Header';
import Image from './modules/Image';
import Icons from './modules/Icons';

const Home = () => {
	return (
		<Box container style={{ padding: '2%' }}>
			{/* grid de iconos */}
			<Icons />

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
