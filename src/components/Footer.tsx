import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-purple-500/30 py-12 px-4 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-black text-transparent bg-clip-text gradient-bg neon-text mb-4">
              MUSOR.CASH
            </div>
            <p className="text-gray-400 text-sm">
              Лучшее крипто казино для игроков из России и СНГ
            </p>
          </div>

          <div>
            <h4 className="text-purple-300 font-bold mb-4">Игры</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Слоты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Рулетка
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Блэкджек
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Live Casino
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-300 font-bold mb-4">Платежи</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Bitcoin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Ethereum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  USDT
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Litecoin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-300 font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300">
                  Правила
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © 2024 MUSOR.CASH - Все права защищены
          </p>
          <div className="flex justify-center space-x-4">
            <Icon name="Shield" size={16} className="text-green-400" />
            <span className="text-xs text-gray-500">Лицензия Curacao</span>
            <Icon name="Lock" size={16} className="text-purple-400" />
            <span className="text-xs text-gray-500">SSL Защита</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
