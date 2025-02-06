import { useEffect, useState } from "react";
import { Button, GroupBox, Select, TextInput } from "react95";
import axios from 'axios';

const AddGame: React.FC = () => {
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState({});
    const [ game, setGame ] = useState('');

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
        axios.post('http://localhost:8080/games', {
            
        })
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
                    <p>Name</p>
                    <TextInput
                        value={game}
                        placeholder='Type here...'
                        onChange={e => setGame(e.target.value)}
                        fullWidth
                    />
                </div>
            </GroupBox>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                <Button style={{textAlign: 'center'}}>Save new game</Button>
            </div>
        </>  
    );
};

export default AddGame;