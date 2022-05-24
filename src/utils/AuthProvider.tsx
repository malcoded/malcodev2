import {useEffect, useState, createContext} from "react"
import {auth, onAuthStateChanged} from './firebase.config'


interface CurrentUserProps {
    currentUser: any
}

export const AuthContext = createContext<CurrentUserProps>({
    currentUser: null
})


interface AuthContextProps {
    children: React.ReactNode
}

const AuthProvider = ({children}: AuthContextProps) => {

    const [currentUser, setCurrentUser] = useState<any>()

    useEffect(() => {
        onAuthStateChanged(auth, setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider