import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GamesPreview = () => {
  const handlePlayGame = (gameName: string) => {
    alert(`Запуск игры: ${gameName}`);
  };

  const handleAllGames = () => {
    alert("Полный каталог игр в разработке");
  };

  const games = [
    {
      id: 1,
      name: "Cosmic Slots",
      type: "Слоты",
      image: "🎰",
      multiplier: "x5000",
    },
    {
      id: 2,
      name: "Neon Roulette",
      type: "Рулетка",
      image: "🎡",
      multiplier: "x36",
    },
    {
      id: 3,
      name: "Crypto Blackjack",
      type: "Блэкджек",
      image: "🃏",
      multiplier: "x21",
    },
    {
      id: 4,
      name: "Live Poker",
      type: "Покер",
      image: "♠️",
      multiplier: "x100",
    },
    {
      id: 5,
      name: "Moon Dice",
      type: "Кости",
      image: "🎲",
      multiplier: "x1000",
    },
    {
      id: 6,
      name: "Fortune Wheel",
      type: "Колесо",
      image: "🎯",
      multiplier: "x50",
    },
  ];

  return (
    <section id="games" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 neon-text text-transparent bg-clip-text gradient-bg">
            Игры
          </h2>
          <p className="text-xl text-purple-300">
            Более 1000+ проверенных игр с мгновенными выплатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="neon-border p-6 rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{game.image}</div>
                <h3 className="text-lg font-bold text-purple-300 mb-2">
                  {game.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{game.type}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold">
                    до {game.multiplier}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handlePlayGame(game.name)}
                    className="bg-purple-600 hover:bg-purple-700 group-hover:neon-glow"
                  >
                    Играть
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={handleAllGames}
            className="neon-border text-purple-300 hover:bg-purple-500/20"
          >
            <Icon name="Gamepad2" size={20} className="mr-2" />
            Все игры
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesPreview;
