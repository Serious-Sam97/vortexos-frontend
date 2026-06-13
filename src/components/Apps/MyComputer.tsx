import { Button, Frame, Toolbar, WindowContent } from "react95";

const MyComputer: React.FC = () => {
    return (
        <>
            <Toolbar>
                <Button variant='menu' size='sm'>
                    File
                </Button>
                <Button variant='menu' size='sm'>
                    Edit
                </Button>
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button>
            </Toolbar>
            <WindowContent style={{ minWidth: 360, minHeight: 140, display: "flex", gap: 24, padding: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ fontSize: 40 }}>🖥️</div>
                    <span>VortexOS (C:)</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ fontSize: 40 }}>📁</div>
                    <span>Control Panel</span>
                </div>
            </WindowContent>
            <Frame variant='well' className='footer'>
                2 object(s)
            </Frame>
        </>
    );
}

export default MyComputer;