import * as React from 'react';

// Elements
import Header from './Header';
// MUI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box } from '@mui/material';

// images
import portada from '../../images/programmingScreen.jpg';

const Home = () => {
	return (
		<Box container style={{ padding: '2%' }}>
			{/* grid de iconos */}
			<Grid item>
				<p>Iconos de LinkedIn y git hub</p>
			</Grid>

			{/* grid contenedor de la imagen y titulo */}
			<Grid container justifyContent="center" spacing={6}>
				{/* grid Titulo y botones */}
				<Header/>

				{/* Grid Imagen */}
				<Grid
					item
					direction="column"
					justifyContent="center"
					alignItems="center"
					lg={6}
					md={6}
					sm={12}
					xs={12}
				>
					<Card sx={{ maxWidth: '400' }}>
						<CardMedia
							component="img"
							height="400"
							width="500"
							image={portada}
							alt="Programming"
						/>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
