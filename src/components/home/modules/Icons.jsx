import * as React from 'react';

// MUI
import { Grid } from '@mui/material';

// Icons
import { ReactComponent as IconLinkedIn } from '../../../icons/linkedin-3.svg';
import { ReactComponent as InconGithub } from '../../../icons/github-3.svg';

const Icons = () => {
	return (
		<Grid
			container
			lg={12}
			md={12}
			sm={12}
			xs={12}
			sx={{ marginBottom: '1%' }}
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
		>
			<Grid item sx={{ marginBottom: '0.5%' }}>
				<h3>&lt;/santi&gt;</h3>
			</Grid>
			<Grid item sx={{ marginRight: '0.5%', marginLeft: '1%' }}>
				<IconLinkedIn />
			</Grid>
			<Grid item sx={{ marginLeft: '0.5%' }}>
				<InconGithub />
			</Grid>
		</Grid>
	);
};

export default Icons;
