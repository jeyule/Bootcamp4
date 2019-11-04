import React from 'react';

class BuildingList extends React.Component {
		//console.log('This is my directory file', this.props.data);

		render() {

			const {data, filterText, selectBuilding} = this.props;
			
			//var index = 0
			
			const buildingList = data

				.filter(directory => {
					return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				})
				.map(directory => {
					//directory.index = index
					//console.log(index)
					//index++

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
								<button onClick={(e) => this.props.deleteListing(directory.id)}>
									Delete
								</button>
							}
						</tr>
					);
				});

			return <div>{buildingList}</div>;
		}
}

export default BuildingList;