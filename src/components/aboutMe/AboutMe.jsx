import * as React from 'react';

// MUI
import {
	Box,
	Grid,
	Card,
	CardMedia,
	Typography,
	CardContent,
} from '@mui/material';

// images
import image from '../../images/programmingScreen.jpg';


const AboutMe = () => {
	return (
		<Box container style={{ padding: '2%', marginTop: '4%' }}>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item>
					<h1>About me</h1>
				</Grid>

				<Grid
					container
					direction="row"
					justifyContent="space-around"
					alignItems="flex-start"
					sx={{ marginTop: '2%' }}
				>
					<Card sx={{ maxWidth: '500px', maxHeight: '350px' }}>
						<CardMedia component="img" image={image} alt="Programming" />
					</Card>
					<Grid
						// item
						lg={6}
						md={6}
						sm={12}
						xs={12}
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item style={{ maxWidth: '90%' }}>
							<h3 style={{ marginBottom: '1%' }}>Hola!!</h3>
							<p
								style={{
									marginTop: '0px',
									marginBottom: '5%',
									textAlign: 'justify',
								}}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</Grid>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							style={{ maxWidth: '90%' }}
						>
							<Box sx={{ maxWidth: '20%', minHeight: '50px' }}>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h5" component="div">
											Mi linkedin
										</Typography>
										<Typography variant="body2">
											Acá podes ver mi perfil de LinkedIn.
										</Typography>
									</CardContent>
								</Card>
							</Box>
							<Box sx={{ maxWidth: '20%', minHeight: '50px' }}>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h5" component="div">
											Mi Github
										</Typography>
										<Typography variant="body2">
											Acá podes acceder a mi portafolio de github.
										</Typography>
									</CardContent>
								</Card>
							</Box>
							<Box sx={{ maxWidth: '20%', minHeight: '50px' }}>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h5" component="div">
											Mi mail
										</Typography>
										<Typography variant="body2">
											Acá podes contactarme.
										</Typography>
									</CardContent>
								</Card>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutMe;
