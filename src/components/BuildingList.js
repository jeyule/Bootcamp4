import React from 'react';

export default ({data, filterText, selectBuilding}) => {
		//console.log('This is my directory file', this.props.data);

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr 
						key={directory.id}
						onClick={() => selectBuilding(directory.id)}
					>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
}
