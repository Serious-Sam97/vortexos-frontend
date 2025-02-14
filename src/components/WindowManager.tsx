import { useProcessContext } from "../contexts/ProcessContext";
import React from "react";
import ProcessWindow from "./ProcessWindow";
import { Process } from "../interfaces/Process";

const WindowManager: React.FC = () => {

    const { processes } = useProcessContext();

    return (
        <>
            {
                processes.map((process: Process) => (
                    <ProcessWindow process={process} />
                ))
            }
        </>
    );
};

export default WindowManager;