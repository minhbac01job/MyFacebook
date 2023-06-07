import LeftSide from './views/left-sidebar/left-sidebar';
import Main from './views/main/main';
import Top from './views/top/top';

function App() {
    return (
        <div className="App flex justify-center">
            <Top />
            <div className="w-[1512px]">
                <LeftSide />
                <Main />
            </div>
        </div>
    );
}

export default App;
