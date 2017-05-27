import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../config/constants'

export default class AddA extends Component {
  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
				<form>
          <h1>Add Item</h1>
          <div className="form-group">
            <label>ID</label>
            <input className="form-control" placeholder="ID"/>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Vitamins</label>
            <input className="form-control" placeholder="Vitamins" />
          </div>
          <div className="form-group">
            <label>Recipes</label>
            <input className="form-control" placeholder="Recipes" />
          </div>
          <Link to="/table-a" className="btn btn-default btn-lg">Back</Link>
          &nbsp; &nbsp; &nbsp;
          <button type="submit" className="btn btn-default btn-lg">Add Item</button>
        </form>
      </div>
    )
  }
}
