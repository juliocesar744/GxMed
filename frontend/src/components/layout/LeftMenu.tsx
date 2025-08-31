import { MenuItem } from "./MenuItem";
import { RiTeamLine } from "react-icons/ri";
import type { MenuItemType } from "../../interface/interface";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { PiUserSwitchBold } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { useNavigation } from "../../hooks/useNavigation";


export default function LeftMenu() {
    const [activeIndexTop, setActiveIndexTop] = useState(0);
    const { goToLogin } = useNavigation();

    const itemsTop: MenuItemType[] = [
        { label: 'Usuários', icon: <PiUserSwitchBold  />, onClick: () => setActiveIndexTop(0), active: activeIndexTop === 0 },
        { label: 'Notas Fiscais', icon: <CgNotes  />, onClick: () => setActiveIndexTop(1), active: activeIndexTop === 1 },
        { label: 'Consultoria', icon: <RiTeamLine />, onClick: () => setActiveIndexTop(2), active: activeIndexTop === 2 },
        { label: 'Sair', icon: <BiLogOut />, onClick: () => goToLogin() },
    ];

    return (
        <div className="h-screen flex flex-col justify-between items-start text-[#F9FBFF] box-border top-0 left-0 overflow-x-hidden overflow-y-hidden mt-10 ml-5">
            <div className="flex flex-col">
            <img src="../public/assets/gxmed-logo-colorido.svg"  alt="" className="mb-5" />
            <span style={{fontSize: "0.5625rem",  fontWeight: "800", color: "#A3A3A3", marginBottom: '0.5rem', marginLeft: "0.8rem", letterSpacing: "0.2rem"}}>MENU</span>
            <div style={{gap: "0.3rem", display: "flex", flexDirection: "column", height: "2rem"}}>
                {itemsTop.map((item, index) => (
                <MenuItem key={index} onClick={item.onClick} active={item.active}>
                    <span className="flex items-center text-[1.2rem]">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                </MenuItem>
                ))}
            </div>
            </div>
        </div>

    )
}