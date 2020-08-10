const config = {
   ports: {
      db: 0,
      finnhub: 3000,
   },
   unitsName: {
      minute: "minute",
      fifteen: "fifteen",
      hour: "hour",
   },
   api: {
      BASE_API: "api",
      minute: "minute",
      fifteen: "fifteenMinutes",
      hour: "hour",
   },

   timingCandles: {
      minute: 6 * 1000,
      fifteen: 15 * 60 * 1000,
      hour: 60 * 60 * 1000,
   },
   symbols: [
      {
         symbol: "AAPL",
      },
      // {
      //    symbol: "IC MARKETS:1",
      // },
      // {
      //    description: "Binance ETHBTC",
      //    displaySymbol: "ETH/BTC",
      //    symbol: "BINANCE:ETHBTC",
      // },
      // {
      //    description: "Binance LTCBTC",
      //    displaySymbol: "LTC/BTC",
      //    symbol: "BINANCE:LTCBTC",
      // },
      // {
      //    description: "Binance BNBBTC",
      //    displaySymbol: "BNB/BTC",
      //    symbol: "BINANCE:BNBBTC",
      // },
      // {
      //    description: "Binance NEOBTC",
      //    displaySymbol: "NEO/BTC",
      //    symbol: "BINANCE:NEOBTC",
      // },
      // {
      //    description: "Binance QTUMETH",
      //    displaySymbol: "QTUM/ETH",
      //    symbol: "BINANCE:QTUMETH",
      // },
      // {
      //    description: "Binance EOSETH",
      //    displaySymbol: "EOS/ETH",
      //    symbol: "BINANCE:EOSETH",
      // },
      // {
      //    description: "Binance SNTETH",
      //    displaySymbol: "SNT/ETH",
      //    symbol: "BINANCE:SNTETH",
      // },
      // {
      //    description: "Binance BNTETH",
      //    displaySymbol: "BNT/ETH",
      //    symbol: "BINANCE:BNTETH",
      // },
      // {
      //    description: "Binance BCCBTC",
      //    displaySymbol: "BCC/BTC",
      //    symbol: "BINANCE:BCCBTC",
      // },
      // {
      //    description: "Binance GASBTC",
      //    displaySymbol: "GAS/BTC",
      //    symbol: "BINANCE:GASBTC",
      // },
      // {
      //    description: "Binance BNBETH",
      //    displaySymbol: "BNB/ETH",
      //    symbol: "BINANCE:BNBETH",
      // },
      // {
      //    description: "Binance BTCUSDT",
      //    displaySymbol: "BTC/USDT",
      //    symbol: "BINANCE:BTCUSDT",
      // },
      // {
      //    description: "Binance ETHUSDT",
      //    displaySymbol: "ETH/USDT",
      //    symbol: "BINANCE:ETHUSDT",
      // },
      // {
      //    description: "Binance HSRBTC",
      //    displaySymbol: "HSR/BTC",
      //    symbol: "BINANCE:HSRBTC",
      // },
      // {
      //    description: "Binance OAXETH",
      //    displaySymbol: "OAX/ETH",
      //    symbol: "BINANCE:OAXETH",
      // },
      // {
      //    description: "Binance DNTETH",
      //    displaySymbol: "DNT/ETH",
      //    symbol: "BINANCE:DNTETH",
      // },
      // {
      //    description: "Binance MCOETH",
      //    displaySymbol: "MCO/ETH",
      //    symbol: "BINANCE:MCOETH",
      // },
      // {
      //    description: "Binance ICNETH",
      //    displaySymbol: "ICN/ETH",
      //    symbol: "BINANCE:ICNETH",
      // },
      // {
      //    description: "Binance MCOBTC",
      //    displaySymbol: "MCO/BTC",
      //    symbol: "BINANCE:MCOBTC",
      // },
      // {
      //    description: "Binance WTCBTC",
      //    displaySymbol: "WTC/BTC",
      //    symbol: "BINANCE:WTCBTC",
      // },
      // {
      //    description: "Binance WTCETH",
      //    displaySymbol: "WTC/ETH",
      //    symbol: "BINANCE:WTCETH",
      // },
      // {
      //    description: "Binance LRCBTC",
      //    displaySymbol: "LRC/BTC",
      //    symbol: "BINANCE:LRCBTC",
      // },
      // {
      //    description: "Binance LRCETH",
      //    displaySymbol: "LRC/ETH",
      //    symbol: "BINANCE:LRCETH",
      // },
      // {
      //    description: "Binance QTUMBTC",
      //    displaySymbol: "QTUM/BTC",
      //    symbol: "BINANCE:QTUMBTC",
      // },
      // {
      //    description: "Binance YOYOBTC",
      //    displaySymbol: "YOYO/BTC",
      //    symbol: "BINANCE:YOYOBTC",
      // },
      // {
      //    description: "Binance OMGBTC",
      //    displaySymbol: "OMG/BTC",
      //    symbol: "BINANCE:OMGBTC",
      // },
      // {
      //    description: "Binance OMGETH",
      //    displaySymbol: "OMG/ETH",
      //    symbol: "BINANCE:OMGETH",
      // },
      // {
      //    description: "Binance ZRXBTC",
      //    displaySymbol: "ZRX/BTC",
      //    symbol: "BINANCE:ZRXBTC",
      // },
      // {
      //    description: "Binance ZRXETH",
      //    displaySymbol: "ZRX/ETH",
      //    symbol: "BINANCE:ZRXETH",
      // },
      // {
      //    description: "Binance STRATBTC",
      //    displaySymbol: "STRAT/BTC",
      //    symbol: "BINANCE:STRATBTC",
      // },
      // {
      //    description: "Binance STRATETH",
      //    displaySymbol: "STRAT/ETH",
      //    symbol: "BINANCE:STRATETH",
      // },
      // {
      //    description: "Binance SNGLSBTC",
      //    displaySymbol: "SNGLS/BTC",
      //    symbol: "BINANCE:SNGLSBTC",
      // },
      // {
      //    description: "Binance SNGLSETH",
      //    displaySymbol: "SNGLS/ETH",
      //    symbol: "BINANCE:SNGLSETH",
      // },
      // {
      //    description: "Binance BQXBTC",
      //    displaySymbol: "BQX/BTC",
      //    symbol: "BINANCE:BQXBTC",
      // },
      // {
      //    description: "Binance BQXETH",
      //    displaySymbol: "BQX/ETH",
      //    symbol: "BINANCE:BQXETH",
      // },
      // {
      //    description: "Binance KNCBTC",
      //    displaySymbol: "KNC/BTC",
      //    symbol: "BINANCE:KNCBTC",
      // },
      // {
      //    description: "Binance KNCETH",
      //    displaySymbol: "KNC/ETH",
      //    symbol: "BINANCE:KNCETH",
      // },
      // {
      //    description: "Binance FUNBTC",
      //    displaySymbol: "FUN/BTC",
      //    symbol: "BINANCE:FUNBTC",
      // },
      // {
      //    description: "Binance FUNETH",
      //    displaySymbol: "FUN/ETH",
      //    symbol: "BINANCE:FUNETH",
      // },
      // {
      //    description: "Binance SNMBTC",
      //    displaySymbol: "SNM/BTC",
      //    symbol: "BINANCE:SNMBTC",
      // },
      // {
      //    description: "Binance SNMETH",
      //    displaySymbol: "SNM/ETH",
      //    symbol: "BINANCE:SNMETH",
      // },
      // {
      //    description: "Binance NEOETH",
      //    displaySymbol: "NEO/ETH",
      //    symbol: "BINANCE:NEOETH",
      // },
      // {
      //    description: "Binance IOTABTC",
      //    displaySymbol: "IOTA/BTC",
      //    symbol: "BINANCE:IOTABTC",
      // },
      // {
      //    description: "Binance IOTAETH",
      //    displaySymbol: "IOTA/ETH",
      //    symbol: "BINANCE:IOTAETH",
      // },
      // {
      //    description: "Binance LINKBTC",
      //    displaySymbol: "LINK/BTC",
      //    symbol: "BINANCE:LINKBTC",
      // },
      // {
      //    description: "Binance LINKETH",
      //    displaySymbol: "LINK/ETH",
      //    symbol: "BINANCE:LINKETH",
      // },
      // {
      //    description: "Binance XVGBTC",
      //    displaySymbol: "XVG/BTC",
      //    symbol: "BINANCE:XVGBTC",
      // },
      // {
      //    description: "Binance XVGETH",
      //    displaySymbol: "XVG/ETH",
      //    symbol: "BINANCE:XVGETH",
      // },
      // {
      //    description: "Binance SALTBTC",
      //    displaySymbol: "SALT/BTC",
      //    symbol: "BINANCE:SALTBTC",
      // },
      // {
      //    description: "Binance SALTETH",
      //    displaySymbol: "SALT/ETH",
      //    symbol: "BINANCE:SALTETH",
      // },
      // {
      //    description: "Binance MDABTC",
      //    displaySymbol: "MDA/BTC",
      //    symbol: "BINANCE:MDABTC",
      // },
      // {
      //    description: "Binance MDAETH",
      //    displaySymbol: "MDA/ETH",
      //    symbol: "BINANCE:MDAETH",
      // },
      // {
      //    description: "Binance MTLBTC",
      //    displaySymbol: "MTL/BTC",
      //    symbol: "BINANCE:MTLBTC",
      // },
      // {
      //    description: "Binance MTLETH",
      //    displaySymbol: "MTL/ETH",
      //    symbol: "BINANCE:MTLETH",
      // },
      // {
      //    description: "Binance SUBBTC",
      //    displaySymbol: "SUB/BTC",
      //    symbol: "BINANCE:SUBBTC",
      // },
      // {
      //    description: "Binance SUBETH",
      //    displaySymbol: "SUB/ETH",
      //    symbol: "BINANCE:SUBETH",
      // },
      // {
      //    description: "Binance EOSBTC",
      //    displaySymbol: "EOS/BTC",
      //    symbol: "BINANCE:EOSBTC",
      // },
      // {
      //    description: "Binance SNTBTC",
      //    displaySymbol: "SNT/BTC",
      //    symbol: "BINANCE:SNTBTC",
      // },
      // {
      //    description: "Binance ETCETH",
      //    displaySymbol: "ETC/ETH",
      //    symbol: "BINANCE:ETCETH",
      // },
      // {
      //    description: "Binance ETCBTC",
      //    displaySymbol: "ETC/BTC",
      //    symbol: "BINANCE:ETCBTC",
      // },
      // {
      //    description: "Binance MTHBTC",
      //    displaySymbol: "MTH/BTC",
      //    symbol: "BINANCE:MTHBTC",
      // },
      // {
      //    description: "Binance MTHETH",
      //    displaySymbol: "MTH/ETH",
      //    symbol: "BINANCE:MTHETH",
      // },
      // {
      //    description: "Binance ENGBTC",
      //    displaySymbol: "ENG/BTC",
      //    symbol: "BINANCE:ENGBTC",
      // },
      // {
      //    description: "Binance ENGETH",
      //    displaySymbol: "ENG/ETH",
      //    symbol: "BINANCE:ENGETH",
      // },
      // {
      //    description: "Binance DNTBTC",
      //    displaySymbol: "DNT/BTC",
      //    symbol: "BINANCE:DNTBTC",
      // },
      // {
      //    description: "Binance ZECBTC",
      //    displaySymbol: "ZEC/BTC",
      //    symbol: "BINANCE:ZECBTC",
      // },
      // {
      //    description: "Binance ZECETH",
      //    displaySymbol: "ZEC/ETH",
      //    symbol: "BINANCE:ZECETH",
      // },
      // {
      //    description: "Binance BNTBTC",
      //    displaySymbol: "BNT/BTC",
      //    symbol: "BINANCE:BNTBTC",
      // },
      // {
      //    description: "Binance ASTBTC",
      //    displaySymbol: "AST/BTC",
      //    symbol: "BINANCE:ASTBTC",
      // },
      // {
      //    description: "Binance ASTETH",
      //    displaySymbol: "AST/ETH",
      //    symbol: "BINANCE:ASTETH",
      // },
      // {
      //    description: "Binance DASHBTC",
      //    displaySymbol: "DASH/BTC",
      //    symbol: "BINANCE:DASHBTC",
      // },
      // {
      //    description: "Binance DASHETH",
      //    displaySymbol: "DASH/ETH",
      //    symbol: "BINANCE:DASHETH",
      // },
      // {
      //    description: "Binance OAXBTC",
      //    displaySymbol: "OAX/BTC",
      //    symbol: "BINANCE:OAXBTC",
      // },
      // {
      //    description: "Binance ICNBTC",
      //    displaySymbol: "ICN/BTC",
      //    symbol: "BINANCE:ICNBTC",
      // },
      // {
      //    description: "Binance BTGBTC",
      //    displaySymbol: "BTG/BTC",
      //    symbol: "BINANCE:BTGBTC",
      // },
      // {
      //    description: "Binance BTGETH",
      //    displaySymbol: "BTG/ETH",
      //    symbol: "BINANCE:BTGETH",
      // },
      // {
      //    description: "Binance EVXBTC",
      //    displaySymbol: "EVX/BTC",
      //    symbol: "BINANCE:EVXBTC",
      // },
      // {
      //    description: "Binance EVXETH",
      //    displaySymbol: "EVX/ETH",
      //    symbol: "BINANCE:EVXETH",
      // },
      // {
      //    description: "Binance REQBTC",
      //    displaySymbol: "REQ/BTC",
      //    symbol: "BINANCE:REQBTC",
      // },
      // {
      //    description: "Binance REQETH",
      //    displaySymbol: "REQ/ETH",
      //    symbol: "BINANCE:REQETH",
      // },
      // {
      //    description: "Binance VIBBTC",
      //    displaySymbol: "VIB/BTC",
      //    symbol: "BINANCE:VIBBTC",
      // },
      // {
      //    description: "Binance VIBETH",
      //    displaySymbol: "VIB/ETH",
      //    symbol: "BINANCE:VIBETH",
      // },
      // {
      //    description: "Binance HSRETH",
      //    displaySymbol: "HSR/ETH",
      //    symbol: "BINANCE:HSRETH",
      // },
      // {
      //    description: "Binance TRXBTC",
      //    displaySymbol: "TRX/BTC",
      //    symbol: "BINANCE:TRXBTC",
      // },
      // {
      //    description: "Binance TRXETH",
      //    displaySymbol: "TRX/ETH",
      //    symbol: "BINANCE:TRXETH",
      // },
      // {
      //    description: "Binance POWRBTC",
      //    displaySymbol: "POWR/BTC",
      //    symbol: "BINANCE:POWRBTC",
      // },
      // {
      //    description: "Binance POWRETH",
      //    displaySymbol: "POWR/ETH",
      //    symbol: "BINANCE:POWRETH",
      // },
      // {
      //    description: "Binance ARKBTC",
      //    displaySymbol: "ARK/BTC",
      //    symbol: "BINANCE:ARKBTC",
      // },
      // {
      //    description: "Binance ARKETH",
      //    displaySymbol: "ARK/ETH",
      //    symbol: "BINANCE:ARKETH",
      // },
      // {
      //    description: "Binance YOYOETH",
      //    displaySymbol: "YOYO/ETH",
      //    symbol: "BINANCE:YOYOETH",
      // },
      // {
      //    description: "Binance XRPBTC",
      //    displaySymbol: "XRP/BTC",
      //    symbol: "BINANCE:XRPBTC",
      // },
      // {
      //    description: "Binance XRPETH",
      //    displaySymbol: "XRP/ETH",
      //    symbol: "BINANCE:XRPETH",
      // },
      // {
      //    description: "Binance MODBTC",
      //    displaySymbol: "MOD/BTC",
      //    symbol: "BINANCE:MODBTC",
      // },
      // {
      //    description: "Binance MODETH",
      //    displaySymbol: "MOD/ETH",
      //    symbol: "BINANCE:MODETH",
      // },
      // {
      //    description: "Binance ENJBTC",
      //    displaySymbol: "ENJ/BTC",
      //    symbol: "BINANCE:ENJBTC",
      // },
      // {
      //    description: "Binance ENJETH",
      //    displaySymbol: "ENJ/ETH",
      //    symbol: "BINANCE:ENJETH",
      // },
      // {
      //    description: "Binance STORJBTC",
      //    displaySymbol: "STORJ/BTC",
      //    symbol: "BINANCE:STORJBTC",
      // },
      // {
      //    description: "Binance STORJETH",
      //    displaySymbol: "STORJ/ETH",
      //    symbol: "BINANCE:STORJETH",
      // },
      // {
      //    description: "Binance BNBUSDT",
      //    displaySymbol: "BNB/USDT",
      //    symbol: "BINANCE:BNBUSDT",
      // },
      // {
      //    description: "Binance VENBNB",
      //    displaySymbol: "VEN/BNB",
      //    symbol: "BINANCE:VENBNB",
      // },
      // {
      //    description: "Binance YOYOBNB",
      //    displaySymbol: "YOYO/BNB",
      //    symbol: "BINANCE:YOYOBNB",
      // },
      // {
      //    description: "Binance POWRBNB",
      //    displaySymbol: "POWR/BNB",
      //    symbol: "BINANCE:POWRBNB",
      // },
      // {
      //    description: "Binance VENBTC",
      //    displaySymbol: "VEN/BTC",
      //    symbol: "BINANCE:VENBTC",
      // },
      // {
      //    description: "Binance VENETH",
      //    displaySymbol: "VEN/ETH",
      //    symbol: "BINANCE:VENETH",
      // },
      // {
      //    description: "Binance KMDBTC",
      //    displaySymbol: "KMD/BTC",
      //    symbol: "BINANCE:KMDBTC",
      // },
      // {
      //    description: "Binance KMDETH",
      //    displaySymbol: "KMD/ETH",
      //    symbol: "BINANCE:KMDETH",
      // },
      // {
      //    description: "Binance NULSBNB",
      //    displaySymbol: "NULS/BNB",
      //    symbol: "BINANCE:NULSBNB",
      // },
      // {
      //    description: "Binance RCNBTC",
      //    displaySymbol: "RCN/BTC",
      //    symbol: "BINANCE:RCNBTC",
      // },
      // {
      //    description: "Binance RCNETH",
      //    displaySymbol: "RCN/ETH",
      //    symbol: "BINANCE:RCNETH",
      // },
      // {
      //    description: "Binance RCNBNB",
      //    displaySymbol: "RCN/BNB",
      //    symbol: "BINANCE:RCNBNB",
      // },
      // {
      //    description: "Binance NULSBTC",
      //    displaySymbol: "NULS/BTC",
      //    symbol: "BINANCE:NULSBTC",
      // },
      // {
      //    description: "Binance NULSETH",
      //    displaySymbol: "NULS/ETH",
      //    symbol: "BINANCE:NULSETH",
      // },
      // {
      //    description: "Binance RDNBTC",
      //    displaySymbol: "RDN/BTC",
      //    symbol: "BINANCE:RDNBTC",
      // },
      // {
      //    description: "Binance RDNETH",
      //    displaySymbol: "RDN/ETH",
      //    symbol: "BINANCE:RDNETH",
      // },
      // {
      //    description: "Binance RDNBNB",
      //    displaySymbol: "RDN/BNB",
      //    symbol: "BINANCE:RDNBNB",
      // },
      // {
      //    description: "Binance XMRBTC",
      //    displaySymbol: "XMR/BTC",
      //    symbol: "BINANCE:XMRBTC",
      // },
      // {
      //    description: "Binance XMRETH",
      //    displaySymbol: "XMR/ETH",
      //    symbol: "BINANCE:XMRETH",
      // },
      // {
      //    description: "Binance DLTBNB",
      //    displaySymbol: "DLT/BNB",
      //    symbol: "BINANCE:DLTBNB",
      // },
      // {
      //    description: "Binance WTCBNB",
      //    displaySymbol: "WTC/BNB",
      //    symbol: "BINANCE:WTCBNB",
      // },
      // {
      //    description: "Binance DLTBTC",
      //    displaySymbol: "DLT/BTC",
      //    symbol: "BINANCE:DLTBTC",
      // },
      // {
      //    description: "Binance DLTETH",
      //    displaySymbol: "DLT/ETH",
      //    symbol: "BINANCE:DLTETH",
      // },
      // {
      //    description: "Binance AMBBTC",
      //    displaySymbol: "AMB/BTC",
      //    symbol: "BINANCE:AMBBTC",
      // },
      // {
      //    description: "Binance AMBETH",
      //    displaySymbol: "AMB/ETH",
      //    symbol: "BINANCE:AMBETH",
      // },
      // {
      //    description: "Binance AMBBNB",
      //    displaySymbol: "AMB/BNB",
      //    symbol: "BINANCE:AMBBNB",
      // },
      // {
      //    description: "Binance BCCETH",
      //    displaySymbol: "BCC/ETH",
      //    symbol: "BINANCE:BCCETH",
      // },
      // {
      //    description: "Binance BCCUSDT",
      //    displaySymbol: "BCC/USDT",
      //    symbol: "BINANCE:BCCUSDT",
      // },
      // {
      //    description: "Binance BCCBNB",
      //    displaySymbol: "BCC/BNB",
      //    symbol: "BINANCE:BCCBNB",
      // },
      // {
      //    description: "Binance BATBTC",
      //    displaySymbol: "BAT/BTC",
      //    symbol: "BINANCE:BATBTC",
      // },
      // {
      //    description: "Binance BATETH",
      //    displaySymbol: "BAT/ETH",
      //    symbol: "BINANCE:BATETH",
      // },
      // {
      //    description: "Binance BATBNB",
      //    displaySymbol: "BAT/BNB",
      //    symbol: "BINANCE:BATBNB",
      // },
      // {
      //    description: "Binance BCPTBTC",
      //    displaySymbol: "BCPT/BTC",
      //    symbol: "BINANCE:BCPTBTC",
      // },
      // {
      //    description: "Binance BCPTETH",
      //    displaySymbol: "BCPT/ETH",
      //    symbol: "BINANCE:BCPTETH",
      // },
      // {
      //    description: "Binance BCPTBNB",
      //    displaySymbol: "BCPT/BNB",
      //    symbol: "BINANCE:BCPTBNB",
      // },
      // {
      //    description: "Binance ARNBTC",
      //    displaySymbol: "ARN/BTC",
      //    symbol: "BINANCE:ARNBTC",
      // },
      // {
      //    description: "Binance ARNETH",
      //    displaySymbol: "ARN/ETH",
      //    symbol: "BINANCE:ARNETH",
      // },
      // {
      //    description: "Binance GVTBTC",
      //    displaySymbol: "GVT/BTC",
      //    symbol: "BINANCE:GVTBTC",
      // },
      // {
      //    description: "Binance GVTETH",
      //    displaySymbol: "GVT/ETH",
      //    symbol: "BINANCE:GVTETH",
      // },
      // {
      //    description: "Binance CDTBTC",
      //    displaySymbol: "CDT/BTC",
      //    symbol: "BINANCE:CDTBTC",
      // },
      // {
      //    description: "Binance CDTETH",
      //    displaySymbol: "CDT/ETH",
      //    symbol: "BINANCE:CDTETH",
      // },
      // {
      //    description: "Binance GXSBTC",
      //    displaySymbol: "GXS/BTC",
      //    symbol: "BINANCE:GXSBTC",
      // },
      // {
      //    description: "Binance GXSETH",
      //    displaySymbol: "GXS/ETH",
      //    symbol: "BINANCE:GXSETH",
      // },
      // {
      //    description: "Binance NEOUSDT",
      //    displaySymbol: "NEO/USDT",
      //    symbol: "BINANCE:NEOUSDT",
      // },
      // {
      //    description: "Binance NEOBNB",
      //    displaySymbol: "NEO/BNB",
      //    symbol: "BINANCE:NEOBNB",
      // },
      // {
      //    description: "Binance POEBTC",
      //    displaySymbol: "POE/BTC",
      //    symbol: "BINANCE:POEBTC",
      // },
      // {
      //    description: "Binance POEETH",
      //    displaySymbol: "POE/ETH",
      //    symbol: "BINANCE:POEETH",
      // },
      // {
      //    description: "Binance QSPBTC",
      //    displaySymbol: "QSP/BTC",
      //    symbol: "BINANCE:QSPBTC",
      // },
      // {
      //    description: "Binance QSPETH",
      //    displaySymbol: "QSP/ETH",
      //    symbol: "BINANCE:QSPETH",
      // },
      // {
      //    description: "Binance QSPBNB",
      //    displaySymbol: "QSP/BNB",
      //    symbol: "BINANCE:QSPBNB",
      // },
      // {
      //    description: "Binance BTSBTC",
      //    displaySymbol: "BTS/BTC",
      //    symbol: "BINANCE:BTSBTC",
      // },
      // {
      //    description: "Binance BTSETH",
      //    displaySymbol: "BTS/ETH",
      //    symbol: "BINANCE:BTSETH",
      // },
      // {
      //    description: "Binance BTSBNB",
      //    displaySymbol: "BTS/BNB",
      //    symbol: "BINANCE:BTSBNB",
      // },
      // {
      //    description: "Binance XZCBTC",
      //    displaySymbol: "XZC/BTC",
      //    symbol: "BINANCE:XZCBTC",
      // },
      // {
      //    description: "Binance XZCETH",
      //    displaySymbol: "XZC/ETH",
      //    symbol: "BINANCE:XZCETH",
      // },
      // {
      //    description: "Binance XZCBNB",
      //    displaySymbol: "XZC/BNB",
      //    symbol: "BINANCE:XZCBNB",
      // },
      // {
      //    description: "Binance LSKBTC",
      //    displaySymbol: "LSK/BTC",
      //    symbol: "BINANCE:LSKBTC",
      // },
      // {
      //    description: "Binance LSKETH",
      //    displaySymbol: "LSK/ETH",
      //    symbol: "BINANCE:LSKETH",
      // },
      // {
      //    description: "Binance LSKBNB",
      //    displaySymbol: "LSK/BNB",
      //    symbol: "BINANCE:LSKBNB",
      // },
      // {
      //    description: "Binance TNTBTC",
      //    displaySymbol: "TNT/BTC",
      //    symbol: "BINANCE:TNTBTC",
      // },
      // {
      //    description: "Binance TNTETH",
      //    displaySymbol: "TNT/ETH",
      //    symbol: "BINANCE:TNTETH",
      // },
      // {
      //    description: "Binance FUELBTC",
      //    displaySymbol: "FUEL/BTC",
      //    symbol: "BINANCE:FUELBTC",
      // },
      // {
      //    description: "Binance FUELETH",
      //    displaySymbol: "FUEL/ETH",
      //    symbol: "BINANCE:FUELETH",
      // },
      // {
      //    description: "Binance MANABTC",
      //    displaySymbol: "MANA/BTC",
      //    symbol: "BINANCE:MANABTC",
      // },
      // {
      //    description: "Binance MANAETH",
      //    displaySymbol: "MANA/ETH",
      //    symbol: "BINANCE:MANAETH",
      // },
      // {
      //    description: "Binance BCDBTC",
      //    displaySymbol: "BCD/BTC",
      //    symbol: "BINANCE:BCDBTC",
      // },
      // {
      //    description: "Binance BCDETH",
      //    displaySymbol: "BCD/ETH",
      //    symbol: "BINANCE:BCDETH",
      // },
      // {
      //    description: "Binance DGDBTC",
      //    displaySymbol: "DGD/BTC",
      //    symbol: "BINANCE:DGDBTC",
      // },
      // {
      //    description: "Binance DGDETH",
      //    displaySymbol: "DGD/ETH",
      //    symbol: "BINANCE:DGDETH",
      // },
      // {
      //    description: "Binance IOTABNB",
      //    displaySymbol: "IOTA/BNB",
      //    symbol: "BINANCE:IOTABNB",
      // },
      // {
      //    description: "Binance ADXBTC",
      //    displaySymbol: "ADX/BTC",
      //    symbol: "BINANCE:ADXBTC",
      // },
      // {
      //    description: "Binance ADXETH",
      //    displaySymbol: "ADX/ETH",
      //    symbol: "BINANCE:ADXETH",
      // },
      // {
      //    description: "Binance ADXBNB",
      //    displaySymbol: "ADX/BNB",
      //    symbol: "BINANCE:ADXBNB",
      // },
      // {
      //    description: "Binance ADABTC",
      //    displaySymbol: "ADA/BTC",
      //    symbol: "BINANCE:ADABTC",
      // },
      // {
      //    description: "Binance ADAETH",
      //    displaySymbol: "ADA/ETH",
      //    symbol: "BINANCE:ADAETH",
      // },
      // {
      //    description: "Binance PPTBTC",
      //    displaySymbol: "PPT/BTC",
      //    symbol: "BINANCE:PPTBTC",
      // },
      // {
      //    description: "Binance PPTETH",
      //    displaySymbol: "PPT/ETH",
      //    symbol: "BINANCE:PPTETH",
      // },
      // {
      //    description: "Binance CMTBTC",
      //    displaySymbol: "CMT/BTC",
      //    symbol: "BINANCE:CMTBTC",
      // },
      // {
      //    description: "Binance CMTETH",
      //    displaySymbol: "CMT/ETH",
      //    symbol: "BINANCE:CMTETH",
      // },
      // {
      //    description: "Binance CMTBNB",
      //    displaySymbol: "CMT/BNB",
      //    symbol: "BINANCE:CMTBNB",
      // },
      // {
      //    description: "Binance XLMBTC",
      //    displaySymbol: "XLM/BTC",
      //    symbol: "BINANCE:XLMBTC",
      // },
      // {
      //    description: "Binance XLMETH",
      //    displaySymbol: "XLM/ETH",
      //    symbol: "BINANCE:XLMETH",
      // },
      // {
      //    description: "Binance XLMBNB",
      //    displaySymbol: "XLM/BNB",
      //    symbol: "BINANCE:XLMBNB",
      // },
      // {
      //    description: "Binance CNDBTC",
      //    displaySymbol: "CND/BTC",
      //    symbol: "BINANCE:CNDBTC",
      // },
      // {
      //    description: "Binance CNDETH",
      //    displaySymbol: "CND/ETH",
      //    symbol: "BINANCE:CNDETH",
      // },
      // {
      //    description: "Binance CNDBNB",
      //    displaySymbol: "CND/BNB",
      //    symbol: "BINANCE:CNDBNB",
      // },
      // {
      //    description: "Binance LENDBTC",
      //    displaySymbol: "LEND/BTC",
      //    symbol: "BINANCE:LENDBTC",
      // },
      // {
      //    description: "Binance LENDETH",
      //    displaySymbol: "LEND/ETH",
      //    symbol: "BINANCE:LENDETH",
      // },
      // {
      //    description: "Binance WABIBTC",
      //    displaySymbol: "WABI/BTC",
      //    symbol: "BINANCE:WABIBTC",
      // },
      // {
      //    description: "Binance WABIETH",
      //    displaySymbol: "WABI/ETH",
      //    symbol: "BINANCE:WABIETH",
      // },
      // {
      //    description: "Binance WABIBNB",
      //    displaySymbol: "WABI/BNB",
      //    symbol: "BINANCE:WABIBNB",
      // },
      // {
      //    description: "Binance LTCETH",
      //    displaySymbol: "LTC/ETH",
      //    symbol: "BINANCE:LTCETH",
      // },
      // {
      //    description: "Binance LTCUSDT",
      //    displaySymbol: "LTC/USDT",
      //    symbol: "BINANCE:LTCUSDT",
      // },
      // {
      //    description: "Binance LTCBNB",
      //    displaySymbol: "LTC/BNB",
      //    symbol: "BINANCE:LTCBNB",
      // },
      // {
      //    description: "Binance TNBBTC",
      //    displaySymbol: "TNB/BTC",
      //    symbol: "BINANCE:TNBBTC",
      // },
      // {
      //    description: "Binance TNBETH",
      //    displaySymbol: "TNB/ETH",
      //    symbol: "BINANCE:TNBETH",
      // },
      // {
      //    description: "Binance WAVESBTC",
      //    displaySymbol: "WAVES/BTC",
      //    symbol: "BINANCE:WAVESBTC",
      // },
      // {
      //    description: "Binance WAVESETH",
      //    displaySymbol: "WAVES/ETH",
      //    symbol: "BINANCE:WAVESETH",
      // },
      // {
      //    description: "Binance WAVESBNB",
      //    displaySymbol: "WAVES/BNB",
      //    symbol: "BINANCE:WAVESBNB",
      // },
      // {
      //    description: "Binance GTOBTC",
      //    displaySymbol: "GTO/BTC",
      //    symbol: "BINANCE:GTOBTC",
      // },
      // {
      //    description: "Binance GTOETH",
      //    displaySymbol: "GTO/ETH",
      //    symbol: "BINANCE:GTOETH",
      // },
      // {
      //    description: "Binance GTOBNB",
      //    displaySymbol: "GTO/BNB",
      //    symbol: "BINANCE:GTOBNB",
      // },
      // {
      //    description: "Binance ICXBTC",
      //    displaySymbol: "ICX/BTC",
      //    symbol: "BINANCE:ICXBTC",
      // },
      // {
      //    description: "Binance ICXETH",
      //    displaySymbol: "ICX/ETH",
      //    symbol: "BINANCE:ICXETH",
      // },
      // {
      //    description: "Binance ICXBNB",
      //    displaySymbol: "ICX/BNB",
      //    symbol: "BINANCE:ICXBNB",
      // },
      // {
      //    description: "Binance OSTBTC",
      //    displaySymbol: "OST/BTC",
      //    symbol: "BINANCE:OSTBTC",
      // },
      // {
      //    description: "Binance OSTETH",
      //    displaySymbol: "OST/ETH",
      //    symbol: "BINANCE:OSTETH",
      // },
      // {
      //    description: "Binance OSTBNB",
      //    displaySymbol: "OST/BNB",
      //    symbol: "BINANCE:OSTBNB",
      // },
      // {
      //    description: "Binance ELFBTC",
      //    displaySymbol: "ELF/BTC",
      //    symbol: "BINANCE:ELFBTC",
      // },
      // {
      //    description: "Binance ELFETH",
      //    displaySymbol: "ELF/ETH",
      //    symbol: "BINANCE:ELFETH",
      // },
      // {
      //    description: "Binance AIONBTC",
      //    displaySymbol: "AION/BTC",
      //    symbol: "BINANCE:AIONBTC",
      // },
      // {
      //    description: "Binance AIONETH",
      //    displaySymbol: "AION/ETH",
      //    symbol: "BINANCE:AIONETH",
      // },
      // {
      //    description: "Binance AIONBNB",
      //    displaySymbol: "AION/BNB",
      //    symbol: "BINANCE:AIONBNB",
      // },
      // {
      //    description: "Binance NEBLBTC",
      //    displaySymbol: "NEBL/BTC",
      //    symbol: "BINANCE:NEBLBTC",
      // },
      // {
      //    description: "Binance NEBLETH",
      //    displaySymbol: "NEBL/ETH",
      //    symbol: "BINANCE:NEBLETH",
      // },
      // {
      //    description: "Binance NEBLBNB",
      //    displaySymbol: "NEBL/BNB",
      //    symbol: "BINANCE:NEBLBNB",
      // },
      // {
      //    description: "Binance BRDBTC",
      //    displaySymbol: "BRD/BTC",
      //    symbol: "BINANCE:BRDBTC",
      // },
      // {
      //    description: "Binance BRDETH",
      //    displaySymbol: "BRD/ETH",
      //    symbol: "BINANCE:BRDETH",
      // },
      // {
      //    description: "Binance BRDBNB",
      //    displaySymbol: "BRD/BNB",
      //    symbol: "BINANCE:BRDBNB",
      // },
      // {
      //    description: "Binance MCOBNB",
      //    displaySymbol: "MCO/BNB",
      //    symbol: "BINANCE:MCOBNB",
      // },
      // {
      //    description: "Binance EDOBTC",
      //    displaySymbol: "EDO/BTC",
      //    symbol: "BINANCE:EDOBTC",
      // },
      // {
      //    description: "Binance EDOETH",
      //    displaySymbol: "EDO/ETH",
      //    symbol: "BINANCE:EDOETH",
      // },
      // {
      //    description: "Binance WINGSBTC",
      //    displaySymbol: "WINGS/BTC",
      //    symbol: "BINANCE:WINGSBTC",
      // },
      // {
      //    description: "Binance WINGSETH",
      //    displaySymbol: "WINGS/ETH",
      //    symbol: "BINANCE:WINGSETH",
      // },
      // {
      //    description: "Binance NAVBTC",
      //    displaySymbol: "NAV/BTC",
      //    symbol: "BINANCE:NAVBTC",
      // },
      // {
      //    description: "Binance NAVETH",
      //    displaySymbol: "NAV/ETH",
      //    symbol: "BINANCE:NAVETH",
      // },
      // {
      //    description: "Binance NAVBNB",
      //    displaySymbol: "NAV/BNB",
      //    symbol: "BINANCE:NAVBNB",
      // },
      // {
      //    description: "Binance LUNBTC",
      //    displaySymbol: "LUN/BTC",
      //    symbol: "BINANCE:LUNBTC",
      // },
      // {
      //    description: "Binance LUNETH",
      //    displaySymbol: "LUN/ETH",
      //    symbol: "BINANCE:LUNETH",
      // },
      // {
      //    description: "Binance TRIGBTC",
      //    displaySymbol: "TRIG/BTC",
      //    symbol: "BINANCE:TRIGBTC",
      // },
      // {
      //    description: "Binance TRIGETH",
      //    displaySymbol: "TRIG/ETH",
      //    symbol: "BINANCE:TRIGETH",
      // },
      // {
      //    description: "Binance TRIGBNB",
      //    displaySymbol: "TRIG/BNB",
      //    symbol: "BINANCE:TRIGBNB",
      // },
      // {
      //    description: "Binance APPCBTC",
      //    displaySymbol: "APPC/BTC",
      //    symbol: "BINANCE:APPCBTC",
      // },
      // {
      //    description: "Binance APPCETH",
      //    displaySymbol: "APPC/ETH",
      //    symbol: "BINANCE:APPCETH",
      // },
      // {
      //    description: "Binance APPCBNB",
      //    displaySymbol: "APPC/BNB",
      //    symbol: "BINANCE:APPCBNB",
      // },
      // {
      //    description: "Binance VIBEBTC",
      //    displaySymbol: "VIBE/BTC",
      //    symbol: "BINANCE:VIBEBTC",
      // },
      // {
      //    description: "Binance VIBEETH",
      //    displaySymbol: "VIBE/ETH",
      //    symbol: "BINANCE:VIBEETH",
      // },
      // {
      //    description: "Binance RLCBTC",
      //    displaySymbol: "RLC/BTC",
      //    symbol: "BINANCE:RLCBTC",
      // },
      // {
      //    description: "Binance RLCETH",
      //    displaySymbol: "RLC/ETH",
      //    symbol: "BINANCE:RLCETH",
      // },
      // {
      //    description: "Binance RLCBNB",
      //    displaySymbol: "RLC/BNB",
      //    symbol: "BINANCE:RLCBNB",
      // },
      // {
      //    description: "Binance INSBTC",
      //    displaySymbol: "INS/BTC",
      //    symbol: "BINANCE:INSBTC",
      // },
      // {
      //    description: "Binance INSETH",
      //    displaySymbol: "INS/ETH",
      //    symbol: "BINANCE:INSETH",
      // },
      // {
      //    description: "Binance PIVXBTC",
      //    displaySymbol: "PIVX/BTC",
      //    symbol: "BINANCE:PIVXBTC",
      // },
      // {
      //    description: "Binance PIVXETH",
      //    displaySymbol: "PIVX/ETH",
      //    symbol: "BINANCE:PIVXETH",
      // },
      // {
      //    description: "Binance PIVXBNB",
      //    displaySymbol: "PIVX/BNB",
      //    symbol: "BINANCE:PIVXBNB",
      // },
      // {
      //    description: "Binance IOSTBTC",
      //    displaySymbol: "IOST/BTC",
      //    symbol: "BINANCE:IOSTBTC",
      // },
      // {
      //    description: "Binance IOSTETH",
      //    displaySymbol: "IOST/ETH",
      //    symbol: "BINANCE:IOSTETH",
      // },
      // {
      //    description: "Binance CHATBTC",
      //    displaySymbol: "CHAT/BTC",
      //    symbol: "BINANCE:CHATBTC",
      // },
      // {
      //    description: "Binance CHATETH",
      //    displaySymbol: "CHAT/ETH",
      //    symbol: "BINANCE:CHATETH",
      // },
      // {
      //    description: "Binance STEEMBTC",
      //    displaySymbol: "STEEM/BTC",
      //    symbol: "BINANCE:STEEMBTC",
      // },
      // {
      //    description: "Binance STEEMETH",
      //    displaySymbol: "STEEM/ETH",
      //    symbol: "BINANCE:STEEMETH",
      // },
      // {
      //    description: "Binance STEEMBNB",
      //    displaySymbol: "STEEM/BNB",
      //    symbol: "BINANCE:STEEMBNB",
      // },
      // {
      //    description: "Binance NANOBTC",
      //    displaySymbol: "NANO/BTC",
      //    symbol: "BINANCE:NANOBTC",
      // },
      // {
      //    description: "Binance NANOETH",
      //    displaySymbol: "NANO/ETH",
      //    symbol: "BINANCE:NANOETH",
      // },
      // {
      //    description: "Binance NANOBNB",
      //    displaySymbol: "NANO/BNB",
      //    symbol: "BINANCE:NANOBNB",
      // },
      // {
      //    description: "Binance VIABTC",
      //    displaySymbol: "VIA/BTC",
      //    symbol: "BINANCE:VIABTC",
      // },
      // {
      //    description: "Binance VIAETH",
      //    displaySymbol: "VIA/ETH",
      //    symbol: "BINANCE:VIAETH",
      // },
      // {
      //    description: "Binance VIABNB",
      //    displaySymbol: "VIA/BNB",
      //    symbol: "BINANCE:VIABNB",
      // },
      // {
      //    description: "Binance BLZBTC",
      //    displaySymbol: "BLZ/BTC",
      //    symbol: "BINANCE:BLZBTC",
      // },
      // {
      //    description: "Binance BLZETH",
      //    displaySymbol: "BLZ/ETH",
      //    symbol: "BINANCE:BLZETH",
      // },
      // {
      //    description: "Binance BLZBNB",
      //    displaySymbol: "BLZ/BNB",
      //    symbol: "BINANCE:BLZBNB",
      // },
      // {
      //    description: "Binance AEBTC",
      //    displaySymbol: "AE/BTC",
      //    symbol: "BINANCE:AEBTC",
      // },
      // {
      //    description: "Binance AEETH",
      //    displaySymbol: "AE/ETH",
      //    symbol: "BINANCE:AEETH",
      // },
      // {
      //    description: "Binance AEBNB",
      //    displaySymbol: "AE/BNB",
      //    symbol: "BINANCE:AEBNB",
      // },
      // {
      //    description: "Binance RPXBTC",
      //    displaySymbol: "RPX/BTC",
      //    symbol: "BINANCE:RPXBTC",
      // },
      // {
      //    description: "Binance RPXETH",
      //    displaySymbol: "RPX/ETH",
      //    symbol: "BINANCE:RPXETH",
      // },
      // {
      //    description: "Binance RPXBNB",
      //    displaySymbol: "RPX/BNB",
      //    symbol: "BINANCE:RPXBNB",
      // },
      // {
      //    description: "Binance NCASHBTC",
      //    displaySymbol: "NCASH/BTC",
      //    symbol: "BINANCE:NCASHBTC",
      // },
      // {
      //    description: "Binance NCASHETH",
      //    displaySymbol: "NCASH/ETH",
      //    symbol: "BINANCE:NCASHETH",
      // },
      // {
      //    description: "Binance NCASHBNB",
      //    displaySymbol: "NCASH/BNB",
      //    symbol: "BINANCE:NCASHBNB",
      // },
      // {
      //    description: "Binance POABTC",
      //    displaySymbol: "POA/BTC",
      //    symbol: "BINANCE:POABTC",
      // },
      // {
      //    description: "Binance POAETH",
      //    displaySymbol: "POA/ETH",
      //    symbol: "BINANCE:POAETH",
      // },
      // {
      //    description: "Binance POABNB",
      //    displaySymbol: "POA/BNB",
      //    symbol: "BINANCE:POABNB",
      // },
      // {
      //    description: "Binance ZILBTC",
      //    displaySymbol: "ZIL/BTC",
      //    symbol: "BINANCE:ZILBTC",
      // },
      // {
      //    description: "Binance ZILETH",
      //    displaySymbol: "ZIL/ETH",
      //    symbol: "BINANCE:ZILETH",
      // },
      // {
      //    description: "Binance ZILBNB",
      //    displaySymbol: "ZIL/BNB",
      //    symbol: "BINANCE:ZILBNB",
      // },
      // {
      //    description: "Binance ONTBTC",
      //    displaySymbol: "ONT/BTC",
      //    symbol: "BINANCE:ONTBTC",
      // },
      // {
      //    description: "Binance ONTETH",
      //    displaySymbol: "ONT/ETH",
      //    symbol: "BINANCE:ONTETH",
      // },
      // {
      //    description: "Binance ONTBNB",
      //    displaySymbol: "ONT/BNB",
      //    symbol: "BINANCE:ONTBNB",
      // },
      // {
      //    description: "Binance STORMBTC",
      //    displaySymbol: "STORM/BTC",
      //    symbol: "BINANCE:STORMBTC",
      // },
      // {
      //    description: "Binance STORMETH",
      //    displaySymbol: "STORM/ETH",
      //    symbol: "BINANCE:STORMETH",
      // },
      // {
      //    description: "Binance STORMBNB",
      //    displaySymbol: "STORM/BNB",
      //    symbol: "BINANCE:STORMBNB",
      // },
      // {
      //    description: "Binance QTUMBNB",
      //    displaySymbol: "QTUM/BNB",
      //    symbol: "BINANCE:QTUMBNB",
      // },
      // {
      //    description: "Binance QTUMUSDT",
      //    displaySymbol: "QTUM/USDT",
      //    symbol: "BINANCE:QTUMUSDT",
      // },
      // {
      //    description: "Binance XEMBTC",
      //    displaySymbol: "XEM/BTC",
      //    symbol: "BINANCE:XEMBTC",
      // },
      // {
      //    description: "Binance XEMETH",
      //    displaySymbol: "XEM/ETH",
      //    symbol: "BINANCE:XEMETH",
      // },
      // {
      //    description: "Binance XEMBNB",
      //    displaySymbol: "XEM/BNB",
      //    symbol: "BINANCE:XEMBNB",
      // },
      // {
      //    description: "Binance WANBTC",
      //    displaySymbol: "WAN/BTC",
      //    symbol: "BINANCE:WANBTC",
      // },
      // {
      //    description: "Binance WANETH",
      //    displaySymbol: "WAN/ETH",
      //    symbol: "BINANCE:WANETH",
      // },
      // {
      //    description: "Binance WANBNB",
      //    displaySymbol: "WAN/BNB",
      //    symbol: "BINANCE:WANBNB",
      // },
      // {
      //    description: "Binance WPRBTC",
      //    displaySymbol: "WPR/BTC",
      //    symbol: "BINANCE:WPRBTC",
      // },
      // {
      //    description: "Binance WPRETH",
      //    displaySymbol: "WPR/ETH",
      //    symbol: "BINANCE:WPRETH",
      // },
      // {
      //    description: "Binance QLCBTC",
      //    displaySymbol: "QLC/BTC",
      //    symbol: "BINANCE:QLCBTC",
      // },
      // {
      //    description: "Binance QLCETH",
      //    displaySymbol: "QLC/ETH",
      //    symbol: "BINANCE:QLCETH",
      // },
      // {
      //    description: "Binance SYSBTC",
      //    displaySymbol: "SYS/BTC",
      //    symbol: "BINANCE:SYSBTC",
      // },
      // {
      //    description: "Binance SYSETH",
      //    displaySymbol: "SYS/ETH",
      //    symbol: "BINANCE:SYSETH",
      // },
      // {
      //    description: "Binance SYSBNB",
      //    displaySymbol: "SYS/BNB",
      //    symbol: "BINANCE:SYSBNB",
      // },
      // {
      //    description: "Binance QLCBNB",
      //    displaySymbol: "QLC/BNB",
      //    symbol: "BINANCE:QLCBNB",
      // },
      // {
      //    description: "Binance GRSBTC",
      //    displaySymbol: "GRS/BTC",
      //    symbol: "BINANCE:GRSBTC",
      // },
      // {
      //    description: "Binance GRSETH",
      //    displaySymbol: "GRS/ETH",
      //    symbol: "BINANCE:GRSETH",
      // },
      // {
      //    description: "Binance ADAUSDT",
      //    displaySymbol: "ADA/USDT",
      //    symbol: "BINANCE:ADAUSDT",
      // },
      // {
      //    description: "Binance ADABNB",
      //    displaySymbol: "ADA/BNB",
      //    symbol: "BINANCE:ADABNB",
      // },
      // {
      //    description: "Binance CLOAKBTC",
      //    displaySymbol: "CLOAK/BTC",
      //    symbol: "BINANCE:CLOAKBTC",
      // },
      // {
      //    description: "Binance CLOAKETH",
      //    displaySymbol: "CLOAK/ETH",
      //    symbol: "BINANCE:CLOAKETH",
      // },
      // {
      //    description: "Binance GNTBTC",
      //    displaySymbol: "GNT/BTC",
      //    symbol: "BINANCE:GNTBTC",
      // },
      // {
      //    description: "Binance GNTETH",
      //    displaySymbol: "GNT/ETH",
      //    symbol: "BINANCE:GNTETH",
      // },
      // {
      //    description: "Binance GNTBNB",
      //    displaySymbol: "GNT/BNB",
      //    symbol: "BINANCE:GNTBNB",
      // },
      // {
      //    description: "Binance LOOMBTC",
      //    displaySymbol: "LOOM/BTC",
      //    symbol: "BINANCE:LOOMBTC",
      // },
      // {
      //    description: "Binance LOOMETH",
      //    displaySymbol: "LOOM/ETH",
      //    symbol: "BINANCE:LOOMETH",
      // },
      // {
      //    description: "Binance LOOMBNB",
      //    displaySymbol: "LOOM/BNB",
      //    symbol: "BINANCE:LOOMBNB",
      // },
      // {
      //    description: "Binance XRPUSDT",
      //    displaySymbol: "XRP/USDT",
      //    symbol: "BINANCE:XRPUSDT",
      // },
      // {
      //    description: "Binance BCNBTC",
      //    displaySymbol: "BCN/BTC",
      //    symbol: "BINANCE:BCNBTC",
      // },
      // {
      //    description: "Binance BCNETH",
      //    displaySymbol: "BCN/ETH",
      //    symbol: "BINANCE:BCNETH",
      // },
      // {
      //    description: "Binance BCNBNB",
      //    displaySymbol: "BCN/BNB",
      //    symbol: "BINANCE:BCNBNB",
      // },
      // {
      //    description: "Binance REPBTC",
      //    displaySymbol: "REP/BTC",
      //    symbol: "BINANCE:REPBTC",
      // },
      // {
      //    description: "Binance REPETH",
      //    displaySymbol: "REP/ETH",
      //    symbol: "BINANCE:REPETH",
      // },
      // {
      //    description: "Binance REPBNB",
      //    displaySymbol: "REP/BNB",
      //    symbol: "BINANCE:REPBNB",
      // },
      // {
      //    description: "Binance BTCTUSD",
      //    displaySymbol: "BTC/TUSD",
      //    symbol: "BINANCE:BTCTUSD",
      // },
      // {
      //    description: "Binance TUSDBTC",
      //    displaySymbol: "TUSD/BTC",
      //    symbol: "BINANCE:TUSDBTC",
      // },
      // {
      //    description: "Binance ETHTUSD",
      //    displaySymbol: "ETH/TUSD",
      //    symbol: "BINANCE:ETHTUSD",
      // },
      // {
      //    description: "Binance TUSDETH",
      //    displaySymbol: "TUSD/ETH",
      //    symbol: "BINANCE:TUSDETH",
      // },
      // {
      //    description: "Binance TUSDBNB",
      //    displaySymbol: "TUSD/BNB",
      //    symbol: "BINANCE:TUSDBNB",
      // },
      // {
      //    description: "Binance ZENBTC",
      //    displaySymbol: "ZEN/BTC",
      //    symbol: "BINANCE:ZENBTC",
      // },
      // {
      //    description: "Binance ZENETH",
      //    displaySymbol: "ZEN/ETH",
      //    symbol: "BINANCE:ZENETH",
      // },
      // {
      //    description: "Binance ZENBNB",
      //    displaySymbol: "ZEN/BNB",
      //    symbol: "BINANCE:ZENBNB",
      // },
      // {
      //    description: "Binance SKYBTC",
      //    displaySymbol: "SKY/BTC",
      //    symbol: "BINANCE:SKYBTC",
      // },
      // {
      //    description: "Binance SKYETH",
      //    displaySymbol: "SKY/ETH",
      //    symbol: "BINANCE:SKYETH",
      // },
      // {
      //    description: "Binance SKYBNB",
      //    displaySymbol: "SKY/BNB",
      //    symbol: "BINANCE:SKYBNB",
      // },
      // {
      //    description: "Binance EOSUSDT",
      //    displaySymbol: "EOS/USDT",
      //    symbol: "BINANCE:EOSUSDT",
      // },
      // {
      //    description: "Binance EOSBNB",
      //    displaySymbol: "EOS/BNB",
      //    symbol: "BINANCE:EOSBNB",
      // },
      // {
      //    description: "Binance CVCBTC",
      //    displaySymbol: "CVC/BTC",
      //    symbol: "BINANCE:CVCBTC",
      // },
      // {
      //    description: "Binance CVCETH",
      //    displaySymbol: "CVC/ETH",
      //    symbol: "BINANCE:CVCETH",
      // },
      // {
      //    description: "Binance CVCBNB",
      //    displaySymbol: "CVC/BNB",
      //    symbol: "BINANCE:CVCBNB",
      // },
      // {
      //    description: "Binance THETABTC",
      //    displaySymbol: "THETA/BTC",
      //    symbol: "BINANCE:THETABTC",
      // },
      // {
      //    description: "Binance THETAETH",
      //    displaySymbol: "THETA/ETH",
      //    symbol: "BINANCE:THETAETH",
      // },
      // {
      //    description: "Binance THETABNB",
      //    displaySymbol: "THETA/BNB",
      //    symbol: "BINANCE:THETABNB",
      // },
      // {
      //    description: "Binance XRPBNB",
      //    displaySymbol: "XRP/BNB",
      //    symbol: "BINANCE:XRPBNB",
      // },
      // {
      //    description: "Binance TUSDUSDT",
      //    displaySymbol: "TUSD/USDT",
      //    symbol: "BINANCE:TUSDUSDT",
      // },
      // {
      //    description: "Binance IOTAUSDT",
      //    displaySymbol: "IOTA/USDT",
      //    symbol: "BINANCE:IOTAUSDT",
      // },
      // {
      //    description: "Binance XLMUSDT",
      //    displaySymbol: "XLM/USDT",
      //    symbol: "BINANCE:XLMUSDT",
      // },
      // {
      //    description: "Binance IOTXBTC",
      //    displaySymbol: "IOTX/BTC",
      //    symbol: "BINANCE:IOTXBTC",
      // },
      // {
      //    description: "Binance IOTXETH",
      //    displaySymbol: "IOTX/ETH",
      //    symbol: "BINANCE:IOTXETH",
      // },
      // {
      //    description: "Binance QKCBTC",
      //    displaySymbol: "QKC/BTC",
      //    symbol: "BINANCE:QKCBTC",
      // },
      // {
      //    description: "Binance QKCETH",
      //    displaySymbol: "QKC/ETH",
      //    symbol: "BINANCE:QKCETH",
      // },
      // {
      //    description: "Binance AGIBTC",
      //    displaySymbol: "AGI/BTC",
      //    symbol: "BINANCE:AGIBTC",
      // },
      // {
      //    description: "Binance AGIETH",
      //    displaySymbol: "AGI/ETH",
      //    symbol: "BINANCE:AGIETH",
      // },
      // {
      //    description: "Binance AGIBNB",
      //    displaySymbol: "AGI/BNB",
      //    symbol: "BINANCE:AGIBNB",
      // },
      // {
      //    description: "Binance NXSBTC",
      //    displaySymbol: "NXS/BTC",
      //    symbol: "BINANCE:NXSBTC",
      // },
      // {
      //    description: "Binance NXSETH",
      //    displaySymbol: "NXS/ETH",
      //    symbol: "BINANCE:NXSETH",
      // },
      // {
      //    description: "Binance NXSBNB",
      //    displaySymbol: "NXS/BNB",
      //    symbol: "BINANCE:NXSBNB",
      // },
      // {
      //    description: "Binance ENJBNB",
      //    displaySymbol: "ENJ/BNB",
      //    symbol: "BINANCE:ENJBNB",
      // },
      // {
      //    description: "Binance DATABTC",
      //    displaySymbol: "DATA/BTC",
      //    symbol: "BINANCE:DATABTC",
      // },
      // {
      //    description: "Binance DATAETH",
      //    displaySymbol: "DATA/ETH",
      //    symbol: "BINANCE:DATAETH",
      // },
      // {
      //    description: "Binance ONTUSDT",
      //    displaySymbol: "ONT/USDT",
      //    symbol: "BINANCE:ONTUSDT",
      // },
      // {
      //    description: "Binance TRXBNB",
      //    displaySymbol: "TRX/BNB",
      //    symbol: "BINANCE:TRXBNB",
      // },
      // {
      //    description: "Binance TRXUSDT",
      //    displaySymbol: "TRX/USDT",
      //    symbol: "BINANCE:TRXUSDT",
      // },
      // {
      //    description: "Binance ETCUSDT",
      //    displaySymbol: "ETC/USDT",
      //    symbol: "BINANCE:ETCUSDT",
      // },
      // {
      //    description: "Binance ETCBNB",
      //    displaySymbol: "ETC/BNB",
      //    symbol: "BINANCE:ETCBNB",
      // },
      // {
      //    description: "Binance ICXUSDT",
      //    displaySymbol: "ICX/USDT",
      //    symbol: "BINANCE:ICXUSDT",
      // },
      // {
      //    description: "Binance SCBTC",
      //    displaySymbol: "SC/BTC",
      //    symbol: "BINANCE:SCBTC",
      // },
      // {
      //    description: "Binance SCETH",
      //    displaySymbol: "SC/ETH",
      //    symbol: "BINANCE:SCETH",
      // },
      // {
      //    description: "Binance SCBNB",
      //    displaySymbol: "SC/BNB",
      //    symbol: "BINANCE:SCBNB",
      // },
      // {
      //    description: "Binance NPXSBTC",
      //    displaySymbol: "NPXS/BTC",
      //    symbol: "BINANCE:NPXSBTC",
      // },
      // {
      //    description: "Binance NPXSETH",
      //    displaySymbol: "NPXS/ETH",
      //    symbol: "BINANCE:NPXSETH",
      // },
      // {
      //    description: "Binance VENUSDT",
      //    displaySymbol: "VEN/USDT",
      //    symbol: "BINANCE:VENUSDT",
      // },
      // {
      //    description: "Binance KEYBTC",
      //    displaySymbol: "KEY/BTC",
      //    symbol: "BINANCE:KEYBTC",
      // },
      // {
      //    description: "Binance KEYETH",
      //    displaySymbol: "KEY/ETH",
      //    symbol: "BINANCE:KEYETH",
      // },
      // {
      //    description: "Binance NASBTC",
      //    displaySymbol: "NAS/BTC",
      //    symbol: "BINANCE:NASBTC",
      // },
      // {
      //    description: "Binance NASETH",
      //    displaySymbol: "NAS/ETH",
      //    symbol: "BINANCE:NASETH",
      // },
      // {
      //    description: "Binance NASBNB",
      //    displaySymbol: "NAS/BNB",
      //    symbol: "BINANCE:NASBNB",
      // },
      // {
      //    description: "Binance MFTBTC",
      //    displaySymbol: "MFT/BTC",
      //    symbol: "BINANCE:MFTBTC",
      // },
      // {
      //    description: "Binance MFTETH",
      //    displaySymbol: "MFT/ETH",
      //    symbol: "BINANCE:MFTETH",
      // },
      // {
      //    description: "Binance MFTBNB",
      //    displaySymbol: "MFT/BNB",
      //    symbol: "BINANCE:MFTBNB",
      // },
      // {
      //    description: "Binance DENTBTC",
      //    displaySymbol: "DENT/BTC",
      //    symbol: "BINANCE:DENTBTC",
      // },
      // {
      //    description: "Binance DENTETH",
      //    displaySymbol: "DENT/ETH",
      //    symbol: "BINANCE:DENTETH",
      // },
      // {
      //    description: "Binance ARDRBTC",
      //    displaySymbol: "ARDR/BTC",
      //    symbol: "BINANCE:ARDRBTC",
      // },
      // {
      //    description: "Binance ARDRETH",
      //    displaySymbol: "ARDR/ETH",
      //    symbol: "BINANCE:ARDRETH",
      // },
      // {
      //    description: "Binance ARDRBNB",
      //    displaySymbol: "ARDR/BNB",
      //    symbol: "BINANCE:ARDRBNB",
      // },
      // {
      //    description: "Binance NULSUSDT",
      //    displaySymbol: "NULS/USDT",
      //    symbol: "BINANCE:NULSUSDT",
      // },
      // {
      //    description: "Binance HOTBTC",
      //    displaySymbol: "HOT/BTC",
      //    symbol: "BINANCE:HOTBTC",
      // },
      // {
      //    description: "Binance HOTETH",
      //    displaySymbol: "HOT/ETH",
      //    symbol: "BINANCE:HOTETH",
      // },
      // {
      //    description: "Binance VETBTC",
      //    displaySymbol: "VET/BTC",
      //    symbol: "BINANCE:VETBTC",
      // },
      // {
      //    description: "Binance VETETH",
      //    displaySymbol: "VET/ETH",
      //    symbol: "BINANCE:VETETH",
      // },
      // {
      //    description: "Binance VETUSDT",
      //    displaySymbol: "VET/USDT",
      //    symbol: "BINANCE:VETUSDT",
      // },
      // {
      //    description: "Binance VETBNB",
      //    displaySymbol: "VET/BNB",
      //    symbol: "BINANCE:VETBNB",
      // },
      // {
      //    description: "Binance DOCKBTC",
      //    displaySymbol: "DOCK/BTC",
      //    symbol: "BINANCE:DOCKBTC",
      // },
      // {
      //    description: "Binance DOCKETH",
      //    displaySymbol: "DOCK/ETH",
      //    symbol: "BINANCE:DOCKETH",
      // },
      // {
      //    description: "Binance POLYBTC",
      //    displaySymbol: "POLY/BTC",
      //    symbol: "BINANCE:POLYBTC",
      // },
      // {
      //    description: "Binance POLYBNB",
      //    displaySymbol: "POLY/BNB",
      //    symbol: "BINANCE:POLYBNB",
      // },
      // {
      //    description: "Binance PHXBTC",
      //    displaySymbol: "PHX/BTC",
      //    symbol: "BINANCE:PHXBTC",
      // },
      // {
      //    description: "Binance PHXETH",
      //    displaySymbol: "PHX/ETH",
      //    symbol: "BINANCE:PHXETH",
      // },
      // {
      //    description: "Binance PHXBNB",
      //    displaySymbol: "PHX/BNB",
      //    symbol: "BINANCE:PHXBNB",
      // },
      // {
      //    description: "Binance HCBTC",
      //    displaySymbol: "HC/BTC",
      //    symbol: "BINANCE:HCBTC",
      // },
      // {
      //    description: "Binance HCETH",
      //    displaySymbol: "HC/ETH",
      //    symbol: "BINANCE:HCETH",
      // },
      // {
      //    description: "Binance GOBTC",
      //    displaySymbol: "GO/BTC",
      //    symbol: "BINANCE:GOBTC",
      // },
      // {
      //    description: "Binance GOBNB",
      //    displaySymbol: "GO/BNB",
      //    symbol: "BINANCE:GOBNB",
      // },
      // {
      //    description: "Binance PAXBTC",
      //    displaySymbol: "PAX/BTC",
      //    symbol: "BINANCE:PAXBTC",
      // },
      // {
      //    description: "Binance PAXBNB",
      //    displaySymbol: "PAX/BNB",
      //    symbol: "BINANCE:PAXBNB",
      // },
      // {
      //    description: "Binance PAXUSDT",
      //    displaySymbol: "PAX/USDT",
      //    symbol: "BINANCE:PAXUSDT",
      // },
      // {
      //    description: "Binance PAXETH",
      //    displaySymbol: "PAX/ETH",
      //    symbol: "BINANCE:PAXETH",
      // },
      // {
      //    description: "Binance RVNBTC",
      //    displaySymbol: "RVN/BTC",
      //    symbol: "BINANCE:RVNBTC",
      // },
      // {
      //    description: "Binance RVNBNB",
      //    displaySymbol: "RVN/BNB",
      //    symbol: "BINANCE:RVNBNB",
      // },
      // {
      //    description: "Binance DCRBTC",
      //    displaySymbol: "DCR/BTC",
      //    symbol: "BINANCE:DCRBTC",
      // },
      // {
      //    description: "Binance DCRBNB",
      //    displaySymbol: "DCR/BNB",
      //    symbol: "BINANCE:DCRBNB",
      // },
      // {
      //    description: "Binance USDCBNB",
      //    displaySymbol: "USDC/BNB",
      //    symbol: "BINANCE:USDCBNB",
      // },
      // {
      //    description: "Binance MITHBTC",
      //    displaySymbol: "MITH/BTC",
      //    symbol: "BINANCE:MITHBTC",
      // },
      // {
      //    description: "Binance MITHBNB",
      //    displaySymbol: "MITH/BNB",
      //    symbol: "BINANCE:MITHBNB",
      // },
      // {
      //    description: "Binance BCHABCBTC",
      //    displaySymbol: "BCHABC/BTC",
      //    symbol: "BINANCE:BCHABCBTC",
      // },
      // {
      //    description: "Binance BCHSVBTC",
      //    displaySymbol: "BCHSV/BTC",
      //    symbol: "BINANCE:BCHSVBTC",
      // },
      // {
      //    description: "Binance BCHABCUSDT",
      //    displaySymbol: "BCHABC/USDT",
      //    symbol: "BINANCE:BCHABCUSDT",
      // },
      // {
      //    description: "Binance BCHSVUSDT",
      //    displaySymbol: "BCHSV/USDT",
      //    symbol: "BINANCE:BCHSVUSDT",
      // },
      // {
      //    description: "Binance BNBPAX",
      //    displaySymbol: "BNB/PAX",
      //    symbol: "BINANCE:BNBPAX",
      // },
      // {
      //    description: "Binance BTCPAX",
      //    displaySymbol: "BTC/PAX",
      //    symbol: "BINANCE:BTCPAX",
      // },
      // {
      //    description: "Binance ETHPAX",
      //    displaySymbol: "ETH/PAX",
      //    symbol: "BINANCE:ETHPAX",
      // },
      // {
      //    description: "Binance XRPPAX",
      //    displaySymbol: "XRP/PAX",
      //    symbol: "BINANCE:XRPPAX",
      // },
      // {
      //    description: "Binance EOSPAX",
      //    displaySymbol: "EOS/PAX",
      //    symbol: "BINANCE:EOSPAX",
      // },
      // {
      //    description: "Binance XLMPAX",
      //    displaySymbol: "XLM/PAX",
      //    symbol: "BINANCE:XLMPAX",
      // },
      // {
      //    description: "Binance RENBTC",
      //    displaySymbol: "REN/BTC",
      //    symbol: "BINANCE:RENBTC",
      // },
      // {
      //    description: "Binance RENBNB",
      //    displaySymbol: "REN/BNB",
      //    symbol: "BINANCE:RENBNB",
      // },
      // {
      //    description: "Binance BNBTUSD",
      //    displaySymbol: "BNB/TUSD",
      //    symbol: "BINANCE:BNBTUSD",
      // },
      // {
      //    description: "Binance XRPTUSD",
      //    displaySymbol: "XRP/TUSD",
      //    symbol: "BINANCE:XRPTUSD",
      // },
      // {
      //    description: "Binance EOSTUSD",
      //    displaySymbol: "EOS/TUSD",
      //    symbol: "BINANCE:EOSTUSD",
      // },
      // {
      //    description: "Binance XLMTUSD",
      //    displaySymbol: "XLM/TUSD",
      //    symbol: "BINANCE:XLMTUSD",
      // },
      // {
      //    description: "Binance BNBUSDC",
      //    displaySymbol: "BNB/USDC",
      //    symbol: "BINANCE:BNBUSDC",
      // },
      // {
      //    description: "Binance BTCUSDC",
      //    displaySymbol: "BTC/USDC",
      //    symbol: "BINANCE:BTCUSDC",
      // },
      // {
      //    description: "Binance ETHUSDC",
      //    displaySymbol: "ETH/USDC",
      //    symbol: "BINANCE:ETHUSDC",
      // },
      // {
      //    description: "Binance XRPUSDC",
      //    displaySymbol: "XRP/USDC",
      //    symbol: "BINANCE:XRPUSDC",
      // },
      // {
      //    description: "Binance EOSUSDC",
      //    displaySymbol: "EOS/USDC",
      //    symbol: "BINANCE:EOSUSDC",
      // },
      // {
      //    description: "Binance XLMUSDC",
      //    displaySymbol: "XLM/USDC",
      //    symbol: "BINANCE:XLMUSDC",
      // },
      // {
      //    description: "Binance USDCUSDT",
      //    displaySymbol: "USDC/USDT",
      //    symbol: "BINANCE:USDCUSDT",
      // },
      // {
      //    description: "Binance ADATUSD",
      //    displaySymbol: "ADA/TUSD",
      //    symbol: "BINANCE:ADATUSD",
      // },
      // {
      //    description: "Binance TRXTUSD",
      //    displaySymbol: "TRX/TUSD",
      //    symbol: "BINANCE:TRXTUSD",
      // },
      // {
      //    description: "Binance NEOTUSD",
      //    displaySymbol: "NEO/TUSD",
      //    symbol: "BINANCE:NEOTUSD",
      // },
      // {
      //    description: "Binance TRXXRP",
      //    displaySymbol: "TRX/XRP",
      //    symbol: "BINANCE:TRXXRP",
      // },
      // {
      //    description: "Binance XZCXRP",
      //    displaySymbol: "XZC/XRP",
      //    symbol: "BINANCE:XZCXRP",
      // },
      // {
      //    description: "Binance PAXTUSD",
      //    displaySymbol: "PAX/TUSD",
      //    symbol: "BINANCE:PAXTUSD",
      // },
      // {
      //    description: "Binance USDCTUSD",
      //    displaySymbol: "USDC/TUSD",
      //    symbol: "BINANCE:USDCTUSD",
      // },
      // {
      //    description: "Binance USDCPAX",
      //    displaySymbol: "USDC/PAX",
      //    symbol: "BINANCE:USDCPAX",
      // },
      // {
      //    description: "Binance LINKUSDT",
      //    displaySymbol: "LINK/USDT",
      //    symbol: "BINANCE:LINKUSDT",
      // },
      // {
      //    description: "Binance LINKTUSD",
      //    displaySymbol: "LINK/TUSD",
      //    symbol: "BINANCE:LINKTUSD",
      // },
      // {
      //    description: "Binance LINKPAX",
      //    displaySymbol: "LINK/PAX",
      //    symbol: "BINANCE:LINKPAX",
      // },
      // {
      //    description: "Binance LINKUSDC",
      //    displaySymbol: "LINK/USDC",
      //    symbol: "BINANCE:LINKUSDC",
      // },
      // {
      //    description: "Binance WAVESUSDT",
      //    displaySymbol: "WAVES/USDT",
      //    symbol: "BINANCE:WAVESUSDT",
      // },
      // {
      //    description: "Binance WAVESTUSD",
      //    displaySymbol: "WAVES/TUSD",
      //    symbol: "BINANCE:WAVESTUSD",
      // },
      // {
      //    description: "Binance WAVESPAX",
      //    displaySymbol: "WAVES/PAX",
      //    symbol: "BINANCE:WAVESPAX",
      // },
      // {
      //    description: "Binance WAVESUSDC",
      //    displaySymbol: "WAVES/USDC",
      //    symbol: "BINANCE:WAVESUSDC",
      // },
      // {
      //    description: "Binance BCHABCTUSD",
      //    displaySymbol: "BCHABC/TUSD",
      //    symbol: "BINANCE:BCHABCTUSD",
      // },
      // {
      //    description: "Binance BCHABCPAX",
      //    displaySymbol: "BCHABC/PAX",
      //    symbol: "BINANCE:BCHABCPAX",
      // },
      // {
      //    description: "Binance BCHABCUSDC",
      //    displaySymbol: "BCHABC/USDC",
      //    symbol: "BINANCE:BCHABCUSDC",
      // },
      // {
      //    description: "Binance BCHSVTUSD",
      //    displaySymbol: "BCHSV/TUSD",
      //    symbol: "BINANCE:BCHSVTUSD",
      // },
      // {
      //    description: "Binance BCHSVPAX",
      //    displaySymbol: "BCHSV/PAX",
      //    symbol: "BINANCE:BCHSVPAX",
      // },
      // {
      //    description: "Binance BCHSVUSDC",
      //    displaySymbol: "BCHSV/USDC",
      //    symbol: "BINANCE:BCHSVUSDC",
      // },
      // {
      //    description: "Binance LTCTUSD",
      //    displaySymbol: "LTC/TUSD",
      //    symbol: "BINANCE:LTCTUSD",
      // },
      // {
      //    description: "Binance LTCPAX",
      //    displaySymbol: "LTC/PAX",
      //    symbol: "BINANCE:LTCPAX",
      // },
      // {
      //    description: "Binance LTCUSDC",
      //    displaySymbol: "LTC/USDC",
      //    symbol: "BINANCE:LTCUSDC",
      // },
      // {
      //    description: "Binance TRXPAX",
      //    displaySymbol: "TRX/PAX",
      //    symbol: "BINANCE:TRXPAX",
      // },
      // {
      //    description: "Binance TRXUSDC",
      //    displaySymbol: "TRX/USDC",
      //    symbol: "BINANCE:TRXUSDC",
      // },
      // {
      //    description: "Binance BTTBTC",
      //    displaySymbol: "BTT/BTC",
      //    symbol: "BINANCE:BTTBTC",
      // },
      // {
      //    description: "Binance BTTBNB",
      //    displaySymbol: "BTT/BNB",
      //    symbol: "BINANCE:BTTBNB",
      // },
      // {
      //    description: "Binance BTTUSDT",
      //    displaySymbol: "BTT/USDT",
      //    symbol: "BINANCE:BTTUSDT",
      // },
      // {
      //    description: "Binance BNBUSDS",
      //    displaySymbol: "BNB/USDS",
      //    symbol: "BINANCE:BNBUSDS",
      // },
      // {
      //    description: "Binance BTCUSDS",
      //    displaySymbol: "BTC/USDS",
      //    symbol: "BINANCE:BTCUSDS",
      // },
      // {
      //    description: "Binance USDSUSDT",
      //    displaySymbol: "USDS/USDT",
      //    symbol: "BINANCE:USDSUSDT",
      // },
      // {
      //    description: "Binance USDSPAX",
      //    displaySymbol: "USDS/PAX",
      //    symbol: "BINANCE:USDSPAX",
      // },
      // {
      //    description: "Binance USDSTUSD",
      //    displaySymbol: "USDS/TUSD",
      //    symbol: "BINANCE:USDSTUSD",
      // },
      // {
      //    description: "Binance USDSUSDC",
      //    displaySymbol: "USDS/USDC",
      //    symbol: "BINANCE:USDSUSDC",
      // },
      // {
      //    description: "Binance BTTPAX",
      //    displaySymbol: "BTT/PAX",
      //    symbol: "BINANCE:BTTPAX",
      // },
      // {
      //    description: "Binance BTTTUSD",
      //    displaySymbol: "BTT/TUSD",
      //    symbol: "BINANCE:BTTTUSD",
      // },
      // {
      //    description: "Binance BTTUSDC",
      //    displaySymbol: "BTT/USDC",
      //    symbol: "BINANCE:BTTUSDC",
      // },
      // {
      //    description: "Binance ONGBNB",
      //    displaySymbol: "ONG/BNB",
      //    symbol: "BINANCE:ONGBNB",
      // },
      // {
      //    description: "Binance ONGBTC",
      //    displaySymbol: "ONG/BTC",
      //    symbol: "BINANCE:ONGBTC",
      // },
      // {
      //    description: "Binance ONGUSDT",
      //    displaySymbol: "ONG/USDT",
      //    symbol: "BINANCE:ONGUSDT",
      // },
      // {
      //    description: "Binance HOTBNB",
      //    displaySymbol: "HOT/BNB",
      //    symbol: "BINANCE:HOTBNB",
      // },
      // {
      //    description: "Binance HOTUSDT",
      //    displaySymbol: "HOT/USDT",
      //    symbol: "BINANCE:HOTUSDT",
      // },
      // {
      //    description: "Binance ZILUSDT",
      //    displaySymbol: "ZIL/USDT",
      //    symbol: "BINANCE:ZILUSDT",
      // },
      // {
      //    description: "Binance ZRXBNB",
      //    displaySymbol: "ZRX/BNB",
      //    symbol: "BINANCE:ZRXBNB",
      // },
      // {
      //    description: "Binance ZRXUSDT",
      //    displaySymbol: "ZRX/USDT",
      //    symbol: "BINANCE:ZRXUSDT",
      // },
      // {
      //    description: "Binance FETBNB",
      //    displaySymbol: "FET/BNB",
      //    symbol: "BINANCE:FETBNB",
      // },
      // {
      //    description: "Binance FETBTC",
      //    displaySymbol: "FET/BTC",
      //    symbol: "BINANCE:FETBTC",
      // },
      // {
      //    description: "Binance FETUSDT",
      //    displaySymbol: "FET/USDT",
      //    symbol: "BINANCE:FETUSDT",
      // },
      // {
      //    description: "Binance BATUSDT",
      //    displaySymbol: "BAT/USDT",
      //    symbol: "BINANCE:BATUSDT",
      // },
      // {
      //    description: "Binance XMRBNB",
      //    displaySymbol: "XMR/BNB",
      //    symbol: "BINANCE:XMRBNB",
      // },
      // {
      //    description: "Binance XMRUSDT",
      //    displaySymbol: "XMR/USDT",
      //    symbol: "BINANCE:XMRUSDT",
      // },
      // {
      //    description: "Binance ZECBNB",
      //    displaySymbol: "ZEC/BNB",
      //    symbol: "BINANCE:ZECBNB",
      // },
      // {
      //    description: "Binance ZECUSDT",
      //    displaySymbol: "ZEC/USDT",
      //    symbol: "BINANCE:ZECUSDT",
      // },
      // {
      //    description: "Binance ZECPAX",
      //    displaySymbol: "ZEC/PAX",
      //    symbol: "BINANCE:ZECPAX",
      // },
      // {
      //    description: "Binance ZECTUSD",
      //    displaySymbol: "ZEC/TUSD",
      //    symbol: "BINANCE:ZECTUSD",
      // },
      // {
      //    description: "Binance ZECUSDC",
      //    displaySymbol: "ZEC/USDC",
      //    symbol: "BINANCE:ZECUSDC",
      // },
      // {
      //    description: "Binance IOSTBNB",
      //    displaySymbol: "IOST/BNB",
      //    symbol: "BINANCE:IOSTBNB",
      // },
      // {
      //    description: "Binance IOSTUSDT",
      //    displaySymbol: "IOST/USDT",
      //    symbol: "BINANCE:IOSTUSDT",
      // },
      // {
      //    description: "Binance CELRBNB",
      //    displaySymbol: "CELR/BNB",
      //    symbol: "BINANCE:CELRBNB",
      // },
      // {
      //    description: "Binance CELRBTC",
      //    displaySymbol: "CELR/BTC",
      //    symbol: "BINANCE:CELRBTC",
      // },
      // {
      //    description: "Binance CELRUSDT",
      //    displaySymbol: "CELR/USDT",
      //    symbol: "BINANCE:CELRUSDT",
      // },
      // {
      //    description: "Binance ADAPAX",
      //    displaySymbol: "ADA/PAX",
      //    symbol: "BINANCE:ADAPAX",
      // },
      // {
      //    description: "Binance ADAUSDC",
      //    displaySymbol: "ADA/USDC",
      //    symbol: "BINANCE:ADAUSDC",
      // },
      // {
      //    description: "Binance NEOPAX",
      //    displaySymbol: "NEO/PAX",
      //    symbol: "BINANCE:NEOPAX",
      // },
      // {
      //    description: "Binance NEOUSDC",
      //    displaySymbol: "NEO/USDC",
      //    symbol: "BINANCE:NEOUSDC",
      // },
      // {
      //    description: "Binance DASHBNB",
      //    displaySymbol: "DASH/BNB",
      //    symbol: "BINANCE:DASHBNB",
      // },
      // {
      //    description: "Binance DASHUSDT",
      //    displaySymbol: "DASH/USDT",
      //    symbol: "BINANCE:DASHUSDT",
      // },
      // {
      //    description: "Binance NANOUSDT",
      //    displaySymbol: "NANO/USDT",
      //    symbol: "BINANCE:NANOUSDT",
      // },
      // {
      //    description: "Binance OMGBNB",
      //    displaySymbol: "OMG/BNB",
      //    symbol: "BINANCE:OMGBNB",
      // },
      // {
      //    description: "Binance OMGUSDT",
      //    displaySymbol: "OMG/USDT",
      //    symbol: "BINANCE:OMGUSDT",
      // },
      // {
      //    description: "Binance THETAUSDT",
      //    displaySymbol: "THETA/USDT",
      //    symbol: "BINANCE:THETAUSDT",
      // },
      // {
      //    description: "Binance ENJUSDT",
      //    displaySymbol: "ENJ/USDT",
      //    symbol: "BINANCE:ENJUSDT",
      // },
      // {
      //    description: "Binance MITHUSDT",
      //    displaySymbol: "MITH/USDT",
      //    symbol: "BINANCE:MITHUSDT",
      // },
      // {
      //    description: "Binance MATICBNB",
      //    displaySymbol: "MATIC/BNB",
      //    symbol: "BINANCE:MATICBNB",
      // },
      // {
      //    description: "Binance MATICBTC",
      //    displaySymbol: "MATIC/BTC",
      //    symbol: "BINANCE:MATICBTC",
      // },
      // {
      //    description: "Binance MATICUSDT",
      //    displaySymbol: "MATIC/USDT",
      //    symbol: "BINANCE:MATICUSDT",
      // },
      // {
      //    description: "Binance ATOMBNB",
      //    displaySymbol: "ATOM/BNB",
      //    symbol: "BINANCE:ATOMBNB",
      // },
      // {
      //    description: "Binance ATOMBTC",
      //    displaySymbol: "ATOM/BTC",
      //    symbol: "BINANCE:ATOMBTC",
      // },
      // {
      //    description: "Binance ATOMUSDT",
      //    displaySymbol: "ATOM/USDT",
      //    symbol: "BINANCE:ATOMUSDT",
      // },
      // {
      //    description: "Binance ATOMUSDC",
      //    displaySymbol: "ATOM/USDC",
      //    symbol: "BINANCE:ATOMUSDC",
      // },
      // {
      //    description: "Binance ATOMPAX",
      //    displaySymbol: "ATOM/PAX",
      //    symbol: "BINANCE:ATOMPAX",
      // },
      // {
      //    description: "Binance ATOMTUSD",
      //    displaySymbol: "ATOM/TUSD",
      //    symbol: "BINANCE:ATOMTUSD",
      // },
      // {
      //    description: "Binance ETCUSDC",
      //    displaySymbol: "ETC/USDC",
      //    symbol: "BINANCE:ETCUSDC",
      // },
      // {
      //    description: "Binance ETCPAX",
      //    displaySymbol: "ETC/PAX",
      //    symbol: "BINANCE:ETCPAX",
      // },
      // {
      //    description: "Binance ETCTUSD",
      //    displaySymbol: "ETC/TUSD",
      //    symbol: "BINANCE:ETCTUSD",
      // },
      // {
      //    description: "Binance BATUSDC",
      //    displaySymbol: "BAT/USDC",
      //    symbol: "BINANCE:BATUSDC",
      // },
      // {
      //    description: "Binance BATPAX",
      //    displaySymbol: "BAT/PAX",
      //    symbol: "BINANCE:BATPAX",
      // },
      // {
      //    description: "Binance BATTUSD",
      //    displaySymbol: "BAT/TUSD",
      //    symbol: "BINANCE:BATTUSD",
      // },
      // {
      //    description: "Binance PHBBNB",
      //    displaySymbol: "PHB/BNB",
      //    symbol: "BINANCE:PHBBNB",
      // },
      // {
      //    description: "Binance PHBBTC",
      //    displaySymbol: "PHB/BTC",
      //    symbol: "BINANCE:PHBBTC",
      // },
      // {
      //    description: "Binance PHBUSDC",
      //    displaySymbol: "PHB/USDC",
      //    symbol: "BINANCE:PHBUSDC",
      // },
      // {
      //    description: "Binance PHBTUSD",
      //    displaySymbol: "PHB/TUSD",
      //    symbol: "BINANCE:PHBTUSD",
      // },
      // {
      //    description: "Binance PHBPAX",
      //    displaySymbol: "PHB/PAX",
      //    symbol: "BINANCE:PHBPAX",
      // },
      // {
      //    description: "Binance TFUELBNB",
      //    displaySymbol: "TFUEL/BNB",
      //    symbol: "BINANCE:TFUELBNB",
      // },
      // {
      //    description: "Binance TFUELBTC",
      //    displaySymbol: "TFUEL/BTC",
      //    symbol: "BINANCE:TFUELBTC",
      // },
      // {
      //    description: "Binance TFUELUSDT",
      //    displaySymbol: "TFUEL/USDT",
      //    symbol: "BINANCE:TFUELUSDT",
      // },
      // {
      //    description: "Binance TFUELUSDC",
      //    displaySymbol: "TFUEL/USDC",
      //    symbol: "BINANCE:TFUELUSDC",
      // },
      // {
      //    description: "Binance TFUELTUSD",
      //    displaySymbol: "TFUEL/TUSD",
      //    symbol: "BINANCE:TFUELTUSD",
      // },
      // {
      //    description: "Binance TFUELPAX",
      //    displaySymbol: "TFUEL/PAX",
      //    symbol: "BINANCE:TFUELPAX",
      // },
      // {
      //    description: "Binance ONEBNB",
      //    displaySymbol: "ONE/BNB",
      //    symbol: "BINANCE:ONEBNB",
      // },
      // {
      //    description: "Binance ONEBTC",
      //    displaySymbol: "ONE/BTC",
      //    symbol: "BINANCE:ONEBTC",
      // },
      // {
      //    description: "Binance ONEUSDT",
      //    displaySymbol: "ONE/USDT",
      //    symbol: "BINANCE:ONEUSDT",
      // },
      // {
      //    description: "Binance ONETUSD",
      //    displaySymbol: "ONE/TUSD",
      //    symbol: "BINANCE:ONETUSD",
      // },
      // {
      //    description: "Binance ONEPAX",
      //    displaySymbol: "ONE/PAX",
      //    symbol: "BINANCE:ONEPAX",
      // },
      // {
      //    description: "Binance ONEUSDC",
      //    displaySymbol: "ONE/USDC",
      //    symbol: "BINANCE:ONEUSDC",
      // },
      // {
      //    description: "Binance FTMBNB",
      //    displaySymbol: "FTM/BNB",
      //    symbol: "BINANCE:FTMBNB",
      // },
      // {
      //    description: "Binance FTMBTC",
      //    displaySymbol: "FTM/BTC",
      //    symbol: "BINANCE:FTMBTC",
      // },
      // {
      //    description: "Binance FTMUSDT",
      //    displaySymbol: "FTM/USDT",
      //    symbol: "BINANCE:FTMUSDT",
      // },
      // {
      //    description: "Binance FTMTUSD",
      //    displaySymbol: "FTM/TUSD",
      //    symbol: "BINANCE:FTMTUSD",
      // },
      // {
      //    description: "Binance FTMPAX",
      //    displaySymbol: "FTM/PAX",
      //    symbol: "BINANCE:FTMPAX",
      // },
      // {
      //    description: "Binance FTMUSDC",
      //    displaySymbol: "FTM/USDC",
      //    symbol: "BINANCE:FTMUSDC",
      // },
      // {
      //    description: "Binance BTCBBTC",
      //    displaySymbol: "BTCB/BTC",
      //    symbol: "BINANCE:BTCBBTC",
      // },
      // {
      //    description: "Binance BCPTTUSD",
      //    displaySymbol: "BCPT/TUSD",
      //    symbol: "BINANCE:BCPTTUSD",
      // },
      // {
      //    description: "Binance BCPTPAX",
      //    displaySymbol: "BCPT/PAX",
      //    symbol: "BINANCE:BCPTPAX",
      // },
      // {
      //    description: "Binance BCPTUSDC",
      //    displaySymbol: "BCPT/USDC",
      //    symbol: "BINANCE:BCPTUSDC",
      // },
      // {
      //    description: "Binance ALGOBNB",
      //    displaySymbol: "ALGO/BNB",
      //    symbol: "BINANCE:ALGOBNB",
      // },
      // {
      //    description: "Binance ALGOBTC",
      //    displaySymbol: "ALGO/BTC",
      //    symbol: "BINANCE:ALGOBTC",
      // },
      // {
      //    description: "Binance ALGOUSDT",
      //    displaySymbol: "ALGO/USDT",
      //    symbol: "BINANCE:ALGOUSDT",
      // },
      // {
      //    description: "Binance ALGOTUSD",
      //    displaySymbol: "ALGO/TUSD",
      //    symbol: "BINANCE:ALGOTUSD",
      // },
      // {
      //    description: "Binance ALGOPAX",
      //    displaySymbol: "ALGO/PAX",
      //    symbol: "BINANCE:ALGOPAX",
      // },
      // {
      //    description: "Binance ALGOUSDC",
      //    displaySymbol: "ALGO/USDC",
      //    symbol: "BINANCE:ALGOUSDC",
      // },
      // {
      //    description: "Binance USDSBUSDT",
      //    displaySymbol: "USDSB/USDT",
      //    symbol: "BINANCE:USDSBUSDT",
      // },
      // {
      //    description: "Binance USDSBUSDS",
      //    displaySymbol: "USDSB/USDS",
      //    symbol: "BINANCE:USDSBUSDS",
      // },
      // {
      //    description: "Binance GTOUSDT",
      //    displaySymbol: "GTO/USDT",
      //    symbol: "BINANCE:GTOUSDT",
      // },
      // {
      //    description: "Binance GTOPAX",
      //    displaySymbol: "GTO/PAX",
      //    symbol: "BINANCE:GTOPAX",
      // },
      // {
      //    description: "Binance GTOTUSD",
      //    displaySymbol: "GTO/TUSD",
      //    symbol: "BINANCE:GTOTUSD",
      // },
      // {
      //    description: "Binance GTOUSDC",
      //    displaySymbol: "GTO/USDC",
      //    symbol: "BINANCE:GTOUSDC",
      // },
      // {
      //    description: "Binance ERDBNB",
      //    displaySymbol: "ERD/BNB",
      //    symbol: "BINANCE:ERDBNB",
      // },
      // {
      //    description: "Binance ERDBTC",
      //    displaySymbol: "ERD/BTC",
      //    symbol: "BINANCE:ERDBTC",
      // },
      // {
      //    description: "Binance ERDUSDT",
      //    displaySymbol: "ERD/USDT",
      //    symbol: "BINANCE:ERDUSDT",
      // },
      // {
      //    description: "Binance ERDPAX",
      //    displaySymbol: "ERD/PAX",
      //    symbol: "BINANCE:ERDPAX",
      // },
      // {
      //    description: "Binance ERDUSDC",
      //    displaySymbol: "ERD/USDC",
      //    symbol: "BINANCE:ERDUSDC",
      // },
      // {
      //    description: "Binance DOGEBNB",
      //    displaySymbol: "DOGE/BNB",
      //    symbol: "BINANCE:DOGEBNB",
      // },
      // {
      //    description: "Binance DOGEBTC",
      //    displaySymbol: "DOGE/BTC",
      //    symbol: "BINANCE:DOGEBTC",
      // },
      // {
      //    description: "Binance DOGEUSDT",
      //    displaySymbol: "DOGE/USDT",
      //    symbol: "BINANCE:DOGEUSDT",
      // },
      // {
      //    description: "Binance DOGEPAX",
      //    displaySymbol: "DOGE/PAX",
      //    symbol: "BINANCE:DOGEPAX",
      // },
      // {
      //    description: "Binance DOGEUSDC",
      //    displaySymbol: "DOGE/USDC",
      //    symbol: "BINANCE:DOGEUSDC",
      // },
      // {
      //    description: "Binance DUSKBNB",
      //    displaySymbol: "DUSK/BNB",
      //    symbol: "BINANCE:DUSKBNB",
      // },
      // {
      //    description: "Binance DUSKBTC",
      //    displaySymbol: "DUSK/BTC",
      //    symbol: "BINANCE:DUSKBTC",
      // },
      // {
      //    description: "Binance DUSKUSDT",
      //    displaySymbol: "DUSK/USDT",
      //    symbol: "BINANCE:DUSKUSDT",
      // },
      // {
      //    description: "Binance DUSKUSDC",
      //    displaySymbol: "DUSK/USDC",
      //    symbol: "BINANCE:DUSKUSDC",
      // },
      // {
      //    description: "Binance DUSKPAX",
      //    displaySymbol: "DUSK/PAX",
      //    symbol: "BINANCE:DUSKPAX",
      // },
      // {
      //    description: "Binance BGBPUSDC",
      //    displaySymbol: "BGBP/USDC",
      //    symbol: "BINANCE:BGBPUSDC",
      // },
      // {
      //    description: "Binance ANKRBNB",
      //    displaySymbol: "ANKR/BNB",
      //    symbol: "BINANCE:ANKRBNB",
      // },
      // {
      //    description: "Binance ANKRBTC",
      //    displaySymbol: "ANKR/BTC",
      //    symbol: "BINANCE:ANKRBTC",
      // },
      // {
      //    description: "Binance ANKRUSDT",
      //    displaySymbol: "ANKR/USDT",
      //    symbol: "BINANCE:ANKRUSDT",
      // },
      // {
      //    description: "Binance ANKRTUSD",
      //    displaySymbol: "ANKR/TUSD",
      //    symbol: "BINANCE:ANKRTUSD",
      // },
      // {
      //    description: "Binance ANKRPAX",
      //    displaySymbol: "ANKR/PAX",
      //    symbol: "BINANCE:ANKRPAX",
      // },
      // {
      //    description: "Binance ANKRUSDC",
      //    displaySymbol: "ANKR/USDC",
      //    symbol: "BINANCE:ANKRUSDC",
      // },
      // {
      //    description: "Binance ONTPAX",
      //    displaySymbol: "ONT/PAX",
      //    symbol: "BINANCE:ONTPAX",
      // },
      // {
      //    description: "Binance ONTUSDC",
      //    displaySymbol: "ONT/USDC",
      //    symbol: "BINANCE:ONTUSDC",
      // },
      // {
      //    description: "Binance WINBNB",
      //    displaySymbol: "WIN/BNB",
      //    symbol: "BINANCE:WINBNB",
      // },
      // {
      //    description: "Binance WINBTC",
      //    displaySymbol: "WIN/BTC",
      //    symbol: "BINANCE:WINBTC",
      // },
      // {
      //    description: "Binance WINUSDT",
      //    displaySymbol: "WIN/USDT",
      //    symbol: "BINANCE:WINUSDT",
      // },
      // {
      //    description: "Binance WINUSDC",
      //    displaySymbol: "WIN/USDC",
      //    symbol: "BINANCE:WINUSDC",
      // },
      // {
      //    description: "Binance COSBNB",
      //    displaySymbol: "COS/BNB",
      //    symbol: "BINANCE:COSBNB",
      // },
      // {
      //    description: "Binance COSBTC",
      //    displaySymbol: "COS/BTC",
      //    symbol: "BINANCE:COSBTC",
      // },
      // {
      //    description: "Binance COSUSDT",
      //    displaySymbol: "COS/USDT",
      //    symbol: "BINANCE:COSUSDT",
      // },
      // {
      //    description: "Binance TUSDBTUSD",
      //    displaySymbol: "TUSDB/TUSD",
      //    symbol: "BINANCE:TUSDBTUSD",
      // },
      // {
      //    description: "Binance NPXSUSDT",
      //    displaySymbol: "NPXS/USDT",
      //    symbol: "BINANCE:NPXSUSDT",
      // },
      // {
      //    description: "Binance NPXSUSDC",
      //    displaySymbol: "NPXS/USDC",
      //    symbol: "BINANCE:NPXSUSDC",
      // },
      // {
      //    description: "Binance COCOSBNB",
      //    displaySymbol: "COCOS/BNB",
      //    symbol: "BINANCE:COCOSBNB",
      // },
      // {
      //    description: "Binance COCOSBTC",
      //    displaySymbol: "COCOS/BTC",
      //    symbol: "BINANCE:COCOSBTC",
      // },
      // {
      //    description: "Binance COCOSUSDT",
      //    displaySymbol: "COCOS/USDT",
      //    symbol: "BINANCE:COCOSUSDT",
      // },
      // {
      //    description: "Binance MTLUSDT",
      //    displaySymbol: "MTL/USDT",
      //    symbol: "BINANCE:MTLUSDT",
      // },
      // {
      //    description: "Binance TOMOBNB",
      //    displaySymbol: "TOMO/BNB",
      //    symbol: "BINANCE:TOMOBNB",
      // },
      // {
      //    description: "Binance TOMOBTC",
      //    displaySymbol: "TOMO/BTC",
      //    symbol: "BINANCE:TOMOBTC",
      // },
      // {
      //    description: "Binance TOMOUSDT",
      //    displaySymbol: "TOMO/USDT",
      //    symbol: "BINANCE:TOMOUSDT",
      // },
      // {
      //    description: "Binance TOMOUSDC",
      //    displaySymbol: "TOMO/USDC",
      //    symbol: "BINANCE:TOMOUSDC",
      // },
      // {
      //    description: "Binance PERLBNB",
      //    displaySymbol: "PERL/BNB",
      //    symbol: "BINANCE:PERLBNB",
      // },
      // {
      //    description: "Binance PERLBTC",
      //    displaySymbol: "PERL/BTC",
      //    symbol: "BINANCE:PERLBTC",
      // },
      // {
      //    description: "Binance PERLUSDC",
      //    displaySymbol: "PERL/USDC",
      //    symbol: "BINANCE:PERLUSDC",
      // },
      // {
      //    description: "Binance PERLUSDT",
      //    displaySymbol: "PERL/USDT",
      //    symbol: "BINANCE:PERLUSDT",
      // },
      // {
      //    description: "Binance DENTUSDT",
      //    displaySymbol: "DENT/USDT",
      //    symbol: "BINANCE:DENTUSDT",
      // },
      // {
      //    description: "Binance MFTUSDT",
      //    displaySymbol: "MFT/USDT",
      //    symbol: "BINANCE:MFTUSDT",
      // },
      // {
      //    description: "Binance KEYUSDT",
      //    displaySymbol: "KEY/USDT",
      //    symbol: "BINANCE:KEYUSDT",
      // },
      // {
      //    description: "Binance STORMUSDT",
      //    displaySymbol: "STORM/USDT",
      //    symbol: "BINANCE:STORMUSDT",
      // },
      // {
      //    description: "Binance DOCKUSDT",
      //    displaySymbol: "DOCK/USDT",
      //    symbol: "BINANCE:DOCKUSDT",
      // },
      // {
      //    description: "Binance WANUSDT",
      //    displaySymbol: "WAN/USDT",
      //    symbol: "BINANCE:WANUSDT",
      // },
      // {
      //    description: "Binance FUNUSDT",
      //    displaySymbol: "FUN/USDT",
      //    symbol: "BINANCE:FUNUSDT",
      // },
      // {
      //    description: "Binance CVCUSDT",
      //    displaySymbol: "CVC/USDT",
      //    symbol: "BINANCE:CVCUSDT",
      // },
      // {
      //    description: "Binance BTTTRX",
      //    displaySymbol: "BTT/TRX",
      //    symbol: "BINANCE:BTTTRX",
      // },
      // {
      //    description: "Binance WINTRX",
      //    displaySymbol: "WIN/TRX",
      //    symbol: "BINANCE:WINTRX",
      // },
      // {
      //    description: "Binance CHZBNB",
      //    displaySymbol: "CHZ/BNB",
      //    symbol: "BINANCE:CHZBNB",
      // },
      // {
      //    description: "Binance CHZBTC",
      //    displaySymbol: "CHZ/BTC",
      //    symbol: "BINANCE:CHZBTC",
      // },
      // {
      //    description: "Binance CHZUSDT",
      //    displaySymbol: "CHZ/USDT",
      //    symbol: "BINANCE:CHZUSDT",
      // },
      // {
      //    description: "Binance BANDBNB",
      //    displaySymbol: "BAND/BNB",
      //    symbol: "BINANCE:BANDBNB",
      // },
      // {
      //    description: "Binance BANDBTC",
      //    displaySymbol: "BAND/BTC",
      //    symbol: "BINANCE:BANDBTC",
      // },
      // {
      //    description: "Binance BANDUSDT",
      //    displaySymbol: "BAND/USDT",
      //    symbol: "BINANCE:BANDUSDT",
      // },
      // {
      //    description: "Binance BNBBUSD",
      //    displaySymbol: "BNB/BUSD",
      //    symbol: "BINANCE:BNBBUSD",
      // },
      // {
      //    description: "Binance BTCBUSD",
      //    displaySymbol: "BTC/BUSD",
      //    symbol: "BINANCE:BTCBUSD",
      // },
      // {
      //    description: "Binance BUSDUSDT",
      //    displaySymbol: "BUSD/USDT",
      //    symbol: "BINANCE:BUSDUSDT",
      // },
      // {
      //    description: "Binance BEAMBNB",
      //    displaySymbol: "BEAM/BNB",
      //    symbol: "BINANCE:BEAMBNB",
      // },
      // {
      //    description: "Binance BEAMBTC",
      //    displaySymbol: "BEAM/BTC",
      //    symbol: "BINANCE:BEAMBTC",
      // },
      // {
      //    description: "Binance BEAMUSDT",
      //    displaySymbol: "BEAM/USDT",
      //    symbol: "BINANCE:BEAMUSDT",
      // },
      // {
      //    description: "Binance XTZBNB",
      //    displaySymbol: "XTZ/BNB",
      //    symbol: "BINANCE:XTZBNB",
      // },
      // {
      //    description: "Binance XTZBTC",
      //    displaySymbol: "XTZ/BTC",
      //    symbol: "BINANCE:XTZBTC",
      // },
      // {
      //    description: "Binance XTZUSDT",
      //    displaySymbol: "XTZ/USDT",
      //    symbol: "BINANCE:XTZUSDT",
      // },
      // {
      //    description: "Binance RENUSDT",
      //    displaySymbol: "REN/USDT",
      //    symbol: "BINANCE:RENUSDT",
      // },
      // {
      //    description: "Binance RVNUSDT",
      //    displaySymbol: "RVN/USDT",
      //    symbol: "BINANCE:RVNUSDT",
      // },
      // {
      //    description: "Binance HCUSDT",
      //    displaySymbol: "HC/USDT",
      //    symbol: "BINANCE:HCUSDT",
      // },
      // {
      //    description: "Binance HBARBNB",
      //    displaySymbol: "HBAR/BNB",
      //    symbol: "BINANCE:HBARBNB",
      // },
      // {
      //    description: "Binance HBARBTC",
      //    displaySymbol: "HBAR/BTC",
      //    symbol: "BINANCE:HBARBTC",
      // },
      // {
      //    description: "Binance HBARUSDT",
      //    displaySymbol: "HBAR/USDT",
      //    symbol: "BINANCE:HBARUSDT",
      // },
      // {
      //    description: "Binance NKNBNB",
      //    displaySymbol: "NKN/BNB",
      //    symbol: "BINANCE:NKNBNB",
      // },
      // {
      //    description: "Binance NKNBTC",
      //    displaySymbol: "NKN/BTC",
      //    symbol: "BINANCE:NKNBTC",
      // },
      // {
      //    description: "Binance NKNUSDT",
      //    displaySymbol: "NKN/USDT",
      //    symbol: "BINANCE:NKNUSDT",
      // },
      // {
      //    description: "Binance XRPBUSD",
      //    displaySymbol: "XRP/BUSD",
      //    symbol: "BINANCE:XRPBUSD",
      // },
      // {
      //    description: "Binance ETHBUSD",
      //    displaySymbol: "ETH/BUSD",
      //    symbol: "BINANCE:ETHBUSD",
      // },
      // {
      //    description: "Binance BCHABCBUSD",
      //    displaySymbol: "BCHABC/BUSD",
      //    symbol: "BINANCE:BCHABCBUSD",
      // },
      // {
      //    description: "Binance LTCBUSD",
      //    displaySymbol: "LTC/BUSD",
      //    symbol: "BINANCE:LTCBUSD",
      // },
      // {
      //    description: "Binance LINKBUSD",
      //    displaySymbol: "LINK/BUSD",
      //    symbol: "BINANCE:LINKBUSD",
      // },
      // {
      //    description: "Binance ETCBUSD",
      //    displaySymbol: "ETC/BUSD",
      //    symbol: "BINANCE:ETCBUSD",
      // },
      // {
      //    description: "Binance STXBNB",
      //    displaySymbol: "STX/BNB",
      //    symbol: "BINANCE:STXBNB",
      // },
      // {
      //    description: "Binance STXBTC",
      //    displaySymbol: "STX/BTC",
      //    symbol: "BINANCE:STXBTC",
      // },
      // {
      //    description: "Binance STXUSDT",
      //    displaySymbol: "STX/USDT",
      //    symbol: "BINANCE:STXUSDT",
      // },
      // {
      //    description: "Binance KAVABNB",
      //    displaySymbol: "KAVA/BNB",
      //    symbol: "BINANCE:KAVABNB",
      // },
      // {
      //    description: "Binance KAVABTC",
      //    displaySymbol: "KAVA/BTC",
      //    symbol: "BINANCE:KAVABTC",
      // },
      // {
      //    description: "Binance KAVAUSDT",
      //    displaySymbol: "KAVA/USDT",
      //    symbol: "BINANCE:KAVAUSDT",
      // },
      // {
      //    description: "Binance BUSDNGN",
      //    displaySymbol: "BUSD/NGN",
      //    symbol: "BINANCE:BUSDNGN",
      // },
      // {
      //    description: "Binance BNBNGN",
      //    displaySymbol: "BNB/NGN",
      //    symbol: "BINANCE:BNBNGN",
      // },
      // {
      //    description: "Binance BTCNGN",
      //    displaySymbol: "BTC/NGN",
      //    symbol: "BINANCE:BTCNGN",
      // },
      // {
      //    description: "Binance ARPABNB",
      //    displaySymbol: "ARPA/BNB",
      //    symbol: "BINANCE:ARPABNB",
      // },
      // {
      //    description: "Binance ARPABTC",
      //    displaySymbol: "ARPA/BTC",
      //    symbol: "BINANCE:ARPABTC",
      // },
      // {
      //    description: "Binance ARPAUSDT",
      //    displaySymbol: "ARPA/USDT",
      //    symbol: "BINANCE:ARPAUSDT",
      // },
      // {
      //    description: "Binance TRXBUSD",
      //    displaySymbol: "TRX/BUSD",
      //    symbol: "BINANCE:TRXBUSD",
      // },
      // {
      //    description: "Binance EOSBUSD",
      //    displaySymbol: "EOS/BUSD",
      //    symbol: "BINANCE:EOSBUSD",
      // },
      // {
      //    description: "Binance IOTXUSDT",
      //    displaySymbol: "IOTX/USDT",
      //    symbol: "BINANCE:IOTXUSDT",
      // },
      // {
      //    description: "Binance RLCUSDT",
      //    displaySymbol: "RLC/USDT",
      //    symbol: "BINANCE:RLCUSDT",
      // },
      // {
      //    description: "Binance MCOUSDT",
      //    displaySymbol: "MCO/USDT",
      //    symbol: "BINANCE:MCOUSDT",
      // },
      // {
      //    description: "Binance XLMBUSD",
      //    displaySymbol: "XLM/BUSD",
      //    symbol: "BINANCE:XLMBUSD",
      // },
      // {
      //    description: "Binance ADABUSD",
      //    displaySymbol: "ADA/BUSD",
      //    symbol: "BINANCE:ADABUSD",
      // },
      // {
      //    description: "Binance CTXCBNB",
      //    displaySymbol: "CTXC/BNB",
      //    symbol: "BINANCE:CTXCBNB",
      // },
      // {
      //    description: "Binance CTXCBTC",
      //    displaySymbol: "CTXC/BTC",
      //    symbol: "BINANCE:CTXCBTC",
      // },
      // {
      //    description: "Binance CTXCUSDT",
      //    displaySymbol: "CTXC/USDT",
      //    symbol: "BINANCE:CTXCUSDT",
      // },
      // {
      //    description: "Binance BCHBNB",
      //    displaySymbol: "BCH/BNB",
      //    symbol: "BINANCE:BCHBNB",
      // },
      // {
      //    description: "Binance BCHBTC",
      //    displaySymbol: "BCH/BTC",
      //    symbol: "BINANCE:BCHBTC",
      // },
      // {
      //    description: "Binance BCHUSDT",
      //    displaySymbol: "BCH/USDT",
      //    symbol: "BINANCE:BCHUSDT",
      // },
      // {
      //    description: "Binance BCHUSDC",
      //    displaySymbol: "BCH/USDC",
      //    symbol: "BINANCE:BCHUSDC",
      // },
      // {
      //    description: "Binance BCHTUSD",
      //    displaySymbol: "BCH/TUSD",
      //    symbol: "BINANCE:BCHTUSD",
      // },
      // {
      //    description: "Binance BCHPAX",
      //    displaySymbol: "BCH/PAX",
      //    symbol: "BINANCE:BCHPAX",
      // },
      // {
      //    description: "Binance BCHBUSD",
      //    displaySymbol: "BCH/BUSD",
      //    symbol: "BINANCE:BCHBUSD",
      // },
      // {
      //    description: "Binance BTCRUB",
      //    displaySymbol: "BTC/RUB",
      //    symbol: "BINANCE:BTCRUB",
      // },
      // {
      //    description: "Binance ETHRUB",
      //    displaySymbol: "ETH/RUB",
      //    symbol: "BINANCE:ETHRUB",
      // },
      // {
      //    description: "Binance XRPRUB",
      //    displaySymbol: "XRP/RUB",
      //    symbol: "BINANCE:XRPRUB",
      // },
      // {
      //    description: "Binance BNBRUB",
      //    displaySymbol: "BNB/RUB",
      //    symbol: "BINANCE:BNBRUB",
      // },
      // {
      //    description: "Binance TROYBNB",
      //    displaySymbol: "TROY/BNB",
      //    symbol: "BINANCE:TROYBNB",
      // },
      // {
      //    description: "Binance TROYBTC",
      //    displaySymbol: "TROY/BTC",
      //    symbol: "BINANCE:TROYBTC",
      // },
      // {
      //    description: "Binance TROYUSDT",
      //    displaySymbol: "TROY/USDT",
      //    symbol: "BINANCE:TROYUSDT",
      // },
      // {
      //    description: "Binance BUSDRUB",
      //    displaySymbol: "BUSD/RUB",
      //    symbol: "BINANCE:BUSDRUB",
      // },
      // {
      //    description: "Binance QTUMBUSD",
      //    displaySymbol: "QTUM/BUSD",
      //    symbol: "BINANCE:QTUMBUSD",
      // },
      // {
      //    description: "Binance VETBUSD",
      //    displaySymbol: "VET/BUSD",
      //    symbol: "BINANCE:VETBUSD",
      // },
      // {
      //    description: "Binance VITEBNB",
      //    displaySymbol: "VITE/BNB",
      //    symbol: "BINANCE:VITEBNB",
      // },
      // {
      //    description: "Binance VITEBTC",
      //    displaySymbol: "VITE/BTC",
      //    symbol: "BINANCE:VITEBTC",
      // },
      // {
      //    description: "Binance VITEUSDT",
      //    displaySymbol: "VITE/USDT",
      //    symbol: "BINANCE:VITEUSDT",
      // },
      // {
      //    description: "Binance FTTBNB",
      //    displaySymbol: "FTT/BNB",
      //    symbol: "BINANCE:FTTBNB",
      // },
      // {
      //    description: "Binance FTTBTC",
      //    displaySymbol: "FTT/BTC",
      //    symbol: "BINANCE:FTTBTC",
      // },
      // {
      //    description: "Binance FTTUSDT",
      //    displaySymbol: "FTT/USDT",
      //    symbol: "BINANCE:FTTUSDT",
      // },
      // {
      //    description: "Binance BTCTRY",
      //    displaySymbol: "BTC/TRY",
      //    symbol: "BINANCE:BTCTRY",
      // },
      // {
      //    description: "Binance BNBTRY",
      //    displaySymbol: "BNB/TRY",
      //    symbol: "BINANCE:BNBTRY",
      // },
      // {
      //    description: "Binance BUSDTRY",
      //    displaySymbol: "BUSD/TRY",
      //    symbol: "BINANCE:BUSDTRY",
      // },
      // {
      //    description: "Binance ETHTRY",
      //    displaySymbol: "ETH/TRY",
      //    symbol: "BINANCE:ETHTRY",
      // },
      // {
      //    description: "Binance XRPTRY",
      //    displaySymbol: "XRP/TRY",
      //    symbol: "BINANCE:XRPTRY",
      // },
      // {
      //    description: "Binance USDTTRY",
      //    displaySymbol: "USDT/TRY",
      //    symbol: "BINANCE:USDTTRY",
      // },
      // {
      //    description: "Binance USDTRUB",
      //    displaySymbol: "USDT/RUB",
      //    symbol: "BINANCE:USDTRUB",
      // },
      // {
      //    description: "Binance BTCEUR",
      //    displaySymbol: "BTC/EUR",
      //    symbol: "BINANCE:BTCEUR",
      // },
      // {
      //    description: "Binance ETHEUR",
      //    displaySymbol: "ETH/EUR",
      //    symbol: "BINANCE:ETHEUR",
      // },
      // {
      //    description: "Binance BNBEUR",
      //    displaySymbol: "BNB/EUR",
      //    symbol: "BINANCE:BNBEUR",
      // },
      // {
      //    description: "Binance XRPEUR",
      //    displaySymbol: "XRP/EUR",
      //    symbol: "BINANCE:XRPEUR",
      // },
      // {
      //    description: "Binance EURBUSD",
      //    displaySymbol: "EUR/BUSD",
      //    symbol: "BINANCE:EURBUSD",
      // },
      // {
      //    description: "Binance EURUSDT",
      //    displaySymbol: "EUR/USDT",
      //    symbol: "BINANCE:EURUSDT",
      // },
      // {
      //    description: "Binance OGNBNB",
      //    displaySymbol: "OGN/BNB",
      //    symbol: "BINANCE:OGNBNB",
      // },
      // {
      //    description: "Binance OGNBTC",
      //    displaySymbol: "OGN/BTC",
      //    symbol: "BINANCE:OGNBTC",
      // },
      // {
      //    description: "Binance OGNUSDT",
      //    displaySymbol: "OGN/USDT",
      //    symbol: "BINANCE:OGNUSDT",
      // },
      // {
      //    description: "Binance DREPBNB",
      //    displaySymbol: "DREP/BNB",
      //    symbol: "BINANCE:DREPBNB",
      // },
      // {
      //    description: "Binance DREPBTC",
      //    displaySymbol: "DREP/BTC",
      //    symbol: "BINANCE:DREPBTC",
      // },
      // {
      //    description: "Binance DREPUSDT",
      //    displaySymbol: "DREP/USDT",
      //    symbol: "BINANCE:DREPUSDT",
      // },
      // {
      //    description: "Binance BULLUSDT",
      //    displaySymbol: "BULL/USDT",
      //    symbol: "BINANCE:BULLUSDT",
      // },
      // {
      //    description: "Binance BULLBUSD",
      //    displaySymbol: "BULL/BUSD",
      //    symbol: "BINANCE:BULLBUSD",
      // },
      // {
      //    description: "Binance BEARUSDT",
      //    displaySymbol: "BEAR/USDT",
      //    symbol: "BINANCE:BEARUSDT",
      // },
      // {
      //    description: "Binance BEARBUSD",
      //    displaySymbol: "BEAR/BUSD",
      //    symbol: "BINANCE:BEARBUSD",
      // },
      // {
      //    description: "Binance ETHBULLUSDT",
      //    displaySymbol: "ETHBULL/USDT",
      //    symbol: "BINANCE:ETHBULLUSDT",
      // },
      // {
      //    description: "Binance ETHBULLBUSD",
      //    displaySymbol: "ETHBULL/BUSD",
      //    symbol: "BINANCE:ETHBULLBUSD",
      // },
      // {
      //    description: "Binance ETHBEARUSDT",
      //    displaySymbol: "ETHBEAR/USDT",
      //    symbol: "BINANCE:ETHBEARUSDT",
      // },
      // {
      //    description: "Binance ETHBEARBUSD",
      //    displaySymbol: "ETHBEAR/BUSD",
      //    symbol: "BINANCE:ETHBEARBUSD",
      // },
      // {
      //    description: "Binance TCTBNB",
      //    displaySymbol: "TCT/BNB",
      //    symbol: "BINANCE:TCTBNB",
      // },
      // {
      //    description: "Binance TCTBTC",
      //    displaySymbol: "TCT/BTC",
      //    symbol: "BINANCE:TCTBTC",
      // },
      // {
      //    description: "Binance TCTUSDT",
      //    displaySymbol: "TCT/USDT",
      //    symbol: "BINANCE:TCTUSDT",
      // },
      // {
      //    description: "Binance WRXBNB",
      //    displaySymbol: "WRX/BNB",
      //    symbol: "BINANCE:WRXBNB",
      // },
      // {
      //    description: "Binance WRXBTC",
      //    displaySymbol: "WRX/BTC",
      //    symbol: "BINANCE:WRXBTC",
      // },
      // {
      //    description: "Binance WRXUSDT",
      //    displaySymbol: "WRX/USDT",
      //    symbol: "BINANCE:WRXUSDT",
      // },
      // {
      //    description: "Binance ICXBUSD",
      //    displaySymbol: "ICX/BUSD",
      //    symbol: "BINANCE:ICXBUSD",
      // },
      // {
      //    description: "Binance BTSUSDT",
      //    displaySymbol: "BTS/USDT",
      //    symbol: "BINANCE:BTSUSDT",
      // },
      // {
      //    description: "Binance BTSBUSD",
      //    displaySymbol: "BTS/BUSD",
      //    symbol: "BINANCE:BTSBUSD",
      // },
      // {
      //    description: "Binance LSKUSDT",
      //    displaySymbol: "LSK/USDT",
      //    symbol: "BINANCE:LSKUSDT",
      // },
      // {
      //    description: "Binance BNTUSDT",
      //    displaySymbol: "BNT/USDT",
      //    symbol: "BINANCE:BNTUSDT",
      // },
      // {
      //    description: "Binance BNTBUSD",
      //    displaySymbol: "BNT/BUSD",
      //    symbol: "BINANCE:BNTBUSD",
      // },
      // {
      //    description: "Binance LTOBNB",
      //    displaySymbol: "LTO/BNB",
      //    symbol: "BINANCE:LTOBNB",
      // },
      // {
      //    description: "Binance LTOBTC",
      //    displaySymbol: "LTO/BTC",
      //    symbol: "BINANCE:LTOBTC",
      // },
      // {
      //    description: "Binance LTOUSDT",
      //    displaySymbol: "LTO/USDT",
      //    symbol: "BINANCE:LTOUSDT",
      // },
      // {
      //    description: "Binance ATOMBUSD",
      //    displaySymbol: "ATOM/BUSD",
      //    symbol: "BINANCE:ATOMBUSD",
      // },
      // {
      //    description: "Binance DASHBUSD",
      //    displaySymbol: "DASH/BUSD",
      //    symbol: "BINANCE:DASHBUSD",
      // },
      // {
      //    description: "Binance NEOBUSD",
      //    displaySymbol: "NEO/BUSD",
      //    symbol: "BINANCE:NEOBUSD",
      // },
      // {
      //    description: "Binance WAVESBUSD",
      //    displaySymbol: "WAVES/BUSD",
      //    symbol: "BINANCE:WAVESBUSD",
      // },
      // {
      //    description: "Binance XTZBUSD",
      //    displaySymbol: "XTZ/BUSD",
      //    symbol: "BINANCE:XTZBUSD",
      // },
      // {
      //    description: "Binance EOSBULLUSDT",
      //    displaySymbol: "EOSBULL/USDT",
      //    symbol: "BINANCE:EOSBULLUSDT",
      // },
      // {
      //    description: "Binance EOSBULLBUSD",
      //    displaySymbol: "EOSBULL/BUSD",
      //    symbol: "BINANCE:EOSBULLBUSD",
      // },
      // {
      //    description: "Binance EOSBEARUSDT",
      //    displaySymbol: "EOSBEAR/USDT",
      //    symbol: "BINANCE:EOSBEARUSDT",
      // },
      // {
      //    description: "Binance EOSBEARBUSD",
      //    displaySymbol: "EOSBEAR/BUSD",
      //    symbol: "BINANCE:EOSBEARBUSD",
      // },
      // {
      //    description: "Binance XRPBULLUSDT",
      //    displaySymbol: "XRPBULL/USDT",
      //    symbol: "BINANCE:XRPBULLUSDT",
      // },
      // {
      //    description: "Binance XRPBULLBUSD",
      //    displaySymbol: "XRPBULL/BUSD",
      //    symbol: "BINANCE:XRPBULLBUSD",
      // },
      // {
      //    description: "Binance XRPBEARUSDT",
      //    displaySymbol: "XRPBEAR/USDT",
      //    symbol: "BINANCE:XRPBEARUSDT",
      // },
      // {
      //    description: "Binance XRPBEARBUSD",
      //    displaySymbol: "XRPBEAR/BUSD",
      //    symbol: "BINANCE:XRPBEARBUSD",
      // },
      // {
      //    description: "Binance BATBUSD",
      //    displaySymbol: "BAT/BUSD",
      //    symbol: "BINANCE:BATBUSD",
      // },
      // {
      //    description: "Binance ENJBUSD",
      //    displaySymbol: "ENJ/BUSD",
      //    symbol: "BINANCE:ENJBUSD",
      // },
      // {
      //    description: "Binance NANOBUSD",
      //    displaySymbol: "NANO/BUSD",
      //    symbol: "BINANCE:NANOBUSD",
      // },
      // {
      //    description: "Binance ONTBUSD",
      //    displaySymbol: "ONT/BUSD",
      //    symbol: "BINANCE:ONTBUSD",
      // },
      // {
      //    description: "Binance RVNBUSD",
      //    displaySymbol: "RVN/BUSD",
      //    symbol: "BINANCE:RVNBUSD",
      // },
      // {
      //    description: "Binance STRATBUSD",
      //    displaySymbol: "STRAT/BUSD",
      //    symbol: "BINANCE:STRATBUSD",
      // },
      // {
      //    description: "Binance STRATBNB",
      //    displaySymbol: "STRAT/BNB",
      //    symbol: "BINANCE:STRATBNB",
      // },
      // {
      //    description: "Binance STRATUSDT",
      //    displaySymbol: "STRAT/USDT",
      //    symbol: "BINANCE:STRATUSDT",
      // },
      // {
      //    description: "Binance AIONBUSD",
      //    displaySymbol: "AION/BUSD",
      //    symbol: "BINANCE:AIONBUSD",
      // },
      // {
      //    description: "Binance AIONUSDT",
      //    displaySymbol: "AION/USDT",
      //    symbol: "BINANCE:AIONUSDT",
      // },
      // {
      //    description: "Binance MBLBNB",
      //    displaySymbol: "MBL/BNB",
      //    symbol: "BINANCE:MBLBNB",
      // },
      // {
      //    description: "Binance MBLBTC",
      //    displaySymbol: "MBL/BTC",
      //    symbol: "BINANCE:MBLBTC",
      // },
      // {
      //    description: "Binance MBLUSDT",
      //    displaySymbol: "MBL/USDT",
      //    symbol: "BINANCE:MBLUSDT",
      // },
      // {
      //    description: "Binance COTIBNB",
      //    displaySymbol: "COTI/BNB",
      //    symbol: "BINANCE:COTIBNB",
      // },
      // {
      //    description: "Binance COTIBTC",
      //    displaySymbol: "COTI/BTC",
      //    symbol: "BINANCE:COTIBTC",
      // },
      // {
      //    description: "Binance COTIUSDT",
      //    displaySymbol: "COTI/USDT",
      //    symbol: "BINANCE:COTIUSDT",
      // },
      // {
      //    description: "Binance ALGOBUSD",
      //    displaySymbol: "ALGO/BUSD",
      //    symbol: "BINANCE:ALGOBUSD",
      // },
      // {
      //    description: "Binance BTTBUSD",
      //    displaySymbol: "BTT/BUSD",
      //    symbol: "BINANCE:BTTBUSD",
      // },
      // {
      //    description: "Binance TOMOBUSD",
      //    displaySymbol: "TOMO/BUSD",
      //    symbol: "BINANCE:TOMOBUSD",
      // },
      // {
      //    description: "Binance XMRBUSD",
      //    displaySymbol: "XMR/BUSD",
      //    symbol: "BINANCE:XMRBUSD",
      // },
      // {
      //    description: "Binance ZECBUSD",
      //    displaySymbol: "ZEC/BUSD",
      //    symbol: "BINANCE:ZECBUSD",
      // },
      // {
      //    description: "Binance BNBBULLUSDT",
      //    displaySymbol: "BNBBULL/USDT",
      //    symbol: "BINANCE:BNBBULLUSDT",
      // },
      // {
      //    description: "Binance BNBBULLBUSD",
      //    displaySymbol: "BNBBULL/BUSD",
      //    symbol: "BINANCE:BNBBULLBUSD",
      // },
      // {
      //    description: "Binance BNBBEARUSDT",
      //    displaySymbol: "BNBBEAR/USDT",
      //    symbol: "BINANCE:BNBBEARUSDT",
      // },
      // {
      //    description: "Binance BNBBEARBUSD",
      //    displaySymbol: "BNBBEAR/BUSD",
      //    symbol: "BINANCE:BNBBEARBUSD",
      // },
      // {
      //    description: "Binance STPTBNB",
      //    displaySymbol: "STPT/BNB",
      //    symbol: "BINANCE:STPTBNB",
      // },
      // {
      //    description: "Binance STPTBTC",
      //    displaySymbol: "STPT/BTC",
      //    symbol: "BINANCE:STPTBTC",
      // },
      // {
      //    description: "Binance STPTUSDT",
      //    displaySymbol: "STPT/USDT",
      //    symbol: "BINANCE:STPTUSDT",
      // },
      // {
      //    description: "Binance BTCZAR",
      //    displaySymbol: "BTC/ZAR",
      //    symbol: "BINANCE:BTCZAR",
      // },
      // {
      //    description: "Binance ETHZAR",
      //    displaySymbol: "ETH/ZAR",
      //    symbol: "BINANCE:ETHZAR",
      // },
      // {
      //    description: "Binance BNBZAR",
      //    displaySymbol: "BNB/ZAR",
      //    symbol: "BINANCE:BNBZAR",
      // },
      // {
      //    description: "Binance USDTZAR",
      //    displaySymbol: "USDT/ZAR",
      //    symbol: "BINANCE:USDTZAR",
      // },
      // {
      //    description: "Binance BUSDZAR",
      //    displaySymbol: "BUSD/ZAR",
      //    symbol: "BINANCE:BUSDZAR",
      // },
      // {
      //    description: "Binance BTCBKRW",
      //    displaySymbol: "BTC/BKRW",
      //    symbol: "BINANCE:BTCBKRW",
      // },
      // {
      //    description: "Binance ETHBKRW",
      //    displaySymbol: "ETH/BKRW",
      //    symbol: "BINANCE:ETHBKRW",
      // },
      // {
      //    description: "Binance BNBBKRW",
      //    displaySymbol: "BNB/BKRW",
      //    symbol: "BINANCE:BNBBKRW",
      // },
      // {
      //    description: "Binance WTCUSDT",
      //    displaySymbol: "WTC/USDT",
      //    symbol: "BINANCE:WTCUSDT",
      // },
      // {
      //    description: "Binance DATABUSD",
      //    displaySymbol: "DATA/BUSD",
      //    symbol: "BINANCE:DATABUSD",
      // },
      // {
      //    description: "Binance DATAUSDT",
      //    displaySymbol: "DATA/USDT",
      //    symbol: "BINANCE:DATAUSDT",
      // },
      // {
      //    description: "Binance XZCUSDT",
      //    displaySymbol: "XZC/USDT",
      //    symbol: "BINANCE:XZCUSDT",
      // },
      // {
      //    description: "Binance SOLBNB",
      //    displaySymbol: "SOL/BNB",
      //    symbol: "BINANCE:SOLBNB",
      // },
      // {
      //    description: "Binance SOLBTC",
      //    displaySymbol: "SOL/BTC",
      //    symbol: "BINANCE:SOLBTC",
      // },
      // {
      //    description: "Binance SOLBUSD",
      //    displaySymbol: "SOL/BUSD",
      //    symbol: "BINANCE:SOLBUSD",
      // },
      // {
      //    description: "Binance BTCIDRT",
      //    displaySymbol: "BTC/IDRT",
      //    symbol: "BINANCE:BTCIDRT",
      // },
      // {
      //    description: "Binance BNBIDRT",
      //    displaySymbol: "BNB/IDRT",
      //    symbol: "BINANCE:BNBIDRT",
      // },
      // {
      //    description: "Binance USDTIDRT",
      //    displaySymbol: "USDT/IDRT",
      //    symbol: "BINANCE:USDTIDRT",
      // },
      // {
      //    description: "Binance BUSDIDRT",
      //    displaySymbol: "BUSD/IDRT",
      //    symbol: "BINANCE:BUSDIDRT",
      // },
      // {
      //    description: "Binance CTSIBTC",
      //    displaySymbol: "CTSI/BTC",
      //    symbol: "BINANCE:CTSIBTC",
      // },
      // {
      //    description: "Binance CTSIUSDT",
      //    displaySymbol: "CTSI/USDT",
      //    symbol: "BINANCE:CTSIUSDT",
      // },
      // {
      //    description: "Binance CTSIBNB",
      //    displaySymbol: "CTSI/BNB",
      //    symbol: "BINANCE:CTSIBNB",
      // },
      // {
      //    description: "Binance CTSIBUSD",
      //    displaySymbol: "CTSI/BUSD",
      //    symbol: "BINANCE:CTSIBUSD",
      // },
      // {
      //    description: "Binance HIVEBNB",
      //    displaySymbol: "HIVE/BNB",
      //    symbol: "BINANCE:HIVEBNB",
      // },
      // {
      //    description: "Binance HIVEBTC",
      //    displaySymbol: "HIVE/BTC",
      //    symbol: "BINANCE:HIVEBTC",
      // },
      // {
      //    description: "Binance HIVEUSDT",
      //    displaySymbol: "HIVE/USDT",
      //    symbol: "BINANCE:HIVEUSDT",
      // },
      // {
      //    description: "Binance CHRBNB",
      //    displaySymbol: "CHR/BNB",
      //    symbol: "BINANCE:CHRBNB",
      // },
      // {
      //    description: "Binance CHRBTC",
      //    displaySymbol: "CHR/BTC",
      //    symbol: "BINANCE:CHRBTC",
      // },
      // {
      //    description: "Binance CHRUSDT",
      //    displaySymbol: "CHR/USDT",
      //    symbol: "BINANCE:CHRUSDT",
      // },
      // {
      //    description: "Binance BTCUPUSDT",
      //    displaySymbol: "BTCUP/USDT",
      //    symbol: "BINANCE:BTCUPUSDT",
      // },
      // {
      //    description: "Binance BTCDOWNUSDT",
      //    displaySymbol: "BTCDOWN/USDT",
      //    symbol: "BINANCE:BTCDOWNUSDT",
      // },
      // {
      //    description: "Binance GXSUSDT",
      //    displaySymbol: "GXS/USDT",
      //    symbol: "BINANCE:GXSUSDT",
      // },
      // {
      //    description: "Binance ARDRUSDT",
      //    displaySymbol: "ARDR/USDT",
      //    symbol: "BINANCE:ARDRUSDT",
      // },
      // {
      //    description: "Binance ERDBUSD",
      //    displaySymbol: "ERD/BUSD",
      //    symbol: "BINANCE:ERDBUSD",
      // },
      // {
      //    description: "Binance LENDUSDT",
      //    displaySymbol: "LEND/USDT",
      //    symbol: "BINANCE:LENDUSDT",
      // },
      // {
      //    description: "Binance HBARBUSD",
      //    displaySymbol: "HBAR/BUSD",
      //    symbol: "BINANCE:HBARBUSD",
      // },
      // {
      //    description: "Binance MATICBUSD",
      //    displaySymbol: "MATIC/BUSD",
      //    symbol: "BINANCE:MATICBUSD",
      // },
      // {
      //    description: "Binance WRXBUSD",
      //    displaySymbol: "WRX/BUSD",
      //    symbol: "BINANCE:WRXBUSD",
      // },
      // {
      //    description: "Binance ZILBUSD",
      //    displaySymbol: "ZIL/BUSD",
      //    symbol: "BINANCE:ZILBUSD",
      // },
      // {
      //    description: "Binance MDTBNB",
      //    displaySymbol: "MDT/BNB",
      //    symbol: "BINANCE:MDTBNB",
      // },
      // {
      //    description: "Binance MDTBTC",
      //    displaySymbol: "MDT/BTC",
      //    symbol: "BINANCE:MDTBTC",
      // },
      // {
      //    description: "Binance MDTUSDT",
      //    displaySymbol: "MDT/USDT",
      //    symbol: "BINANCE:MDTUSDT",
      // },
      // {
      //    description: "Binance STMXBNB",
      //    displaySymbol: "STMX/BNB",
      //    symbol: "BINANCE:STMXBNB",
      // },
      // {
      //    description: "Binance STMXBTC",
      //    displaySymbol: "STMX/BTC",
      //    symbol: "BINANCE:STMXBTC",
      // },
      // {
      //    description: "Binance STMXETH",
      //    displaySymbol: "STMX/ETH",
      //    symbol: "BINANCE:STMXETH",
      // },
      // {
      //    description: "Binance STMXUSDT",
      //    displaySymbol: "STMX/USDT",
      //    symbol: "BINANCE:STMXUSDT",
      // },
      // {
      //    description: "Binance KNCBUSD",
      //    displaySymbol: "KNC/BUSD",
      //    symbol: "BINANCE:KNCBUSD",
      // },
      // {
      //    description: "Binance KNCUSDT",
      //    displaySymbol: "KNC/USDT",
      //    symbol: "BINANCE:KNCUSDT",
      // },
      // {
      //    description: "Binance REPBUSD",
      //    displaySymbol: "REP/BUSD",
      //    symbol: "BINANCE:REPBUSD",
      // },
      // {
      //    description: "Binance REPUSDT",
      //    displaySymbol: "REP/USDT",
      //    symbol: "BINANCE:REPUSDT",
      // },
      // {
      //    description: "Binance LRCBUSD",
      //    displaySymbol: "LRC/BUSD",
      //    symbol: "BINANCE:LRCBUSD",
      // },
      // {
      //    description: "Binance LRCUSDT",
      //    displaySymbol: "LRC/USDT",
      //    symbol: "BINANCE:LRCUSDT",
      // },
      // {
      //    description: "Binance IQBNB",
      //    displaySymbol: "IQ/BNB",
      //    symbol: "BINANCE:IQBNB",
      // },
      // {
      //    description: "Binance IQBUSD",
      //    displaySymbol: "IQ/BUSD",
      //    symbol: "BINANCE:IQBUSD",
      // },
      // {
      //    description: "Binance PNTBTC",
      //    displaySymbol: "PNT/BTC",
      //    symbol: "BINANCE:PNTBTC",
      // },
      // {
      //    description: "Binance PNTUSDT",
      //    displaySymbol: "PNT/USDT",
      //    symbol: "BINANCE:PNTUSDT",
      // },
      // {
      //    description: "Binance BTCGBP",
      //    displaySymbol: "BTC/GBP",
      //    symbol: "BINANCE:BTCGBP",
      // },
      // {
      //    description: "Binance ETHGBP",
      //    displaySymbol: "ETH/GBP",
      //    symbol: "BINANCE:ETHGBP",
      // },
      // {
      //    description: "Binance XRPGBP",
      //    displaySymbol: "XRP/GBP",
      //    symbol: "BINANCE:XRPGBP",
      // },
      // {
      //    description: "Binance BNBGBP",
      //    displaySymbol: "BNB/GBP",
      //    symbol: "BINANCE:BNBGBP",
      // },
      // {
      //    description: "Binance GBPBUSD",
      //    displaySymbol: "GBP/BUSD",
      //    symbol: "BINANCE:GBPBUSD",
      // },
      // {
      //    description: "Binance DGBBNB",
      //    displaySymbol: "DGB/BNB",
      //    symbol: "BINANCE:DGBBNB",
      // },
      // {
      //    description: "Binance DGBBTC",
      //    displaySymbol: "DGB/BTC",
      //    symbol: "BINANCE:DGBBTC",
      // },
      // {
      //    description: "Binance DGBBUSD",
      //    displaySymbol: "DGB/BUSD",
      //    symbol: "BINANCE:DGBBUSD",
      // },
      // {
      //    description: "Binance BTCUAH",
      //    displaySymbol: "BTC/UAH",
      //    symbol: "BINANCE:BTCUAH",
      // },
      // {
      //    description: "Binance USDTUAH",
      //    displaySymbol: "USDT/UAH",
      //    symbol: "BINANCE:USDTUAH",
      // },
      // {
      //    description: "Binance COMPBTC",
      //    displaySymbol: "COMP/BTC",
      //    symbol: "BINANCE:COMPBTC",
      // },
      // {
      //    description: "Binance COMPBNB",
      //    displaySymbol: "COMP/BNB",
      //    symbol: "BINANCE:COMPBNB",
      // },
      // {
      //    description: "Binance COMPBUSD",
      //    displaySymbol: "COMP/BUSD",
      //    symbol: "BINANCE:COMPBUSD",
      // },
      // {
      //    description: "Binance COMPUSDT",
      //    displaySymbol: "COMP/USDT",
      //    symbol: "BINANCE:COMPUSDT",
      // },
      // {
      //    description: "Binance BTCBIDR",
      //    displaySymbol: "BTC/BIDR",
      //    symbol: "BINANCE:BTCBIDR",
      // },
      // {
      //    description: "Binance ETHBIDR",
      //    displaySymbol: "ETH/BIDR",
      //    symbol: "BINANCE:ETHBIDR",
      // },
      // {
      //    description: "Binance BNBBIDR",
      //    displaySymbol: "BNB/BIDR",
      //    symbol: "BINANCE:BNBBIDR",
      // },
      // {
      //    description: "Binance BUSDBIDR",
      //    displaySymbol: "BUSD/BIDR",
      //    symbol: "BINANCE:BUSDBIDR",
      // },
      // {
      //    description: "Binance USDTBIDR",
      //    displaySymbol: "USDT/BIDR",
      //    symbol: "BINANCE:USDTBIDR",
      // },
      // {
      //    description: "Binance BKRWUSDT",
      //    displaySymbol: "BKRW/USDT",
      //    symbol: "BINANCE:BKRWUSDT",
      // },
      // {
      //    description: "Binance BKRWBUSD",
      //    displaySymbol: "BKRW/BUSD",
      //    symbol: "BINANCE:BKRWBUSD",
      // },
      // {
      //    description: "Binance SCUSDT",
      //    displaySymbol: "SC/USDT",
      //    symbol: "BINANCE:SCUSDT",
      // },
      // {
      //    description: "Binance ZENUSDT",
      //    displaySymbol: "ZEN/USDT",
      //    symbol: "BINANCE:ZENUSDT",
      // },
      // {
      //    description: "Binance SXPBTC",
      //    displaySymbol: "SXP/BTC",
      //    symbol: "BINANCE:SXPBTC",
      // },
      // {
      //    description: "Binance SXPBNB",
      //    displaySymbol: "SXP/BNB",
      //    symbol: "BINANCE:SXPBNB",
      // },
      // {
      //    description: "Binance SXPBUSD",
      //    displaySymbol: "SXP/BUSD",
      //    symbol: "BINANCE:SXPBUSD",
      // },
      // {
      //    description: "Binance SNXBTC",
      //    displaySymbol: "SNX/BTC",
      //    symbol: "BINANCE:SNXBTC",
      // },
      // {
      //    description: "Binance SNXBNB",
      //    displaySymbol: "SNX/BNB",
      //    symbol: "BINANCE:SNXBNB",
      // },
      // {
      //    description: "Binance SNXBUSD",
      //    displaySymbol: "SNX/BUSD",
      //    symbol: "BINANCE:SNXBUSD",
      // },
      // {
      //    description: "Binance SNXUSDT",
      //    displaySymbol: "SNX/USDT",
      //    symbol: "BINANCE:SNXUSDT",
      // },
      // {
      //    description: "Binance ETHUPUSDT",
      //    displaySymbol: "ETHUP/USDT",
      //    symbol: "BINANCE:ETHUPUSDT",
      // },
      // {
      //    description: "Binance ETHDOWNUSDT",
      //    displaySymbol: "ETHDOWN/USDT",
      //    symbol: "BINANCE:ETHDOWNUSDT",
      // },
      // {
      //    description: "Binance ADAUPUSDT",
      //    displaySymbol: "ADAUP/USDT",
      //    symbol: "BINANCE:ADAUPUSDT",
      // },
      // {
      //    description: "Binance ADADOWNUSDT",
      //    displaySymbol: "ADADOWN/USDT",
      //    symbol: "BINANCE:ADADOWNUSDT",
      // },
      // {
      //    description: "Binance LINKUPUSDT",
      //    displaySymbol: "LINKUP/USDT",
      //    symbol: "BINANCE:LINKUPUSDT",
      // },
      // {
      //    description: "Binance LINKDOWNUSDT",
      //    displaySymbol: "LINKDOWN/USDT",
      //    symbol: "BINANCE:LINKDOWNUSDT",
      // },
      // {
      //    description: "Binance VTHOBNB",
      //    displaySymbol: "VTHO/BNB",
      //    symbol: "BINANCE:VTHOBNB",
      // },
      // {
      //    description: "Binance VTHOBUSD",
      //    displaySymbol: "VTHO/BUSD",
      //    symbol: "BINANCE:VTHOBUSD",
      // },
      // {
      //    description: "Binance VTHOUSDT",
      //    displaySymbol: "VTHO/USDT",
      //    symbol: "BINANCE:VTHOUSDT",
      // },
      // {
      //    description: "Binance DCRBUSD",
      //    displaySymbol: "DCR/BUSD",
      //    symbol: "BINANCE:DCRBUSD",
      // },
      // {
      //    description: "Binance DGBUSDT",
      //    displaySymbol: "DGB/USDT",
      //    symbol: "BINANCE:DGBUSDT",
      // },
      // {
      //    description: "Binance GBPUSDT",
      //    displaySymbol: "GBP/USDT",
      //    symbol: "BINANCE:GBPUSDT",
      // },
      // {
      //    description: "Binance STORJBUSD",
      //    displaySymbol: "STORJ/BUSD",
      //    symbol: "BINANCE:STORJBUSD",
      // },
      // {
      //    description: "Binance SXPUSDT",
      //    displaySymbol: "SXP/USDT",
      //    symbol: "BINANCE:SXPUSDT",
      // },
      // {
      //    description: "Binance IRISBNB",
      //    displaySymbol: "IRIS/BN",
      // },
   ],
   methods: {
      getSymbols: () =>
         config.symbols.map(({ symbol }) => ({
            type: "subscribe",
            symbol,
         })),
   },
};

export default config;
