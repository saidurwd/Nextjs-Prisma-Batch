import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/Product-page.jsx";
import CartPage from "./pages/Cart-Page.jsx";
import LoginPage from "./pages/Login-Page.jsx";
import OtpPage from "./pages/OTP-Page.jsx";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/otp" element={<OtpPage/>}/>
                    <Route path="/cart-list" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;