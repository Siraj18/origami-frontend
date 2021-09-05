
interface Props {

}

const Logo = (props: Props) => {
    return (
        <>
            <div className="h-16 flex items-center w-full">

                <a className="mx-auto" href="http://svelte.dev/">
                    <img
                        className="transition duration-500 ease-in-out w-10 mx-auto hover: transform hover:scale-110"
                        src="/img/origami.png"
                        alt="svelte logo" />
                </a>
            </div>
        </>
    );
}

export default Logo;