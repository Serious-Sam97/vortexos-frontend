import { Frame, WindowContent } from "react95";

const Browser: React.FC = () => {
    return (
        <>
            <WindowContent>
                <iframe
                    width="680"
                    height="400"
                    frameBorder="0"
                    src="https://web.archive.org/web/20250307002700/https://www.google.com/web/20250307002700/https://www.google.com/x`x"
                    allowFullScreen={false}>
                </iframe>
            </WindowContent>
            <Frame variant='well' className='footer'>
                    Browser
            </Frame>
        </>
    )
};

export default Browser;