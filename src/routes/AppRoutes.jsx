import React, { Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ContactPage = React.lazy(() => import('../pages/ContactPage'));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<ContactPage />} />
            </Routes>
            </Suspense>
        </Router>
    )
};

export default AppRoutes;