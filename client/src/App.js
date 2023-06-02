import LeftSide from './views/left-sidebar/left-sidebar';
import Top from './views/top/top';

function App() {
    return (
        <div className="App flex justify-center">
            <div className="w-[1512px]">
                <Top />
                <LeftSide />
            </div>
        </div>
    );
}

export default App;
