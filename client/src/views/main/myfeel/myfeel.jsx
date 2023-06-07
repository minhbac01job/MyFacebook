import './style.css';

function MyFeel() {
    return (
        <div className="w-[500px] h-[121px] relative top-[90px] bg-[#242526] rounded-[10px]">
            {/* Avatar */}
            <div className="absolute w-[41px] h-[41px] left-[15px] top-[11px] rounded-full">
                <img className="w-[41px] h-[41px] rounded-full" src={require('./images/ava.jpg')} alt="" />
            </div>
            {/* Input */}
            <input
                type="text"
                className="pl-[15px] focus:outline-none text-[#B0B3B8] text-[18px] leading-[20px] tracking-[0.02em] absolute w-[419px] h-[41px] left-[64px] top-[11px] rounded-full bg-[#3A3B3C]"
                placeholder="Minh Bắc ơi, bạn đang nghĩ gì thế?"
            />
            {/* Devide */}
            <div className="absolute w-[466px] left-[16px] top-[63px] border-b border-[#3A3B3C]"></div>
            {/* box */}
            <div className="absolute flex justify-center w-[466px] h-[40px] left-[16px] top-[72px]">
                {/* Live video */}
                <div className="box-border flex items-center justify-center flex-auto w-32 h-[40px] cursor-pointer hover:bg-[#3A3B3C] rounded-[5px]">
                    <div className="w-[26px] h-[19px]">
                        <img className="w-[26px] h-[19px] " src={require('./images/livevideo.png')} alt="" />
                    </div>
                    <span className="ml-[5px] text-[#B0B3B8] font-semibold">Video trực tiếp</span>
                </div>
                {/* Add photo/video */}
                <div className="box-border flex items-center justify-center flex-auto w-32 h-[40px] cursor-pointer hover:bg-[#3A3B3C] rounded-[5px]">
                    <div className="w-[26px] h-[27px]">
                        <img className="w-[26px] h-[27px] " src={require('./images/photo.png')} alt="" />
                    </div>
                    <span className="ml-[5px] text-[#B0B3B8] font-semibold">Ảnh/video</span>
                </div>
                {/* Feeling/activity */}
                <div className="box-border flex items-center justify-center flex-auto w-32 h-[40px] cursor-pointer hover:bg-[#3A3B3C] rounded-[5px]">
                    <div className="w-[23px] h-[23px]">
                        <img className="w-[23px] h-[23px] " src={require('./images/happy.png')} alt="" />
                    </div>
                    <span className="ml-[5px] text-[#B0B3B8] font-semibold">Cảm xúc</span>
                </div>
            </div>
        </div>
    );
}

export default MyFeel;
