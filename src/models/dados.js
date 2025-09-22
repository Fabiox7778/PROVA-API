const imoveis = [
    {
      id: 1,
      tipo: 'Apartamento',
      endereco: 'Rua das Gaivotas, 123, Apto 71, Moema, São Paulo, SP',
      area: 85,
      quartos: 2,
      preco: 950000.00,
      disponivel: true,
      proprietario: 'Carlos Drummond'
    },
    {
      id: 2,
      tipo: 'Casa de Condomínio',
      endereco: 'Alameda dos Pássaros, 45, Condomínio Green Valley, Valinhos, SP',
      area: 220,
      quartos: 3,
      preco: 1300000.00,
      disponivel: true,
      proprietario: 'Ana Lúcia Machado'
    },
    {
      id: 3,
      tipo: 'Terreno',
      endereco: 'Lote 22, Quadra F, Loteamento Sol Nascente, Itatiba, SP',
      area: 350,
      quartos: 0,
      preco: 280000.00,
      disponivel: true,
      proprietario: 'Fernanda Montenegro'
    },
    {
      id: 4,
      tipo: 'Kitnet',
      endereco: 'Avenida Angélica, 990, Apto 12, Consolação, São Paulo, SP',
      area: 30,
      quartos: 1,
      preco: 310000.00,
      disponivel: false,
      proprietario: 'João Guimarães'
    },
    {
      id: 5,
      tipo: 'Chácara',
      endereco: 'Estrada da Boa Vista, S/N, Km 5, Joaquim Egídio, Campinas, SP',
      area: 5000,
      quartos: 4,
      preco: 1800000.00,
      disponivel: true,
      proprietario: 'Lygia Fagundes'
    },
    {
      id: 6,
      tipo: 'Sala Comercial',
      endereco: 'Avenida Paulista, 2000, Sala 1504, Bela Vista, São Paulo, SP',
      area: 40,
      quartos: 0,
      preco: 550000.00,
      disponivel: true,
      proprietario: 'Ariano Suassuna'
    },
    {
      id: 7,
      tipo: 'Loft',
      endereco: 'Rua Augusta, 1500, Apto 22, Cerqueira César, São Paulo, SP',
      area: 65,
      quartos: 1,
      preco: 780000.00,
      disponivel: true,
      proprietario: 'Clarice Lispector'
    },
    {
      id: 8,
      tipo: 'Casa de Vila',
      endereco: 'Vila Madalena, Travessa das Cores, 8, Pinheiros, São Paulo, SP',
      area: 90,
      quartos: 2,
      preco: 890000.00,
      disponivel: false,
      proprietario: 'Machado de Assis'
    },
    {
      id: 9,
      tipo: 'Apartamento Duplex',
      endereco: 'Rua Oscar Freire, 555, Cobertura 21, Jardins, São Paulo, SP',
      area: 180,
      quartos: 3,
      preco: 3200000.00,
      disponivel: true,
      proprietario: 'Cecília Meireles'
    },
    {
      id: 10,
      tipo: 'Galpão Industrial',
      endereco: 'Rodovia Anhanguera, Km 75, Distrito Industrial, Jundiaí, SP',
      area: 1200,
      quartos: 0,
      preco: 2500000.00,
      disponivel: true,
      proprietario: 'Érico Veríssimo'
    },
    {
      id: 11,
      tipo: 'Apartamento na Praia',
      endereco: 'Avenida Atlântica, 300, Apto 501, Guarujá, SP',
      area: 110,
      quartos: 3,
      preco: 1100000.00,
      disponivel: true,
      proprietario: 'Jorge Amado'
    },
    {
      id: 12,
      tipo: 'Casa Térrea',
      endereco: 'Rua das Orquídeas, 78, Nova Campinas, Campinas, SP',
      area: 300,
      quartos: 3,
      preco: 1500000.00,
      disponivel: true,
      proprietario: 'Rachel de Queiroz'
    },
    {
      id: 13,
      tipo: 'Studio',
      endereco: 'Rua da Consolação, 2500, Apto 88, Jardim Paulista, São Paulo, SP',
      area: 38,
      quartos: 1,
      preco: 480000.00,
      disponivel: true,
      proprietario: 'Graciliano Ramos'
    },
    {
      id: 14,
      tipo: 'Fazenda',
      endereco: 'Zona Rural, S/N, Acesso pela SP-340, Mogi Mirim, SP',
      area: 250000, // 25 hectares
      quartos: 5,
      preco: 5800000.00,
      disponivel: true,
      proprietario: 'Monteiro Lobato'
    },
    {
      id: 15,
      tipo: 'Apartamento Garden',
      endereco: 'Rua das Amoreiras, 300, Apto 02 (Térreo), Swiss Park, Campinas, SP',
      area: 130, // 80 de apto + 50 de quintal
      quartos: 2,
      preco: 820000.00,
      disponivel: true,
      proprietario: 'Vinicius de Moraes'
    },
    {
      id: 16,
      tipo: 'Sobrado',
      endereco: 'Rua Harmonia, 560, Vila Madalena, São Paulo, SP',
      area: 150,
      quartos: 3,
      preco: 1600000.00,
      disponivel: false,
      proprietario: 'Adélia Prado'
    },
    {
      id: 17,
      tipo: 'Terreno Comercial',
      endereco: 'Avenida John Boyd Dunlop, 1500, Jd. Ipaussurama, Campinas, SP',
      area: 500,
      quartos: 0,
      preco: 950000.00,
      disponivel: true,
      proprietario: 'Hilda Hilst'
    },
    {
      id: 18,
      tipo: 'Apartamento 1 por andar',
      endereco: 'Rua Haddock Lobo, 1000, Apto 1001, Jardins, São Paulo, SP',
      area: 280,
      quartos: 4,
      preco: 4500000.00,
      disponivel: true,
      proprietario: 'Mário de Andrade'
    },
    {
      id: 19,
      tipo: 'Casa de Campo',
      endereco: 'Alameda das Lavandas, 90, Condomínio Serra Azul, Itupeva, SP',
      area: 450,
      quartos: 4,
      preco: 2200000.00,
      disponivel: true,
      proprietario: 'Oswald de Andrade'
    },
    {
      id: 20,
      tipo: 'Flat/Aparthotel',
      endereco: 'Rua Frei Caneca, 1407, Unidade 1210, Cerqueira César, São Paulo, SP',
      area: 45,
      quartos: 1,
      preco: 600000.00,
      disponivel: false,
      proprietario: 'Cora Coralina'
    },
    {
      id: 21,
      tipo: 'Prédio Comercial',
      endereco: 'Avenida Brigadeiro Faria Lima, 4509, Itaim Bibi, São Paulo, SP',
      area: 800,
      quartos: 0,
      preco: 15000000.00,
      disponivel: true,
      proprietario: 'Zélia Gattai'
    },
    {
      id: 22,
      tipo: 'Ponto Comercial (Loja)',
      endereco: 'Rua Treze de Maio, 550, Centro, Campinas, SP',
      area: 120,
      quartos: 0,
      preco: 1250000.00,
      disponivel: true,
      proprietario: 'Manuel Bandeira'
    },
    {
      id: 23,
      tipo: 'Cobertura Penthouse',
      endereco: 'Avenida Vieira Souto, 200, Cobertura, Ipanema, Rio de Janeiro, RJ',
      area: 400,
      quartos: 4,
      preco: 25000000.00,
      disponivel: true,
      proprietario: 'Tom Jobim'
    },
    {
      id: 24,
      tipo: 'Sítio',
      endereco: 'Estrada Municipal de Sousas, Km 10, Sousas, Campinas, SP',
      area: 20000, // 2 hectares
      quartos: 3,
      preco: 2100000.00,
      disponivel: true,
      proprietario: 'Guimarães Rosa'
    },
    {
      id: 25,
      tipo: 'Apartamento Compacto',
      endereco: 'Rua Frei Mont\'Alverne, 300, Apto 34, Jd. Chapadão, Campinas, SP',
      area: 55,
      quartos: 2,
      preco: 420000.00,
      disponivel: true,
      proprietario: 'Ferreira Gullar'
    }
  ];
  
export default { imoveis };