import { AuthProvider } from "./auth"
import { HouseProvider } from "./house-states/context/HouseProvider"
import { AppRouter } from "./router/AppRouter"

export const HomeApp = () => {
    return (
        <AuthProvider>
            <HouseProvider>
                <AppRouter />
            </HouseProvider>
        </AuthProvider>
    )
}
