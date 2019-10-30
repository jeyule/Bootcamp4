import React from 'react';

/*class ViewBuilding extends React.Component {
	render() {
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;*/

export default ({data, selectedBuilding}) => {
		const directory = data[selectedBuilding-1] 
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					
					{selectedBuilding > 0 &&
						<p>
							<li>Code: {directory.code}</li>
							<li>Name: {directory.name}</li>
							{directory.coordinates &&
								<li>Coordinates: {directory.coordinates.latitude}, {directory.coordinates.longitude}</li>
							}
							{directory.address &&
								<li>Address: {directory.address}</li>
							}
						</p>
					}
				</p>
			</div>
		);
}

