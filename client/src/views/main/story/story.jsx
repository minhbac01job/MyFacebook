import { useEffect, useState } from 'react';
import './style.css';

const resDataStory = [
    {
        id: 1,
        user: {
            id: 1,
            name: 'John Doe',
            ava: '',
        },
        date: '2023-06-05',
        image: 'https://picsum.photos/id/100/200/300',
    },
    {
        id: 2,
        user: {
            id: 4,
            name: 'Linkod',
            ava: '',
        },
        date: '2023-06-05',
        image: 'https://picsum.photos/id/100/200/300',
    },
    {
        id: 3,
        user: {
            id: 2,
            name: 'Sara',
            ava: '',
        },
        date: '2023-06-05',
        image: 'https://picsum.photos/id/100/200/300',
    },
    {
        id: 4,
        user: {
            id: 3,
            name: 'Laika',
            ava: '',
        },
        date: '2023-06-05',
        image: 'https://picsum.photos/id/100/200/300',
    },
    {
        id: 5,
        user: {
            id: 2,
            name: 'Sara',
            ava: '',
        },
        date: '2023-06-05',
        image: 'https://picsum.photos/id/100/200/300',
    },
];

// const users = [
//     {
//         id: 1,
//         name: 'John Doe',
//         ava: '',
//     },
//     {
//         id: 2,
//         name: 'Sara',
//         ava: '',
//     },
//     {
//         id: 3,
//         name: 'Laika',
//         ava: '',
//     },
//     {
//         id: 4,
//         name: 'Linkod',
//         ava: '',
//     },
// ];

const tabs = ['stories', 'reels'];

function Story() {
    const [data, setData] = useState([]);
    const [type, setType] = useState('stories');
    useEffect(() => {
        if (type === 'stories') {
            setData(resDataStory);
        } else {
            setData([]);
        }
    }, [type]);

    const [prevBtn, setPrevBtn] = useState(false);
    const [nextBtn, setNextBtn] = useState(true);

    useEffect(() => {
        const storiesContent = document.querySelector('.container .content');
        const maxScrollValue = storiesContent.scrollWidth - storiesContent.clientWidth - 24;
        const handleScroll = () => {
            setPrevBtn(storiesContent.scrollLeft > 24);
            setNextBtn(storiesContent.scrollLeft < maxScrollValue);
        };

        storiesContent.addEventListener('scroll', handleScroll);
    }, [prevBtn]);

    const nextStory = () => {
        const storiesContent = document.querySelector('.container .content');
        storiesContent.scrollLeft += 300;
    };
    const prevStory = () => {
        const storiesContent = document.querySelector('.container .content');
        storiesContent.scrollLeft -= 300;
    };

    return (
        <div className="container max-w-[501px] top-[73px] relative bg-[#242526] rounded-[10px]">
            <div className="tab w-full h-[59px] border-b border-[#393A3B] flex justify-center">
                {/* tab story or reels */}
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={
                            (type === tab ? 'border-b-[3px] border-[#358CFC] ' : 'hover:bg-[#3A3B3C] rounded-[5px] ') +
                            (tab === 'stories' ? 'ml-[14px]' : 'mr-[14px]') +
                            ' box-border flex items-center justify-center flex-auto w-50 h-[59px] cursor-pointer'
                        }
                        onClick={() => setType(tab)}
                    >
                        <i
                            className={
                                (tab === 'stories' ? 'fa-solid fa-book-open ' : 'fa-solid fa-clapperboard ') +
                                (type === tab ? 'text-[#358CFC] ' : 'text-[#B3B6BB] ') +
                                'text-[20px]'
                            }
                        ></i>

                        <span
                            className={
                                (type === tab ? 'text-[#358CFC]' : 'text-[#B3B6BB]') +
                                ' ml-[10px] w-[50px] h-[21px] text-[15px]  not-italic font-medium leading-[21px] tracking-[0.02em]'
                            }
                        >
                            {tab === 'stories' ? 'Tin' : 'Reels'}
                        </span>
                    </div>
                ))}
            </div>

            <div className="content overflow-x-scroll no-scrollbar scroll-smooth pl-[15px]">
                {/* Prev Btn */}
                <div
                    className={
                        (prevBtn ? 'active' : '') +
                        'prev w-[40px] h-[40px] bg-[#3E4042] rounded-full absolute left-[8px] z-[2] top-[50%] translate-y-1/2 cursor-pointer'
                    }
                    onClick={prevStory}
                >
                    <img
                        className=" w-[20px] h-[20px] rounded-full m-[10px]"
                        src={require('./images/prev.png')}
                        alt=""
                    />
                </div>

                {/* list Story or Reels */}
                <div className="stories flex gap-2">
                    {/* Create story */}
                    <div className="story w-[114px] h-[201px] rounded-[8px] shrink-0 overflow-hidden relative my-[10px] shadow-lg">
                        <div className="author-avatar">
                            <div className="box-border absolute w-[38px] h-[38px] left-[39px] top-[131px] bg-[#3D91FC] border-[3px] border-[#2D2E2F] rounded-full">
                                <div className="absolute w-[18px] h-[18px] left-[7px] top-[7px]">
                                    <img className=" w-[18px] h-[18px]" src={require('./images/add.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <img className="w-full h-[152px] object-cover" src={require('./images/ava.jpg')} alt="" />
                        <div className="author-name absolute w-full bottom-0 text-center px-[11px] py-[5px] font-semibold text-[15px] text-[#E5E7EC] not-italic ">
                            Tạo tin
                        </div>
                    </div>

                    {/* story1 */}
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="story w-[114px] h-[201px] rounded-[8px] shrink-0 overflow-hidden relative my-[10px] shadow-lg"
                        >
                            <div className="author-avatar">
                                <div className="box-border absolute w-[42px] h-[42px] left-[11px] top-[11px] border-[5px] border-[#3A8EFA] rounded-full">
                                    <div className="absolute w-[32px] h-[34px] left-[0px] top-[0px] rounded-full">
                                        <img
                                            className=" w-[32px] h-[34px] rounded-full"
                                            src={require('./images/tunglee.jpg')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="absolute w-[11px] h-[11px] left-[41px] top-[39px] bg-[#3FA557] border-2 border-[#2D2E2F] rounded-full"></div>
                            </div>
                            <img className="w-full h-full object-cover" src={item.image} alt="" />
                            <div className="author-name absolute bottom-0 left-0 right-0 px-[11px] py-[5px] font-semibold text-[15px] text-[#E5E7EC] not-italic ">
                                {item.user.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Btn */}
                <div
                    className={
                        (nextBtn ? 'active' : '') +
                        'next w-[40px] h-[40px] bg-[#3E4042] rounded-full absolute right-[8px] z-[2] top-[50%] translate-y-1/2 cursor-pointer'
                    }
                    onClick={nextStory}
                >
                    <img
                        className=" w-[20px] h-[20px] rounded-full m-[10px]"
                        src={require('./images/next.png')}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Story;
