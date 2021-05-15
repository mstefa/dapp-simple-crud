import React from 'react'
import Web3 from 'web3';
// import Crud from 

export default function Form() {

  let web3;
  let crud;

  const initWeb3 = () => {


    return new Promise((resolve, reject) => {

      // case 1: New metamas is present
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.enable()
          .them(() => {
            resolve(
              new Web3(window.ethereum)
            )
          })
          .catch(e => {
            reject(e);
          });
        return;
      }

      //case 2: Old metamask is present
      if (typeof window.web3 !== 'undefined') {
        return resolve(
          new Web3(window.web3.currentProvider)
        );
      }

      // case 3: no metabas present, just connect to Ganache

      resolve(new Web3('http://localhost:9545'));
    })
  

  // const initContract = () => {
  //   Crud
  //   return new web3.eth.Contract(

  //   )
  // }
  }
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
