import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
//import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      index: props.data.length,
      toBeDeleted: 0
    };
    console.log('index', this.state.index)
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  selectBuilding(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  addListing(code, name, latitude, longitude, address) {
    var id = this.state.index+1;

    var listing = {id: id, code: code, name: name, coordinates: {latitude, longitude},
      address: address};

    const listingsList = this.props.data.push(listing);

    this.setState({
      data: listingsList,
      index: id
    })
  }

  deleteListing(id) {
    this.props.data[id-1].code = '';
    this.props.data[id-1].name = '';

    this.setState({
      data: this.props.data
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <AddBuilding
          data = {this.props.data}
          addListing={this.addListing.bind(this)}
        />

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectBuilding={this.selectBuilding.bind(this)}
                    deleteListing={this.deleteListing.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
