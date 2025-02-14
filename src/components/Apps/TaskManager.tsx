import { Frame, WindowContent } from "react95";
import ProcessList from "../TaskManager/ProcessList";

const TaskManager: React.FC = () => {
    return (
        <>
            <WindowContent>
                <ProcessList/>
            </WindowContent>
            <Frame variant='well' className='footer'>
                See your running processes
            </Frame>
        </>
    );
};

export default TaskManager;