import { useState } from 'react';
import './style.css';
import Menu from './menu';

function Top() {
    const [show, setShow] = useState(false);

    return (
        <div className="box-border absolute w-[1512px] h-[61px] bg-[#242526] border border-[#3A3B3C]">
            {/* top-left  */}
            <a href={'#s'} className="bg-[url('./views/top/images/facebook.png')] absolute w-10 h-10 left-4 top-2">
                {' '}
            </a>
            <div className="absolute w-[241px] h-[40px] left-[63px] top-[7px] bg-[#3A3B3C] rounded-full">
                <div className="absolute w-[15px] h-[15px] left-[12px] top-[13px] bg-[url('./views/top/images/search.png')]"></div>
                <input
                    className="focus:outline-none text-[#aeb1b5] text-[15px] leading-[20px] absolute  h-[20px] left-[37px] top-[10px] tracking-[0.02em] bg-[#3A3B3C] ]"
                    placeholder="Tìm kiếm trên Facebook"
                />
            </div>
            {/* top-center */}
            <div className="absolute w-[108px] h-[59px] left-[418px] top-[1px] border-b-[4px] border-[#2a76dc]">
                <div className="absolute w-[24px] h-[24px] left-[43px] top-[15px] bg-[url('./views/top/images/home.png')]"></div>
            </div>
            <div className="absolute w-[108px] h-[59px] left-[540px] top-[1px] hover:bg-[#3A3B3C] rounded-[7px]">
                <div className="absolute w-[26px] h-[26px] left-[41px] top-[14px] bg-[url('./views/top/images/user.png')]"></div>
            </div>
            <div className="absolute w-[108px] h-[59px] left-[661px] top-[1px] hover:bg-[#3A3B3C] rounded-[7px]">
                <div className="absolute w-[24px] h-[24px] left-[41px] top-[15px] bg-[url('./views/top/images/watch.png')]"></div>
            </div>
            <div className="absolute w-[108px] h-[59px] left-[783px] top-[1px] hover:bg-[#3A3B3C] rounded-[7px]">
                <div className="absolute w-[26px] h-[26px] left-[39px] top-[14px] bg-[url('./views/top/images/group.png')]"></div>
            </div>
            <div className="absolute w-[108px] h-[59px] left-[905px] top-[1px] hover:bg-[#3A3B3C] rounded-[7px]">
                <div className="absolute w-[30px] h-[27px] left-[37px] top-[14px] bg-[url('./views/top/images/games.png')]"></div>
            </div>

            {/* //top-right */}
            <div className="absolute w-[46px] h-[46px] left-[1265px] top-[5px] bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full">
                <div className="absolute w-[20px] h-[20px] left-[13px] top-[13px] bg-[url('./views/top/images/menu.png')]"></div>
            </div>
            <div className="absolute w-[46px] h-[46px] left-[1319px] top-[5px] bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full">
                <div className="absolute w-[20px] h-[20px] left-[13px] top-[13px] bg-[url('./views/top/images/messenger.png')]"></div>
            </div>
            <div className="absolute w-[46px] h-[46px] left-[1374px] top-[5px] bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full">
                <div className="absolute w-[27px] h-[27px] left-[7px] top-[9px] bg-[url('./views/top/images/bell.png')] rotate-[10deg]"></div>
            </div>
            <button
                type="button"
                className="absolute w-[46px] h-[46px] left-[1427px] top-[5px] bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShow(!show)}
            >
                <div className="absolute w-[46px] h-[46px] left-[0px] top-[0px]">
                    <img className="w-[46px] h-[46px] rounded-full" src={require('./images/ava.jpg')} alt="" />
                </div>
            </button>
            {show && <Menu />}
        </div>
    );
}
export default Top;
