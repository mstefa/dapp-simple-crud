import React from 'react'
import Web3 from 'web3';
import Crud from './data.json'
import Form from './components/Form'


function App() {

  const [web3, setWeb3] = React.useState({})
  const [crud, setCrud] = React.useState({})
  const [accounts, setAccounts] = React.useState([])

  
    const initWeb3 = async () => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        await window.ethereum.send('eth_requestAccounts');
        setWeb3(new Web3(window.ethereum));
        return true;
      }
      setWeb3(new Web3('http://localhost:9545'))
      return false;
    }

    const initContract = () => {
      const deploymentKey = Object.keys(Crud.networks)[0];
      // console.log(deploymentKey)
      // console.log(`web3`, web3)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setCrud(new web3.eth.Contract(
        Crud.abi,
        Crud
          .networks[deploymentKey]
          .address
      ));
      console.log(`crud`, crud)
      return true
    }

    initWeb3()
      .then(() => {
        // console.log('init web3')
        // console.log(web3)
        initContract()
        web3.eth.getAccounts()
          .then(_accounts => {
            setAccounts (_accounts) ;
            // console.log(`accounts`, accounts)
            console.log(`crud`, crud)
          })
      })
      .catch(e => console.error(e.message));


  return (
    <div className="App">
      <h1>Dapp under construcction</h1>
      <Form crud={crud} accounts={accounts}></Form>
    </div>
  );
}

export default App;
