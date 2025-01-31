import { useState } from 'react';
import Icon from '../Icon';
import RecycleBinIcon from '/trash.png'

const RecycleBin: React.FC = () => {
    const [ selected, setSelected ] = useState(false);

    return (
        <>
            <Icon name="Doom" icon={RecycleBinIcon} selected={selected} selectIcon={() => setSelected(!selected)}/>
        </>
    );
}

export default RecycleBin;