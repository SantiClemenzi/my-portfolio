import * as React from 'react';

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
				<Grid
					item
					container
					direction="column"
					justifyContent="center"
					alignItems="baseline"
					lg={6}
					md={6}
					sm={12}
					xs={12}
				>
					{/* grid  Titulo */}
					<Grid item>
						<h1 style={{ marginBottom: '1%' }}>Soy Santiago Clemenzi</h1>
						<h3 style={{ marginTop: '0px' }}>Fullstack Developer</h3>
						{/* grid botones */}
						<Grid item lg={12} md={12} sm={12} xs={12}>
							<Button variant="outlined" sx={{ margin: '1%' }}>
								Contactar
							</Button>
							<Button variant="outlined" sx={{ margin: '1%' }}>
								Curriculum
							</Button>
						</Grid>
					</Grid>
				</Grid>

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
