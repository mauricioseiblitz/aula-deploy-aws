import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';

import './styles.css';
import Users from './User';

const Admin = () => {
    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/products" exact>
                        <h1>Products CRUD</h1>
                    </Route>
                    <Route path="/admin/categories" exact>
                        <h1>Category CRUD</h1>
                    </Route>
                    <Route path="/admin/users" exact>
                        <Users />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;