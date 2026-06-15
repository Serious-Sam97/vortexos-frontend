import { useOSContext } from './contexts/OSContext';
import Intro from './pages/Intro';
import Windows from './pages/Vortex';
import Shutdown from './pages/Shutdown';
import { Routes, Route } from "react-router";

const AppContent: React.FC = () => {
    const { wallpaper, sssStyle } = useOSContext();

    const getWallpaper = () => {
        if (!wallpaper.image) {
            // No custom wallpaper: Serious Sam Style → vaporwave sunset grid; otherwise the
            // classic stock Windows 98 teal desktop.
            if (sssStyle) {
                return {
                    backgroundImage: "url('/wallpapers/vw-5.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#1a0033',
                };
            }
            // Stock look: the active era's desktop background (Windows 98 default: teal).
            return {
                background: 'var(--vx-desktop, #008080)'
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