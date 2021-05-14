import React from 'react'

export default function Form() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Crud</h1>
          <form id="create">
            <h2>Create user</h2>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" class="form-control"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <p id="create-result"></p>
          </form>


          <form id="read">
            <h2>Read user</h2>
            <div class="form-group">
              <label for="read-id">Id</label>
              <input id="read-id" type="number" class="form-control"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <p id="read-result"></p>
          </form>

          <form id="edit">
            <h2>Edit user</h2>
            <div class="form-group">
              <label for="edit-id">Id</label>
              <input id="edit-id" type="number" class="form-control"></input>
              <label for="edit-name">Name</label>
              <input id="edit-name" type="text" class="form-control"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <p id="edit-result"></p>
          </form>

          <form id="delete">
            <h2>Delete user</h2>
            <div class="form-group">
              <label for="delete-id">Id</label>
              <input id="delete-id" type="number" class="form-control"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <p id="delete-result"></p>
          </form>

        </div>
      </div>
    </div>
  )
}
