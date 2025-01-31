import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";
import Desktop from "./Desktop";
import WMenu from "./WMenu";
import styled from "styled-components";
import WindowManager from "../components/WindowManager";

const Windows: React.FC = () => {
    return (
        <div>
            <Desktop/>
            {/* <WindowManager/> */}
            <WMenu/>
        </div>
    );
}

export default Windows;