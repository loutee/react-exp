import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { db } from '../../config/constants'

function writeItemData(id, name, vitamins, recipes) {
  db.ref('a-items').child(id).set({
    name: name,
    vitamins: vitamins,
    recipes: recipes
  })
}

function retrieveItemData() {
  var id = window.document.getElementById("id").value
  if (id.length !== 0) {
    var itemRef = db.ref('a-items').child(id)
    itemRef.on('value', snap => {
      window.document.getElementById("name").value = snap.child('name').val()
      window.document.getElementById("vitamins").value = snap.child('vitamins').val()
      window.document.getElementById("recipes").value = snap.child('recipes').val()
    })
  }
}

export default class AddA extends Component {

  constructor(props) {
    super(props)
    this.write = this.write.bind(this)
    this.state = {redirect: false}
  }

  write() {
    writeItemData(
      this.refs.id.value,
      this.refs.name.value,
      this.refs.vitamins.value.split(','),
      this.refs.recipes.value.split(',')
    )
    this.setState({redirect: true})
  }


  render() {
    if (this.state.redirect) {
      return <Redirect push to="/table-a" />
    }
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Add/Edit Item</h1>
        <button className="btn btn-default btn-small" onClick={() =>
        retrieveItemData()}>Retrieve ID Data</button>
        <br />
        <br />
				<form>
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
          }>Add/Update Item</button>
        </form>
      </div>
    )
  }
}
