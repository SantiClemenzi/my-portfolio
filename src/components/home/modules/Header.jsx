import * as React from 'react';

// MUI
import { Grid, Button } from '@mui/material';

const Header = () => {
	return (
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
	);
};

export default Header;
