import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home'
import './index.scss';

function Routes() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;