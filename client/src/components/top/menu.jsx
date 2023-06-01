function Menu() {
    return (
        <div
            className="absolute right-[40px] z-10 mt-[61px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
        >
            <div className="py-1" role="none">
                <a
                    href={'#s'}
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                >
                    Account settings
                </a>
                <a
                    href={'#s'}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                >
                    Support
                </a>
                <a
                    href={'#s'}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                >
                    License
                </a>
                <form method="POST" action="#" role="none">
                    <button
                        type="submit"
                        className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                    >
                        Sign out
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Menu;
