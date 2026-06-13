import { Button, Frame, Toolbar, WindowContent } from 'react95';

const RecycleBin: React.FC = () => {
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
            <WindowContent style={{ minWidth: 360, minHeight: 140, display: "flex", alignItems: "center", justifyContent: "center", color: "#555" }}>
                The Recycle Bin is empty.
            </WindowContent>
            <Frame variant='well' className='footer'>
                0 object(s)
            </Frame>
        </>
    );
}

export default RecycleBin;