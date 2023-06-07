import Post from './listpost/post';
import MyFeel from './myfeel/myfeel';
import Story from './story/story';

function Main() {
    return (
        <div className="absolute w-[501px] h-[956px] -top-[1px] ml-[464px] overflow-y-scroll no-scrollbar text-white">
            <Story />
            <MyFeel />
            <Post />
        </div>
    );
}

export default Main;
