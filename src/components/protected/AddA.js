import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../config/constants'

function writeItemData(id, name, vitamins, recipes) {
  db.ref('a-items').child(id).set({
    name: name,
    vitamins: vitamins,
    recipes: recipes
  })
}

export default class AddA extends Component {
  constructor(props) {
    super(props)
    this.write = this.write.bind(this)
  }

  write() {
    writeItemData(
      this.refs.id.value,
      this.refs.name.value,
      this.refs.vitamins.value.split(','),
      this.refs.recipes.value.split(',')
    )
  }


  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
				<form>
          <h1>Add Item</h1>
          <div className="form-group">
            <label>ID</label>
            <input id="id" ref="id" className="form-control" placeholder="ID"/>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input id="name" ref="name" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Vitamins</label>
            <input id="vitamins" ref="vitamins" className="form-control" placeholder="Vitamins" />
          </div>
          <div className="form-group">
            <label>Recipes</label>
            <input id="recipes" ref="recipes" className="form-control" placeholder="Recipes" />
          </div>
          <Link to="/table-a" className="btn btn-default btn-lg">Back</Link>
          &nbsp; &nbsp; &nbsp;
          <button type="submit" className="btn btn-default btn-lg" onClick={
            this.write
          }>Add Item</button>
        </form>
      </div>
    )
  }
}
