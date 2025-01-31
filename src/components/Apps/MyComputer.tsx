import { useState } from 'react';
import Icon from '../Icon';
import MyComputerIcon from '/my-computer.png'

const MyComputer: React.FC = () => {
    const [ selected, setSelected ] = useState(false);

    return (
        <>
            <Icon name="Doom" icon={MyComputerIcon} selected={selected} selectIcon={() => setSelected(!selected)}/>
        </>
    );
}

export default MyComputer;