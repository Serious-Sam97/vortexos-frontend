import { useOSContext } from './contexts/OSContext';
import Intro from './pages/Intro';
import Windows from './pages/Vortex';
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
        <div style={ getWallpaper() }>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/vortex" element={<Windows />} />
            </Routes>
        </div>
    );
}

export default AppContent;