import { useEffect, useState } from "react";
import { Button, GroupBox, ProgressBar, Select, TextInput } from "react95";
import axios from 'axios';

interface AddGameProps {
    saveAndGoBack: () => void,
    goBack: () => void,
}

const AddGame: React.FC<AddGameProps> = ({saveAndGoBack, goBack}) => {
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState({});
    const [ game, setGame ] = useState('');
    const [ percent, setPercent ] = useState(0);

    useEffect(() => {
        if (percent === 100) {
            saveAndGoBack();
        }
    }, [percent])
  
    const startTimer = () => {
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
                setPlatforms(data.data.map(plat => {
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
                        options={platforms}
                        menuMaxHeight={160}
                        width={160}
                        onChange={value => setSelectedPlatform(value)}
                        onOpen={e => console.log('open', e)}
                        onClose={e => console.log('close', e)}
                        onBlur={e => console.log('blur', e)}
                        onFocus={e => console.log('focus', e)}
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
            </GroupBox>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                {
                    percent > 0 
                        ? (<ProgressBar value={Math.floor(percent)} />)
                        : (
                            <>
                                <Button onClick={() => goBack()} style={{textAlign: 'center', marginRight: '5px'}}>Back</Button>
                                <Button onClick={() => saveGame()} style={{textAlign: 'center'}}>Save new game</Button>
                            </>
                        )
                }
            </div>
        </>  
    );
};

export default AddGame;