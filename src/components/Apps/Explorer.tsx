import { useEffect } from "react";
import axios from 'axios';

const Explorer: React.FC = () => {

    useEffect(() => {
        axios.get('http://localhost:8080/files');
    }, []);
    return (
        <div style={{width: '700px'}}>
            <div style={{width: '100%'}}>
            {
                Array.from({length: 7}).map((_, iIndex) => (
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px'}}>
                        {
                            Array.from({length: 7}).map((_, jIndex) => (
                                <h2>File</h2>
                            ))
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
};

export default Explorer;