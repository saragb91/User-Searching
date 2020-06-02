import React from 'react';
import './User.css'

const User = ({id,name, email, website, address}) => {
    return ( 
     <>
      <tr className='trUser'>
        <td className='tdUser'>{id}</td>
        <td className='tdUser'>{name}</td>
        <td className='tdUser'>{email}</td>
        <td className='tdUser'>{address.street} {address.zipcode} {address.city}</td>
        <td className='tdUser'>{website}</td>
      </tr>
      </>
     );
}
 
export default User;