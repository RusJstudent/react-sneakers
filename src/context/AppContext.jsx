import { createContext, useContext } from "react";

const AppContext = createContext({
    sneakers: [],
});
export default AppContext;

export function useAppContext() {
    return useContext(AppContext);
}