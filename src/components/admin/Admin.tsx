// modules
import React from 'react';
import { RouteComponentProps } from 'react-router';



interface AdminProps extends RouteComponentProps {}

const Admin: React.FC<AdminProps> = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin;