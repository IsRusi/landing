import logo from "../assets/vite.svg"
export function Header()
{
return(<>
    <header className="h-25">
        <div  className="flex flex-row justify-center items-center gap-4 ">
            <img width={60} height={60} alt="logo" src={logo} className="flex-none"/>
            <div>
            <nav className="flex flex-1 gap-4">
                <a className="cursor-pointer hover:">Главная</a>
                <a className="cursor-pointer">Наши услуги</a>
                <a className="cursor-pointer">Контакты</a>
                <a className="cursor-pointer">О нас</a>
            </nav>
            </div>
            <a className="bg-orange-600 rounded-xl p-[6.5px] animate-pulse text-white w-45 text-center h-10">Заказать звонок</a>
            </div>
        
    </header>
</>);
}