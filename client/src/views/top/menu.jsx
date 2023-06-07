function Menu() {
    return (
        <div
            className="absolute right-[33px] z-10 mt-[61px] w-[360px] origin-top-right rounded-md bg-[#242526] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
        >
            <div className="py-1" role="none">
                <div className="shadow-lg shadow-[#4e4e4e] w-[330px] ml-[15px] rounded-[10px] divide-y divide-[#7e7e7e]">
                    <a
                        href={'#s'}
                        className="text-white block px-4 py-4 text-lg hover:bg-[#3A3B3C] hover:rounded-[5px] m-1"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                    >
                        <div className="absolute w-[35px] h-[35px] left-[28px] top-[20px]">
                            <img className="w-[35px] h-[35px] rounded-full" src={require('./images/ava.jpg')} alt="" />
                        </div>
                        <span className="ml-[44px] font-semibold">Lê Minh Bắc</span>
                    </a>

                    <a
                        href={'#s'}
                        className="text-blue-500 font-semibold text-[16px] block px-4 py-2 hover:bg-[#3A3B3C] hover:rounded-[5px]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                    >
                        Xem tất cả trang cá nhân
                    </a>
                </div>
                <a
                    href={'#s'}
                    className="text-white block px-4 py-4 text-[16px] hover:bg-[#3A3B3C] hover:rounded-[10px] mt-4"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                >
                    <div className="absolute w-[35px] h-[35px] top-[140px] bg-[#5858587f] rounded-full">
                        <img
                            className="m-[7px] w-[21px] h-[21px] rounded-full"
                            src={require('./images/setting.png')}
                            alt=""
                        />
                    </div>
                    <span className="ml-[44px] font-semibold">Cài đặt & quyền riêng tư</span>
                </a>
                <a
                    href={'#s'}
                    className="text-white block px-4 py-4 text-[16px] hover:bg-[#3A3B3C] hover:rounded-[10px]"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                >
                    <div className="absolute w-[35px] h-[35px] top-[196px] bg-[#5858587f] rounded-full">
                        <img
                            className="m-[7px] w-[21px] h-[21px] rounded-full"
                            src={require('./images/question.png')}
                            alt=""
                        />
                    </div>
                    <span className="ml-[44px] font-semibold">Trợ giúp & hỗ trợ</span>
                </a>
                <a
                    href={'#s'}
                    className="text-white block px-4 py-4 text-[16px] hover:bg-[#3A3B3C] hover:rounded-[10px]"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                >
                    <div className="absolute w-[35px] h-[35px] top-[252px] bg-[#5858587f] rounded-full">
                        <img
                            className="m-[5px] w-[25px] h-[25px] rounded-full"
                            src={require('./images/moon.png')}
                            alt=""
                        />
                    </div>
                    <span className="ml-[44px] font-semibold">Màn hình & trợ năng</span>
                </a>
                <a
                    href={'#s'}
                    className="text-white block px-4 py-4 text-[16px]  hover:bg-[#3A3B3C] hover:rounded-[10px]"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                >
                    <div className="absolute w-[35px] h-[35px] top-[308px] bg-[#5858587f] rounded-full">
                        <img
                            className="m-[7px] w-[21px] h-[21px] rounded-full"
                            src={require('./images/warning.png')}
                            alt=""
                        />
                    </div>
                    <span className="ml-[44px] font-semibold">Đóng góp ý kiến</span>
                </a>

                <a
                    href={'#s'}
                    type="submit"
                    className="text-white block px-4 py-4 text-[16px] hover:bg-[#3A3B3C] hover:rounded-[10px]"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                >
                    <div className="absolute w-[35px] h-[35px] top-[364px] bg-[#5858587f] rounded-full">
                        <img className="m-[9px] w-[19px] h-[19px] " src={require('./images/signout.png')} alt="" />
                    </div>
                    <span className="ml-[44px] font-semibold">Đăng xuất</span>
                </a>

                <span className="text-[#b1b1b1] text-[13px]">
                    <div className="other px-4">
                        <a href={'#s'}>Quyền riêng tư</a> · <a href={'#s'}>Điều khoản</a> · <a href={'#s'}>Quảng cáo</a>{' '}
                        · <a href={'#s'}>Lựa chọn quảng cáo</a> · <a href={'#s'}>Cookie</a> ·{' '}
                        <a href={'#s'}>Xem thêm</a> · Meta © 2023
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Menu;
