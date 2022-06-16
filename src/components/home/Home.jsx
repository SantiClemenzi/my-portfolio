import * as React from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

// images
import portada from '../../images/programmingScreen.jpg';

const Home = () => {
	return (
		<Grid container style={{ padding: '2%' }}>
			<Grid item>
				<p>Iconos de LinkedIn y git hub</p>
			</Grid>
			<Grid
				container
				justifyContent="center"
				spacing={6}
				style={{ padding: '2%' }}
			>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					lg={6}
					md={6}
					sm={12}
					xs={12}
				>
					<Grid>
						<h1 style={{ marginBottom: '1%' }}>Soy Santiago Clemenzi</h1>
						<h3 style={{ marginTop: '0px' }}>Fullstack Developer</h3>
						<Grid>
							<Button variant="outlined" style={{ marginRight: '1%' }}>
								Contactar
							</Button>
							<Button variant="outlined" style={{ marginLeft: '1%' }}>
								Curriculum
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					lg={6}
					md={6}
					sm={12}
					xs={12}
					// style={{ margin: '0.5%' }}
				>
					<Card sx={{ maxWidth: 600,  margin: '5%' }}>
						<CardMedia
							component="img"
							height="400"
							image={portada}
							alt="Programming"
						/>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
