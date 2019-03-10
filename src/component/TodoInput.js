import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem} = this.props
    return (
      <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
              <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-success text-white">
                    <i className="fas fa-book"></i>
                </div>
              </div>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Add Todo Item"
                value = {item}
                onChange= {handleChange}
                />
              </div>
              <button type="submit" className={editItem?"btn btn-block mt-2 btn-secondary":
              "btn btn-block mt-2 btn-success"}>
                {editItem?"edit item":"add item"}
                </button>
              
          </form>
      </div>
    )
  }
}
