import { useEffect } from "react";
import axios from 'axios';

const Explorer: React.FC = () => {

    useEffect(() => {
        axios.get('http://localhost:8080/files');
    }, []);
    return (
        <h1>Test</h1>
    )
};

export default Explorer;