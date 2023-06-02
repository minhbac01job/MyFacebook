import './style.css';

function LeftSide() {
    return (
        <div className="absolute w-[330px] h-[894px] top-[61px] bg-[#1F2021]">
            {/* avt + name  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[19px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[36px] h-[36px] left-[6px] top-[8px] rounded-full">
                    <img className=" w-[36px] h-[36px] rounded-full" src={require('./images/ava.jpg')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Lê Minh Bắc
                </span>
            </a>

            {/* friends  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[73px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[22px] left-[6px] top-[15px] rounded-full">
                    <img className=" w-[27px] h-[22px] " src={require('./images/friends.png')} alt="" />
                </div>
                <span className="absolute w-[260px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Bạn bè
                </span>
            </a>

            {/* Group  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[129px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/group.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Nhóm
                </span>
            </a>

            {/* Feed  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[183px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/feed.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Bảng feed (Gần đây nhất)
                </span>
            </a>

            {/* Marketplace  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[237px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/store.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Marketplace
                </span>
            </a>

            {/* Watch  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[291px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/watch.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Watch
                </span>
            </a>

            {/* See more  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[345px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[36px] h-[36px] left-[2px] top-[8px] rounded-full bg-[#303031]">
                    <img
                        className=" w-[18px] h-[18px] rounded-full m-[8px]"
                        src={require('./images/down.png')}
                        alt=""
                    />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Xem thêm
                </span>
            </a>

            {/* Devide  */}
            <div className="absolute w-[310px] left-[10px] border-b border-[#444648] top-[410px]"></div>

            {/* Your shortcuts  */}
            <span className="absolute w-[270px] h-[23px] left-[10px] top-[426px] text-[20px] text-[#B0B3B8] not-italic font-semibold leading-[22px] tracking-[0.03em]">
                Lối tắt của bạn
            </span>

            {/* Github link  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[460px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/github.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Github: Lê Minh Bắc
                </span>
            </a>

            {/* Instargram link  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[514px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/instagram.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Instagram: Lê Minh Bắc
                </span>
            </a>

            {/* Discord link  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[568px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/discord.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Discord: Lê Minh Bắc
                </span>
            </a>

            {/* Twitter link  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[622px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/twitter.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Twitter: Lê Minh Bắc
                </span>
            </a>

            {/* Linkedin link  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[676px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/linkedin.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Linkedin: Lê Minh Bắc
                </span>
            </a>

            {/* Pỏn húp link  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[730px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[27px] h-[27px] left-[6px] top-[13px] rounded-full">
                    <img className=" w-[27px] h-[27px] " src={require('./images/pornhub.png')} alt="" />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Tài liệu ôn tập môn sinh môn lý
                </span>
            </a>

            {/* See more  */}
            <a
                href={'#s'}
                className="absolute w-[310px] h-[52px] left-[10px] top-[784px] hover:bg-[#3A3B3C] rounded-[5px]"
            >
                <div className="absolute w-[36px] h-[36px] left-[2px] top-[8px] rounded-full bg-[#303031]">
                    <img
                        className=" w-[18px] h-[18px] rounded-full m-[8px]"
                        src={require('./images/down.png')}
                        alt=""
                    />
                </div>
                <span className="absolute w-[270px] h-[20px] ml-[50px] mt-[16px] text-[15px] text-white not-italic font-normal leading-[20px] tracking-[0.04em]">
                    Xem thêm
                </span>
            </a>

            <span className="absolute text-[#b1b1b1] text-[13px] bottom-0">
                <div className="other px-4">
                    <a href={'#s'}>Quyền riêng tư</a> · <a href={'#s'}>Điều khoản</a> · <a href={'#s'}>Quảng cáo</a> ·{' '}
                    <a href={'#s'}>Lựa chọn quảng cáo</a> · <a href={'#s'}>Cookie</a> · <a href={'#s'}>Xem thêm</a> ·
                    Meta © 2023
                </div>
            </span>
        </div>
    );
}
export default LeftSide;
