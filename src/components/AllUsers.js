import React, {useState} from 'react';
import User from './User'
import Table from 'react-bootstrap/Table'
import './AllUsers.css'
import PropTypes from 'prop-types'

const AllUsers = ({users}) => {
    
    const [search, setSearch] = useState('')
    
    const handleChange = e => {
        setSearch(e.target.value) 
    }

    const searchTerm= search.toLowerCase()
    const filterResult = users.filter(u => 
        u.name.toLowerCase().includes(searchTerm) || 
        u.website.toLowerCase().includes(searchTerm) || 
        u.email.toLowerCase().includes(searchTerm)
    );
    
    return (
        <>
            <header>
                <div className='divh1'>
                    <h1 className='h1Users'>Usuarios</h1>
                </div>
            </header>
            <form>
                <input type='text' className='inputUser' placeholder='Introduzca nombre, email o website' onChange={handleChange} value={search}></input>
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
                    {filterResult.length === 0 ? <p>No se han encontrado resultados</p> : filterResult.map(u => (<User key={u.name} {...u} />))}
                </tbody>
                
            </Table>
        </>
     );
}

AllUsers.propTypes={
    users:PropTypes.array.isRequired
}

export default AllUsers;
