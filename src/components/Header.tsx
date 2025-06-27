import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-black text-transparent bg-clip-text gradient-bg neon-text">
            MUSOR.CASH
          </div>
          <div className="w-2 h-2 bg-purple-500 rounded-full pulse-neon"></div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#games"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            Игры
          </a>
          <a
            href="#crypto"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            Крипто
          </a>
          <a
            href="#live"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            Live
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="neon-border text-purple-300 hover:bg-purple-500/20"
          >
            Вход
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 neon-glow">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
