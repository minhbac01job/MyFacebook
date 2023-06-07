import './style.css';

const listPost = [
    {
        id: 1,
        user: 2,
        text: 'title 1',
        images: ['https://picsum.photos/id/100/200/300'],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
    {
        id: 2,
        user: 1,
        text: 'title 2',
        images: ['https://picsum.photos/id/100/200/300', 'https://picsum.photos/id/100/200/300'],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
    {
        id: 3,
        user: 4,
        text: 'title 3',
        images: [
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
        ],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
    {
        id: 4,
        user: 2,
        text: 'title 4',
        images: [
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
        ],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
    {
        id: 5,
        user: 3,
        text: 'Suýt thì quên mất hôm nay là sinh nhật hai tuổi của chiếc blog nhỏ này. Hai năm có lẽ là khoảng thời gian không quá dài nhưng nhìn lại thì cuối cùng mình cũng đã cố gắng từng ngày để đi được đến đây rồi. Cảm ơn mọi người vì đã luôn yêu thương cô 9 cũng như ngôi nhà ma này. Mong rằng năm sau vẫn còn ở đây để ăn sinh nhật ba tuổi cùng mọi người ❤️🍰 7/6/2021 - 7/6/2023',
        images: [
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
        ],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
    {
        id: 6,
        user: 3,
        text: 'Suýt thì quên mất hôm nay là sinh nhật hai tuổi của chiếc blog nhỏ này. Hai năm có lẽ là khoảng thời gian không quá dài nhưng nhìn lại thì cuối cùng mình cũng đã cố gắng từng ngày để đi được đến đây rồi. Cảm ơn mọi người vì đã luôn yêu thương cô 9 cũng như ngôi nhà ma này. Mong rằng năm sau vẫn còn ở đây để ăn sinh nhật ba tuổi cùng mọi người ❤️🍰 7/6/2021 - 7/6/2023',
        images: [
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
        ],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
    {
        id: 7,
        user: 3,
        text: 'Suýt thì quên mất hôm nay là sinh nhật hai tuổi của chiếc blog nhỏ này. Hai năm có lẽ là khoảng thời gian không quá dài nhưng nhìn lại thì cuối cùng mình cũng đã cố gắng từng ngày để đi được đến đây rồi. Cảm ơn mọi người vì đã luôn yêu thương cô 9 cũng như ngôi nhà ma này. Mong rằng năm sau vẫn còn ở đây để ăn sinh nhật ba tuổi cùng mọi người ❤️🍰 7/6/2021 - 7/6/2023',
        images: [
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
            'https://picsum.photos/id/100/200/300',
        ],
        date: '2020-01-01',
        likes: 10,
        comments: 10,
    },
];

function Post() {
    return (
        //list post
        <div className="w-[500px] h-auto relative top-[110px] bg-[#242526] rounded-[10px]">
            {/*Post */}
            {listPost.map((post) => (
                <div className=" w-[500px] bg-[#242526] rounded-[10px]">
                    <div className="flex items-center w-full h-[61px] bg-[#242526] rounded-t-[10px]">
                        {/*ava */}
                        <div className="w-[40px] h-[40px] rounded-full  ml-[17px]">
                            <img className="w-[40px] h-[40px] rounded-full" src={require('./images/ava.jpg')} alt="" />
                        </div>
                        {/*name, time, share with */}
                        <div className="w-[380px] h-[40px] ml-[17px]">
                            {/*name*/}
                            <div className="text-[15px] text-[#E4E6EB] font-medium not-italic  leading-[20px] tracking-[0.04em]">
                                Lê Minh Bắc
                            </div>
                            {/*time and share with*/}
                            <div className="text-[15px] text-[#A8A0AF] font-normal not-italic  leading-[20px] tracking-[0.04em]">
                                1h . <i className="fa-solid fa-earth-americas"></i>
                            </div>
                        </div>
                        {/*more */}
                        <div className="w-[30px] h-[30px] text-[#B0B3B8] hover:bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>

                    {/*captions*/}
                    <div className="w-[500px] h-auto mt-[5px] text-[#DEDDE5]">
                        <div className="mx-[15px] text-[15px] tracking-tight">{post.text}</div>
                    </div>

                    {/*images*/}
                    <div className="w-[500px] h-auto mt-[5px] text-[#DEDDE5]">
                        {post.images.length === 1 && (
                            <div className="w-full flex justify-center">
                                <img
                                    className="w-full m-[10px] rounded-[10px] object-cover"
                                    src={post.images[0]}
                                    alt=""
                                />
                            </div>
                        )}
                        {post.images.length === 2 && (
                            <div className="grid grid-cols-2 gap-[10px] mx-[10px]">
                                <img className="w-full rounded-[10px] object-cover" src={post.images[0]} alt="" />

                                <img className="w-full rounded-[10px] object-cover " src={post.images[1]} alt="" />
                            </div>
                        )}
                        {post.images.length === 3 && (
                            <div className="grid grid-cols-2 gap-[2px]">
                                <img className="w-full h-full object-cover" src={post.images[0]} alt="" />
                                <div className="grid grid-rows-2 gap-[2px]">
                                    <img className="w-full h-48 object-cover" src={post.images[1]} alt="" />
                                    <img className="w-full h-48 object-cover" src={post.images[2]} alt="" />
                                </div>
                            </div>
                        )}
                        {post.images.length === 4 && (
                            <div className="grid grid-rows-2 gap-[2px]">
                                <img className="w-full h-64 object-cover" src={post.images[0]} alt="" />
                                <div className="grid grid-cols-3 gap-[2px] h-auto">
                                    <img className="w-full h-64 object-cover" src={post.images[1]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[2]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[3]} alt="" />
                                </div>
                            </div>
                        )}
                        {post.images.length === 5 && (
                            <div className="grid grid-rows-2 gap-[2px]">
                                <div className="grid grid-cols-2 gap-[2px] h-auto">
                                    <img className="w-full h-64 object-cover" src={post.images[0]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[1]} alt="" />
                                </div>
                                <div className="grid grid-cols-3 gap-[2px] h-auto">
                                    <img className="w-full h-64 object-cover" src={post.images[2]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[3]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[4]} alt="" />
                                </div>
                            </div>
                        )}
                        {post.images.length > 5 && (
                            <div className="grid grid-rows-2 gap-[2px]">
                                <div className="grid grid-cols-2 gap-[2px] h-auto">
                                    <img className="w-full h-64 object-cover" src={post.images[0]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[1]} alt="" />
                                </div>
                                <div className="grid grid-cols-3 gap-[2px] h-auto">
                                    <img className="w-full h-64 object-cover" src={post.images[2]} alt="" />
                                    <img className="w-full h-64 object-cover" src={post.images[3]} alt="" />
                                    <div className="relative w-full h-64">
                                        <img
                                            className="absolute w-full h-64 object-cover bg-[#0000001a]"
                                            src={post.images[4]}
                                            alt=""
                                        />
                                        <span className="absolute w-full h-64 z-[1] bg-[#0000003a] text-center ">
                                            <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[40px] font-semibold">
                                                + {post.images.length - 4}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/*count like, comment and share*/}
                    <div className="grid grid-cols-6 gap-4 w-full h-[40px]">
                        <div className="flex items-center col-start-1 col-span-2 ml-[18px] ">
                            <img
                                className="w-[37px] h-[20px] cursor-pointer"
                                src={require('./images/hahalove.png')}
                                alt=""
                            />
                            <span className="text-[#B8BABF] text-[15px] not-italic font-semibold leading-[21px] ml-1 cursor-pointer">
                                268
                            </span>
                        </div>
                        <div className="flex items-center col-end-7 col-span-4 justify-end mr-[13px]">
                            <span className="text-[#B8BABF] text-[15px] not-italic font-normal leading-[21px] mr-[13px] cursor-pointer">
                                268 bình luận
                            </span>
                            <span className="text-[#B8BABF] text-[15px] not-italic font-normal leading-[21px] cursor-pointer">
                                2 lượt chia sẻ
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
