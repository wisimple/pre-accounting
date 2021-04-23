import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "containers/Layout";

import Dashboard from "pages/Dashboard";

import ProductList from "pages/Products/List";
import CustomerList from "pages/Customers/List";
import CustomerCreate from "pages/Customers/Create";
import CustomerShow from "pages/Customers/Show";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/customers" component={CustomerList} />
          <Route exact path="/customers/create" component={CustomerCreate} />
          <Route path="/customers/:id" component={CustomerShow} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
