import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../config/constants'

function separate(arr) {
  if (arr != null && (arr.constructor === Array)) {
    arr = arr.join(', ')
  }
  return arr
}

function deleteItem(id) {
  var result = window.confirm('Delete?')
  if (result) {
    db.ref('a-items').child(id).remove()
    //Temporary fix for updating on removal
    window.location.reload()
  }
}

export default class TableA extends Component {

  constructor(props) {
    super(props);
      this.state = { items: []};
  }

  componentWillMount() {
    let aitemsRef = db.ref('a-items')
    aitemsRef.on('child_added', snap => {
			const previousItem = this.state.items
      previousItem.push({ id: snap.key,
                          name: snap.child('name').val(),
                          vitamins: snap.child('vitamins').val(),
                          recipes: snap.child('recipes').val()
                       });
      this.setState({items: previousItem});
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
            {this.state.items.map(aItem =>
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
                  <td>
                    <button onClick={() => deleteItem(aItem.id)} className="btn btn-default btn-small">Delete</button>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
