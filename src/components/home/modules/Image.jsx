import * as React from 'react';

// MUI
import { Grid, Card, CardMedia } from '@mui/material';

// images
import portada from '../../../images/programmingScreen.jpg';

const Image = () => {
	return (
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
	);
};

export default Image;
