


interface Props {

}

const Form = (props: Props) => {
    return (
        <div className="flex w-screen text-center items-center justify-center">

            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div className="mb-10 flex items-center justify-center  ">
                    <img className="w-24" src="/img/origami.png" />
                    <span className="ml-4 text-4xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-indigo-600">ORIGAMI</span>
                    <span className="ml-1 text-4xl font-semibold text-gradient bg-gradient-to-r from-blue-500 to-indigo-600 inline-block align-bottom"> cloud</span>
                </div>

                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-center mb-4 cursor-pointer text-blue-700">Создайте аккаунт</h1>
                    <div className="text-center text-sm mb-8 font-semibold text-blue-600">Создайте аккаунт, чтобы пользоваться нашим сервисом</div>
                </div>
                <div className="space-y-4">
                    <input type="text" placeholder="Username" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div className="text-center mt-6 mt-12">
                    <button className="transition duration-500 ease-in-out py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-105">Создать</button>
                    <p className="mt-4 text-sm text-blue-700">Уже есть аккаунт? <span className="underline cursor-pointer">Войти</span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Form;