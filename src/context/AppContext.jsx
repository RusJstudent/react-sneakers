import { createContext, useContext } from "react";

const AppContext = createContext({
    sneakers: [],
    cartItems: [],
    favourites: [],
});
export default AppContext;

export function useAppContext() {
    return useContext(AppContext);
}