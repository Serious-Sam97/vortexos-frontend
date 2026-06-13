import { useOSContext } from './contexts/OSContext';
import Intro from './pages/Intro';
import Windows from './pages/Vortex';
import Shutdown from './pages/Shutdown';
import { Routes, Route } from "react-router";

const AppContent: React.FC = () => {
    const { wallpaper } = useOSContext();
    
    const getWallpaper = () => {
        if (!wallpaper.image) {
            return {
                background: '#008080'
            };
        }
        
        if (wallpaper.type === 2) {
            return {
                background: wallpaper.image
            }
        }

        return {
            backgroundImage: `url('/${wallpaper.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    }

    return (
        <div style={{ ...getWallpaper(), width: "100vw", height: "100vh", overflow: "hidden" }}>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/vortex" element={<Windows />} />
                <Route path="/shutdown" element={<Shutdown />} />
            </Routes>
        </div>
    );
}

export default AppContent;