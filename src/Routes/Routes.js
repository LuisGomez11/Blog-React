// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes
import App from '../Components/App';
import Inicio from '../Components/Inicio/Inicio';
import Redes from '../Components/Redes/Redes';
import Contactos from '../Components/Contactos/Contactos';
import Extras from '../Components/Extras/Extras';

const Routes = () => 

<App>

    <Switch>

        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/redes" component={Redes}/>
        <Route exact path="/contactos" component={Contactos}/>
        <Route exact path="/extras" component={Extras}/>

    </Switch>

</App>;

export default Routes;
