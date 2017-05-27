import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../config/constants'

function separate(arr) {
  arr = arr.join(', ')
  return arr
}

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
        <Link to="/add-a" className="btn btn-default">Add A Item</Link>
        <h1>A Items</h1>
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
                    {separate(aItem.vitamins)}
                  </td>
                  <td>
                    {separate(aItem.recipes)}
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
