import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HomeApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
