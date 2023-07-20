import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/byCategory/:id" element={<ByCategoryPage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;