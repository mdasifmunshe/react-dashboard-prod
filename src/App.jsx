import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components";
import { Analytics, Customers, Dashboard, Orders, Products } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
      </Routes>
    </Layout>
  );
};

export default App;
