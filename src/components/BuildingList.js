import React from 'react';

class BuildingList extends React.Component {
		//console.log('This is my directory file', this.props.data);

		render() {

			const {data, filterText, selectBuilding} = this.props;
			
			
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
							{directory.code != '' &&
								<td>{directory.code} </td>
							}
							{directory.name != '' &&
								<td> {directory.name} </td>
							}
							{directory.code != '' &&
								<div className="deleteButton" onClick={(e) => this.props.deleteListing(directory.id)}>
									Delete
								</div>
							}
						</tr>
					);
				});

			return <div>{buildingList}</div>;
		}
}

export default BuildingList;