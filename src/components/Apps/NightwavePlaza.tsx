import { useEffect, useState } from "react";
import { Button, Frame, Toolbar, WindowContent } from "react95";

const STREAM_URL = "https://radio.plaza.one/mp3";
const STATUS_API = "https://api.plaza.one/status";

type Track = {
    artwork_src?: string;
    title?: string;
    artist?: string;
};

const NightwavePlaza: React.FC = () => {

    const [track, setTrack] = useState<Track | null>(null);

    useEffect(() => {
        fetch(STATUS_API)
        .then((res) => res.json())
        .then((data) => setTrack(data.song));

        const interval = setInterval(() => {
        fetch(STATUS_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTrack(data.song)
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

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
            <WindowContent>
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold">Vaporwave Radio</h2>
                    <audio controls autoPlay src={STREAM_URL} className="w-full max-w-md" />
                    {track && (
                        <div className="flex flex-col items-center">
                        <img
                            width={'200px'}
                            src={track.artwork_src ?? "/default_cover.jpg"}
                            alt="Cover"
                            className="w-40 h-40 rounded-2xl mb-2 shadow-lg"
                        />
                        <div className="text-lg font-semibold">{track.title}</div>
                        <div className="text-sm text-neutral-400">{track.artist}</div>
                        </div>
                    )}
                </div>
            </WindowContent>
            <Frame variant='well' className='footer'>
                <p className="text-sm text-neutral-400">
                    Powered by <a href="https://plaza.one" target="_blank" rel="noopener noreferrer" className="underline">Nightwave Plaza</a>
                </p>
            </Frame>
        </>
    );
}

export default NightwavePlaza;