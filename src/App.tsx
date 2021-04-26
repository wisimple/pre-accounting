import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "containers/Layout";

import Dashboard from "pages/Dashboard";

import ProductList from "pages/Products/List";
import ProductCreate from "pages/Products/Create";

import CustomerList from "pages/Customers/List";
import CustomerCreate from "pages/Customers/Create";
import CustomerShow from "pages/Customers/Show";
import SaleCreate from "pages/Invoices/Create";
import TransactionCreate from "pages/Transactions/Create";

import InvoicesList from "pages/Invoices/List";
import InvoiceShow from "pages/Invoices/Show";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/create" component={ProductCreate} />

          <Route path="/customers/:id/transactions/create/pay" component={TransactionCreate} />
          <Route path="/customers/:id/transactions/create/collect" component={TransactionCreate} />
          <Route path="/customers/:id/invoices/create/sell" component={SaleCreate} />
          <Route path="/customers/:id/invoices/create/purchase" component={SaleCreate} />
          <Route path="/customers/create" component={CustomerCreate} />
          <Route path="/customers/:id" component={CustomerShow} />
          <Route path="/customers" component={CustomerList} />

          <Route path="/invoices/create/purchase" component={SaleCreate} />
          <Route path="/invoices/create/sell" component={SaleCreate} />
          <Route path="/invoices/:id" component={InvoiceShow} />
          <Route path="/invoices" component={InvoicesList} />

          <Route path="/transactions/create/collect" component={TransactionCreate} />
          <Route path="/transactions/create/pay" component={TransactionCreate} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
