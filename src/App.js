import React, {useEffect,useState} from 'react';
import AllUsers from './components/AllUsers'

function App() {
    
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsersFromApi()
  },[])

  const fetchUsersFromApi = () => {
    const api = fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = api.then(answer => answer.json())
    dataUsers.then(result => setUsers(result))
  }

  return users.length ? <AllUsers users={users}/> : null
  
}

export default App;
