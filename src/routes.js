import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import createInvoice from "./pages/Facturation/CreateInvoice";
import CreateOrder from "./pages/Orders/CreateOrder";
import Clients from "./pages/Clients";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/orders" component={Orders} />
            <Route path="/newinvoice" component={createInvoice} />
            <Route path="/neworder" component={CreateOrder} />
            <Route path="/clients" component={Clients} />

            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
