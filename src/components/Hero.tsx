import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const handleStartPlaying = () => {
    alert("Добро пожаловать в MUSOR.CASH! Выберите игру в разделе ниже.");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 neon-text text-transparent bg-clip-text gradient-bg">
            MUSOR.CASH
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            Крипто казино нового поколения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="neon-border p-6 rounded-lg bg-black/50">
            <Icon
              name="Zap"
              size={32}
              className="text-yellow-400 mb-3 mx-auto"
            />
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Мгновенные выплаты
            </h3>
            <p className="text-sm text-gray-400">Выводы в крипте за секунды</p>
          </div>

          <div className="neon-border p-6 rounded-lg bg-black/50">
            <Icon
              name="Shield"
              size={32}
              className="text-green-400 mb-3 mx-auto"
            />
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              100% Анонимно
            </h3>
            <p className="text-sm text-gray-400">Без документов и KYC</p>
          </div>

          <div className="neon-border p-6 rounded-lg bg-black/50">
            <Icon
              name="TrendingUp"
              size={32}
              className="text-purple-400 mb-3 mx-auto"
            />
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Высокие выплаты
            </h3>
            <p className="text-sm text-gray-400">RTP до 99.5%</p>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            onClick={handleStartPlaying}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-8 py-4 neon-glow"
          >
            <Icon name="Rocket" size={24} className="mr-2" />
            Начать играть
          </Button>

          <p className="text-sm text-gray-500">
            Бонус 200% на первый депозит + 100 фриспинов
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full pulse-neon"></div>
      <div
        className="absolute bottom-32 right-16 w-6 h-6 bg-pink-500 rounded-full pulse-neon"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-3 h-3 bg-cyan-500 rounded-full pulse-neon"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Hero;
