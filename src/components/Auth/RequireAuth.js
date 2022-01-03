import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth";

const RequireAuth = (props) => {
    const mode = props.mode || "navigate"
    const authCtx = useContext(AuthContext)
    if (!authCtx.user) {
        if(mode === "navigate") {
            return <Navigate to="/login" />
        }
        if(mode === "hidden") {
            return null
        }
        if(mode === "fallback") {
            return alert("This is private area. User should login to see this")
        }
        return null
    }

    return props.children
}

export default RequireAuth