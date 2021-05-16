import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "containers/Layout";

import Dashboard from "pages/Dashboard";

import ProductList from "pages/Products/List";
import ProductCreate from "pages/Products/Create";
import ProductShow from "pages/Products/Show";
import ProductEdit from "pages/Products/Edit";

import CurrentAccountList from "pages/CurrentAccounts/List";
import CurrentAccountCreate from "pages/CurrentAccounts/Create";
import CurrentAccountShow from "pages/CurrentAccounts/Show";
import CurrentAccountEdit from "pages/CurrentAccounts/Edit";
import SaleCreate from "pages/Invoices/Create";

import InvoicesList from "pages/Invoices/List";
import InvoiceShow from "pages/Invoices/Show";

// Transactions
import TransactionCollectionCreate from "pages/Transactions/Collections/Create";
import TransactionPaymentCreate from "pages/Transactions/Payments/Create";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/create" component={ProductCreate} />
          <Route path="/products/:id/edit" component={ProductEdit} />
          <Route path="/products/:id" component={ProductShow} />

          <Route path="/current-accounts/create" component={CurrentAccountCreate} />
          <Route path="/current-accounts/:id/invoices/create/sell" component={SaleCreate} />
          <Route path="/current-accounts/:id/invoices/create/purchase" component={SaleCreate} />
          <Route path="/current-accounts/:id/edit" component={CurrentAccountEdit} />
          <Route path="/current-accounts/:id" component={CurrentAccountShow} />
          <Route path="/current-accounts" component={CurrentAccountList} />

          {/* INVOICES */}
          <Route path="/invoices/create/purchase" component={SaleCreate} />
          <Route path="/invoices/create/sell" component={SaleCreate} />
          <Route path="/invoices/:id" component={InvoiceShow} />
          <Route path="/invoices" component={InvoicesList} />

          {/* TRANSACTIONS */}
          <Route path="/transactions/create/collection" component={TransactionCollectionCreate} />
          <Route path="/transactions/create/payment" component={TransactionPaymentCreate} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
