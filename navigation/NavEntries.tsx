import HomeScreen from "../views/HomeScreen";
import LoginScreen from "../views/LoginScreen";
import Preferences from "../views/Preferences";

export type TNavItem = {
    name: string;
    component: React.ComponentType<any>;
    options?: object;
    isPrivate: boolean;
    isMenu: boolean;
}

export const NavNames = {
    homepage: "Strona domowa",
    login: "Logowanie",
    preferences: "Preferencje",
}

export const NavEntries: TNavItem[] = [
    {
        name: NavNames.homepage,
        component: HomeScreen,
        isPrivate: true,
        isMenu: true,
    },
    {
        name: NavNames.login,
        component: LoginScreen,
        isPrivate: false,
        isMenu: false
    },
    {
        name: NavNames.preferences,
        component: Preferences,
        isPrivate: true,
        isMenu: true,
    },
]