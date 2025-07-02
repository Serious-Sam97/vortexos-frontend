import { useCallback, useState } from "react";
import { Button, Frame, Toolbar, WindowContent } from "react95";
import { IMenu } from "../../interfaces/IMenu";
import Monitor from "../ControlPanel/Monitor";

const ControlPanel: React.FC = () => {

    const [ principalMenu, setPrincipalMenu ] = useState(true);
    const [ SubMenu, setSubMenu ] = useState<React.FC | null>(null);

    const [menu, setMenu] = useState<IMenu[][]>([
        [
            {
                name: "Monitor",
                icon: "/monitor.png",
                component: Monitor,
                selected: false,
            }
        ]
    ]);

    const openMenu = useCallback((i: number, j: number) => {
        setMenu(menu.map((row, rowIndex) => {
            return row.map((column, columnIndex) => {
                if (menu[i][j].selected === true) {
                    setSubMenu(() => menu[i][j].component);
                    setPrincipalMenu(false);

                    return { ...column, selected: false };
                }

                if (rowIndex === i && columnIndex === j) {
                    return { ...column, selected: true };
                }
                return { ...column, selected: false };
            });
        }));
    }, [menu, setMenu]);

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
            <WindowContent style={{backgroundColor: 'white', border: '3px solid gray', borderRadius: '5px'}}>
                {
                    principalMenu || !SubMenu ?
                        (
                            <div style={{width: '700px'}}>
                                <div style={{width: '100%'}}>
                                {
                                    Array.from({length: 21}).map((_, i) => (
                                        <div style={{display: 'flex', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px'}}>
                                            {
                                                Array.from({length: 7}).map((_, j) => (
                                                    (menu[i] && menu[i][j] && (
                                                        <div onClick={() => openMenu(i, j)} style={{cursor: "pointer", display: "flex", justifyContent: "center", flexDirection: 'column', paddingRight: '30px'}}>
                                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                                                <img
                                                                    src={menu[i][j].icon}
                                                                    style={{ height: '70px', filter: menu[i][j].selected ? 'sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)' : 'none',}}
                                                                />
                                                            </div>
                                                            <p style={{color: menu[i][j].selected ? 'white' : 'black', textAlign: 'center', backgroundColor: menu[i][j].selected ? '#000080' : 'transparent'}}>{menu[i][j].name}</p>
                                                        </div>
                                                    ))
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        )
                        : SubMenu && (<SubMenu/>)
                }
            </WindowContent>
            <Frame variant='well' className='footer'>
                Control Panel
            </Frame>
        </>
    );
}

export default ControlPanel;