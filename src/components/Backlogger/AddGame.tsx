import { useEffect, useState } from "react";
import { Button, Checkbox, GroupBox, ProgressBar, Select, TextInput } from "react95";
import axios from 'axios';
import { Platform } from "../../interfaces/Platform";
import { useOSContext } from "../../contexts/OSContext";

interface AddGameProps {
    saveAndGoBack: () => void,
}

const AddGame: React.FC<AddGameProps> = ({saveAndGoBack}) => {
    const { changeCursor } = useOSContext();
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState({});
    const [ game, setGame ] = useState('');
    const [ percent, setPercent ] = useState(0);
    const [ backlog, setBacklog ] = useState(false);

    useEffect(() => {
        if (percent === 100) {
            saveAndGoBack();
        }
    }, [percent])
  
    const startTimer = () => {
        changeCursor('loading.cur');
        const timer = setInterval(() => {
            setPercent(previousPercent => {
              if (previousPercent === 100) {
                return 0;
              }
              const diff = Math.random() * 50;
              return Math.min(previousPercent + diff, 100);
            });
          }, 500);
          return () => {
            clearInterval(timer);
          };
    };

    useEffect(() => {
        axios.get('http://localhost:8080/platforms')
            .then(data => {
                setPlatforms(data.data.map((plat: Platform) => {
                    return {
                        ...plat,
                        label: plat.name,
                    }
                }));
            });
    }, []);

    const saveGame = () => {
        startTimer();
        axios.post('http://localhost:8080/games', {
            platform_id: selectedPlatform.id,
            title: game
        });
    };

    return (
        <>
            <GroupBox label='New Game'>
                <div>
                    <p>Platform</p>
                    <Select
                        formatDisplay={() => selectedPlatform.name}
                        labelId={'opt.name'}
                        options={[
                            {},
                            ...platforms
                        ]}
                        menuMaxHeight={160}
                        width={160}
                        onChange={value => setSelectedPlatform(value)}
                    />
                </div>
                <div style={{marginTop: '5px'}}>
                    <p>Title</p>
                    <TextInput
                        value={game}
                        placeholder='Type here...'
                        onChange={e => setGame(e.target.value)}
                        fullWidth
                    />
                </div>
                <div style={{marginTop: '5px', display: 'flex'}}>
                    <Checkbox
                        value={backlog}
                        onChange={() => setBacklog(!backlog)}
                        style={{marginTop: '2px'}}
                    />
                    <p>Backlog</p>
                </div>
            </GroupBox>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                {
                    percent > 0
                        ? (<ProgressBar value={Math.floor(percent)} />)
                        : (
                            <>
                                <Button disabled={Object.keys(selectedPlatform).length === 0 || !game} onClick={() => saveGame()} style={{textAlign: 'center'}}>Save new game</Button>
                            </>
                        )
                }
            </div>
        </>  
    );
};

export default AddGame;