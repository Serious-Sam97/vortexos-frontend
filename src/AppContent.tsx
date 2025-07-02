import { useOSContext } from './contexts/OSContext';
import Intro from './pages/Intro';
import Windows from './pages/Vortex';
import { Routes, Route } from "react-router";

const AppContent: React.FC = () => {
    const { wallpaper } = useOSContext();
    console.log(wallpaper)
    
    const getWallpaper = () => {
        if (!wallpaper) {
            return {
                backgroundColor: '#008080'
            };
        }

        return {
            backgroundImage: `url('/${wallpaper}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }

    return (
        <div style={ getWallpaper() }>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/vortex" element={<Windows />} />
            </Routes>
        </div>
    );
}

export default AppContent;