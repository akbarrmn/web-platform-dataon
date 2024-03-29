import { Route, Routes } from "react-router-dom"
import Login from "./auth/login"
import Home from "./pages/home"
import RootLayout from "./components/layout"
import Catalog from "./pages/catalog"
import Distributors from "./pages/distributors"
import Upload from "./pages/upload"
import Order from "./pages/order"
import DistributorForm from "./components/distributorform"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<RootLayout children={<Home />} />} />
          <Route path="/catalog" element={<RootLayout children={<Catalog />} />} />
          <Route path="/order" element={<RootLayout children={<Order />} />} />
          <Route path="/distributors" element={<RootLayout children={<Distributors />} />} />
          <Route path="/distributors/add" element={<RootLayout children={<DistributorForm />} />} />
          <Route path="/distributors/edit/:id" element={<RootLayout children={<DistributorForm />} />} />
          <Route path="/upload" element={<RootLayout children={<Upload />} />} />
      </Routes>
    </>
  )
}

export default App
