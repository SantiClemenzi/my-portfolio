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
			<Grid container lg={12} md={12} sm={12} xs={12}>
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
							<Typography
								variant="h4"
								component="div"
								sx={{ marginBottom: '1%' }}
							>
								Soy Santiago Clemenzi
							</Typography>
							<Typography
								variant="h5"
								component="div"
								sx={{ marginTop: '0px' }}
							>
								Fullstack Developer
							</Typography>
							{/* <h1 style={{ marginBottom: '1%' }}>Soy Santiago Clemenzi</h1> */}
							{/* <h3 style={{ marginTop: '0px' }}>Fullstack Developer</h3> */}
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
						<Card sx={{ maxWidth: 'auto', maxHeight: 'auto', margin: '5%' }}>
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
		</Box>
	);
};

export default Home;
