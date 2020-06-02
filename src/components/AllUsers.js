import React, {useState} from 'react';
import userList from '../user.json'
import User from './User'
import Table from 'react-bootstrap/Table'
import './AllUsers.css'

const AllUsers = () => {
    
    const [searchUser, setSearchUser] = useState('')
    
    const handleChange = e => {
        setSearchUser(e.target.value) 
    }
    
    const updateList = userList.filter(u => u.name.toLowerCase().includes(searchUser.toLowerCase()) || u.email.toLowerCase().includes(searchUser.toLowerCase()) || u.address.street.toLowerCase().includes(searchUser.toLowerCase())|| u.website.toLowerCase().includes(searchUser.toLowerCase()))
    
    return (

        <>
            <header>
                <div className='divh1'>
                    <h1 className='h1Users'>Usuarios</h1>
                </div>
            </header>
            <form>
                <input type='text' className='inputUser' placeholder='Introduzca usuario' onChange={handleChange} value={searchUser}></input>
            </form>

            <Table className='table table-striped'>

                <thead className= 'theadUser'>
                    <tr>
                        <th scope='col' className='thUsers'>Id</th>
                        <th scope='col' className='thUsers'>Usuario</th>
                        <th scope='col' className='thUsers'>Email</th>
                        <th scope='col' className='thUsers'>Dirección</th>
                        <th scope='col' className='thUsers'>Website</th>
                    </tr>
                </thead>

                <tbody>
                    {updateList.length === 0 ? <p>No se han encontrado resultados</p> : updateList.map(u => (<User key={u.name} {...u} />))}
                </tbody>
                
            </Table>
        </>
     );
}

export default AllUsers;