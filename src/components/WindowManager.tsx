import { useProcessContext } from "../contexts/ProcessContext";
import React from "react";
import ProcessWindow from "./ProcessWindow";

const WindowManager: React.FC = () => {

    const { processes } = useProcessContext();

    return (
        <>
            {
                processes.map((process) => (
                    <ProcessWindow process={process} />
                ))
            }
        </>
    );
};

export default WindowManager;