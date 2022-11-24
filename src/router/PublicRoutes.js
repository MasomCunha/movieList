import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detailspage from "../pages/Detailspage";
import Statuspage from "../pages/Statuspage";

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details" element={<Detailspage />} />
            <Route path="/status" element={<Statuspage />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}