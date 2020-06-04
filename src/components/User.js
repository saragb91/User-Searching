import React from 'react';
import './User.css'
import PropTypes from 'prop-types'

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

User.propTypes={
  id:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  website:PropTypes.string.isRequired,
  address:PropTypes.object.isRequired,
}
 
export default User;
