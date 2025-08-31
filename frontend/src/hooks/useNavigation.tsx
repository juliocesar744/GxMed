import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export function useNavigation() {
    const navigate = useNavigate();

    return {
        goToHome: () => navigate(ROUTES.HOME),
        goToLogin: () => navigate(ROUTES.LOGIN),
        goToRegister: () => navigate(ROUTES.REGISTER)
    }
}