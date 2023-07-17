import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrendsPage from "./pages/TrendsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AdressFormPage from "./pages/AdressFormPage";
import PaymentMethordPage from "./pages/PaymentMethordPage";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import ReviewOrderPage from "./pages/ReviewOrderPage";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trends" element={<TrendsPage />} />
            <Route
              path="/productDetails/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/addressform/:id" element={<AdressFormPage />} />
            <Route path="/payment/:id" element={<PaymentMethordPage />} />
            <Route path="/revieworder" element={<ReviewOrderPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
