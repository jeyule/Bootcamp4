import React from 'react';

class AddBuilding extends React.Component {
    
    handleClick() {
        this.props.addListing(this.newCode.value, this.newName.value, 
            this.newLat.value, this.newLong.value, this.newAddr.value)
    }

	render() {
        
		return (

            <div className="row">

            <div className="column3">
			<form>
				<input 
					type="text" 
					ref = { (value) => {this.newCode = value} }
					placeholder="Code"
				/>
			</form>
            </div>

            <div className="column3">
			<form>
				<input 
					type="text" 
					ref = { (value) => {this.newName = value} }
					placeholder="Name"
				/>
			</form>
            </div>

            <div className="column3">
			<form>
				<input 
					type="text" 
					ref = { (value) => {this.newLat = value} }
					placeholder="Latitude"
				/>
			</form>
            </div>

            <div className="column3">
			<form>
				<input 
					type="text" 
					ref = { (value) => {this.newLong = value} }
					placeholder="Longitude"
				/>
			</form>
            </div>

            <div className="column3">
			<form>
				<input 
					type="text" 
					ref = { (value) => {this.newAddr = value} }
					placeholder="Address"
				/>
			</form>
            </div>

            <button onClick={(e) => this.handleClick(e)}>
                Create New Listing
            </button>

            </div>


		);
	}
}

export default AddBuilding;