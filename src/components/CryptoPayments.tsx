import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CryptoPayments = () => {
  const cryptos = [
    { name: "Bitcoin", symbol: "BTC", icon: "₿", fee: "0.1%", time: "5 мин" },
    { name: "Ethereum", symbol: "ETH", icon: "Ξ", fee: "0.05%", time: "2 мин" },
    { name: "USDT", symbol: "USDT", icon: "₮", fee: "0%", time: "1 мин" },
    { name: "Litecoin", symbol: "LTC", icon: "Ł", fee: "0.1%", time: "3 мин" },
  ];

  return (
    <section
      id="crypto"
      className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 neon-text text-transparent bg-clip-text gradient-bg">
            Крипто платежи
          </h2>
          <p className="text-xl text-purple-300">
            Мгновенные депозиты и выводы в криптовалюте
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="neon-border p-8 rounded-lg bg-black/50">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <Icon name="ArrowDown" size={24} className="mr-2" />
              Депозит
            </h3>

            <div className="space-y-4 mb-6">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex items-center justify-between p-3 border border-purple-500/30 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{crypto.icon}</span>
                    <div>
                      <div className="font-bold text-purple-300">
                        {crypto.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {crypto.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">
                      Комиссия: {crypto.fee}
                    </div>
                    <div className="text-sm text-gray-400">{crypto.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 neon-glow">
              <Icon name="Plus" size={20} className="mr-2" />
              Пополнить баланс
            </Button>
          </div>

          <div className="neon-border p-8 rounded-lg bg-black/50">
            <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
              <Icon name="ArrowUp" size={24} className="mr-2" />
              Вывод
            </h3>

            <div className="space-y-4 mb-6">
              <div className="p-4 border border-purple-500/30 rounded-lg">
                <div className="text-purple-300 mb-2">
                  Мгновенные выводы 24/7
                </div>
                <div className="text-sm text-gray-400">
                  Без лимитов и ожидания
                </div>
              </div>

              <div className="p-4 border border-purple-500/30 rounded-lg">
                <div className="text-purple-300 mb-2">Минимальная сумма</div>
                <div className="text-sm text-gray-400">
                  От $10 в любой криптовалюте
                </div>
              </div>

              <div className="p-4 border border-purple-500/30 rounded-lg">
                <div className="text-purple-300 mb-2">Безопасность</div>
                <div className="text-sm text-gray-400">
                  Холодные кошельки и мульти-подпись
                </div>
              </div>
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-700 neon-glow">
              <Icon name="Minus" size={20} className="mr-2" />
              Вывести средства
            </Button>
          </div>
        </div>

        <div className="text-center p-6 neon-border rounded-lg bg-black/30">
          <h4 className="text-xl font-bold text-purple-300 mb-2">
            Быстрые действия
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 neon-glow"
            >
              <Icon name="QrCode" size={20} className="mr-2" />
              QR депозит
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 neon-glow"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Быстрый вывод
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoPayments;
