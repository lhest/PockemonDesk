import React from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/EmptyPage";

const routes = {
    '/': () => <HomePage />,
    '/pokedex': () => <EmptyPage />
}

export default routes;