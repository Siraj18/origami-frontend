


interface Props {
    children: React.ReactChild
}


const NavButton = (props: Props) => {
    return (
        <>
            <li className="hover:bg-gray-100 ">
                <a
                    href="."
                    className="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
                    {props.children}

                </a>
            </li>
        </>
    );
}

export default NavButton;