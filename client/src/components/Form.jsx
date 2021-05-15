import React from 'react'


// password password

export default function Form({crud, accounts}) {

  const [input, setInput] = React.useState({
    createName: '',
    readId: null,
    editId: null,
    editName: '',
    deleteId: null,
  });
  
  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    
  }

  const handleCreate = (e) => {
    e.preventDefault();
    console.log('hola!')
    console.log(`crud`, crud)
    crud.methods.create(input.createName).send({from: accounts[0]})
    .then(result => {
      alert("User Create")
    })
    .catch(_e => {
      alert("Something went wrong")
    });
  }

  return (
    <div className="container">
      {/* <button onClick={()=>ethereum.request({ method: 'eth_requestAccounts' })}>Enable Ethereum</button> */}
      <div className="row">
        <div className="col-sm-12">
          <h1>Crud</h1>
          <form id="create" onSubmit={handleCreate}>
            <h2>Create user</h2>
            <div className="form-group">
              <label for="name">Name</label>
              <input id="name" name='createName' type="text" className="form-control"
              onChange={handleInputChange} value={input.createName}
              >
              </input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p id="create-result"></p>
          </form>


          <form id="read">
            <h2>Read user</h2>
            <div className="form-group">
              <label for="read-id">Id</label>
              <input id="read-id" name='readId'type="number" className="form-control"
              onChange={handleInputChange} value={input.readId}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p id="read-result"></p>
          </form>

          <form id="edit">
            <h2>Edit user</h2>
            <div className="form-group">
              <label for="edit-id">Id</label>
              <input id="edit-id" name='editId' type="number" className="form-control"
              onChange={handleInputChange} value={input.editId}
              ></input>
              <label for="edit-name">Name</label>
              <input id="edit-name" name='editName'type="text" className="form-control"
              onChange={handleInputChange} value={input.editName}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p id="edit-result"></p>
          </form>

          <form id="delete">
            <h2>Delete user</h2>
            <div className="form-group">
              <label for="delete-id">Id</label>
              <input id="delete-id" name='deleteId'type="number" className="form-control"
              onChange={handleInputChange} value={input.deleteId}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p id="delete-result"></p>
          </form>

        </div>
      </div>
    </div>
  )
}
