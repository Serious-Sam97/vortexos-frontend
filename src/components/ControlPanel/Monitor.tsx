import { useState } from "react";
import { Button, Monitor as React95Monitor } from "react95";
import styled from "styled-components";
import { useOSContext } from "../../contexts/OSContext";

const Monitor: React.FC = () => {
    const [ wallpaperSelected, setWallpaperSelected ] = useState<string>('');
    const [ wallpaperType, setWallpaperType ] = useState<number>(1);
    const { changeWallpaper } = useOSContext();

    const solidColors = [
        '#008080',
        '#000080',
        '#000000',
        '#00FF00',
        '#800000',
        '#FF00FF'
    ];

    const Image = styled.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `;

    const Wallpaper = styled.div`
        width: 80px;
        height: 80px;
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `;

    const changeSelectedWallpaper = (image: string, type: number) => {
        setWallpaperSelected(image);
        setWallpaperType(type);
    };

    const getSelectedImage = () => {
        if (!wallpaperSelected) {
            return {
                background: 'blue',
            };
        }

        if (wallpaperType === 2) {
            return {
                background: wallpaperSelected
            }
        }

        return {
            backgroundImage: `url('/${wallpaperSelected}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }

    const ApplyDiv = styled.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `

    return (
        <div style={{width: '800px', maxHeight: '70vh', overflowY: 'scroll', overflowX: 'hidden'}}>
            <p className="text-xl pb-4 font-bold">Choose the wallpaper</p>
            <div className="flex justify-center">
                <React95Monitor backgroundStyles={ getSelectedImage() }/>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Solid Colors</p>
                <div className="flex justify-between">
                    {
                        solidColors.map((color: string) => {
                            return (
                                
                                <Wallpaper style={{background: color}}  onClick={() => changeSelectedWallpaper(color, 2)} className="p-2 cursor-pointer hover"/>
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Windows XP</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 5}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/xp-${number}.jpg`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/xp-${number}.jpg`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Windows 7</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 4}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/7-${number}.jpg`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/7-${number}.jpg`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Vaporwave Style</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 7}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/vw-${number}.jpg`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/vw-${number}.jpg`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Games</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 1}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/games-${number}.png`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/games-${number}.png`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <ApplyDiv>
                <Button onClick={() => changeWallpaper({image: wallpaperSelected, type: wallpaperType})} disabled={wallpaperSelected === ''}>Apply</Button>
            </ApplyDiv>
        </div>
    );
};

export default Monitor;