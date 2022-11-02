import {useState, useEffect, createContext, useContext} from "react";
import {NotificationManager} from "react-notifications"
import { BackendApi} from "../client/backend-api/admin"

const UserContext = createContext({
    user : null,
    loginUser: () => {},
})

const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        BackendApi.getProfile().then(({user, error}) => {
            if (error) {
                console.error(error)
            } else {
                setUser(user)
            }
        }).catch(console.error)
    }, [])

    const loginUser = async (username, password) => {
        const {user, error} = await BackendApi.loginUser(username, password)
        if (error) {
            NotificationManager.error(error)
        } else {
            NotificationManager.success("Logged in successfully!")
            setUser(user)
        }
    }

    const logoutUser = async () => {
        setUser(null)
        await BackendApi.logout()
    }

    return (
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {useUser, UserProvider}
