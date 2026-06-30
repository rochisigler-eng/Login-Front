import { createContext } from "react";

const authContext = createContext()

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null)

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
