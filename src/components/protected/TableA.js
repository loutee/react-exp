import React, { Component } from 'react'
import { db } from '../../config/constants'

export default class TableA extends Component {

  constructor(props) {
    super(props);
      this.state = { items: []};
  }

  componentWillMount() {
    let aitemsRef = db.ref('a-items')
    aitemsRef.on('child_added', snapshot => {
      let aItem = { id: snapshot.key,
                    name: snapshot.child('name').val(),
                    vitamins: snapshot.child('vitamins').val(),
                    recipes: snapshot.child('recipes').val()
                  };
      this.setState({items: [aItem].concat(this.state.items)});
    })
  }

  render() {
    return (
      <div>
        <button className="btn btn-default">Add Item</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Vitamins</th>
              <th>Recipes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(
                aItem =>
                <tr key={aItem.id}>
                  <td>
                    {aItem.id}
                  </td>
                  <td>
                    {aItem.name}
                  </td>
                  <td>
                    {aItem.vitamins}
                  </td>
                  <td>
                    {aItem.recipes}
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
