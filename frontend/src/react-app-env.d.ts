interface Lembrete {
    id: number;
    titulo: string;
    data: string;
    expirado: boolean;
  }

  interface LembreteAgrupado {
    dataAgrupamento: string;
    listaLembretes: [Lembrete],
  }
