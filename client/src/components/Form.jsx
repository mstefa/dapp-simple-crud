import React from 'react'
import Web3 from 'web3';
import Crud from '../data.json'

// password password

export default function Form() {

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

  let web3;
  let crud;
  let accounts = [];

  const initWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      await window.ethereum.send('eth_requestAccounts');
      web3 = new Web3(window.ethereum);
      return true;
    }
    web3 = new Web3('http://localhost:9545')
    return false;
  }

  const initContract = () => {
    const deploymentKey = Object.keys(Crud.networks)[0];
    console.log(deploymentKey)
    console.log(`web3`, web3)
    crud = new web3.eth.Contract(
      Crud.abi,
      Crud
        .networks[deploymentKey]
        .address
    );
    console.log(`crud`, crud)
    return true
  }

  initWeb3()
    .then(()=> {
      // console.log('init web3')
      // console.log(web3)
      crud = initContract()
      web3.eth.getAccounts()
      .then(_accounts => {
        accounts = _accounts;
        // console.log(`accounts`, accounts)
      })
    })
    .catch(e => console.error(e.message));

    
  const handleCreate = (e) => {
    e.preventDefault();
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
