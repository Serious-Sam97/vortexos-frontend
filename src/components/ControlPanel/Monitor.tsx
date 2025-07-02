import { useState } from "react";
import { Button, Monitor as React95Monitor } from "react95";
import styled from "styled-components";
import { useOSContext } from "../../contexts/OSContext";

const Monitor: React.FC = () => {
    const [ wallpaperSelected, setWallpaperSelected ] = useState<string>('');
    const { changeWallpaper } = useOSContext();

    const Image = styled.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `;

    const getSelectedImage = () => {
        if (!wallpaperSelected) {
            return {
                background: 'blue',
            };
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
        <div style={{width: '800px'}}>
            <p className="text-xl pb-4 font-bold">Choose the wallpaper</p>
            <div className="flex justify-center">
                <React95Monitor backgroundStyles={ getSelectedImage() }/>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Vaporwave Style</p>
                <div className="flex justify-start">
                    {
                        Array.from({length: 10}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image onClick={() => setWallpaperSelected(`vaporwave/${number}.jpeg`)} className="p-2 cursor-pointer hover" width={'80px'} height={'20px'} src={`/vaporwave/${number}.jpeg`}/>
                            );
                        })
                    }
                </div>
            </div>

            <ApplyDiv>
                <Button onClick={() => changeWallpaper(wallpaperSelected)} disabled={wallpaperSelected === ''}>Apply</Button>
            </ApplyDiv>
        </div>
    );
};

export default Monitor;