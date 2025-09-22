import dados from "../models/dados";
const { imoveis } = dados;

const getAllImoveis = (req, res) => {
    let resultado = imoveis;
    
    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
};

const getImoveisByld = (req, res) => {
    const id = parseInt(req.params.id);
    const imovel = imoveis.find(m => m.id === id);

    if (!imovel) {
        res.status(404).json({
            success: false,
            message: `Imovél ${id} não encontrado`
        });
    };

    res.status(200).json({
        total: imovel.length,
        data: imovel
    });
};

const createImovel = (req, res) => {
    const { tipo, endereco, area, quartos, preco, disponivel, proprietario } = req.body;

    const tiposDeImoveis = ["Apartamento", "Casa de Condomínio", "Terreno", "Kitnet", "Chácara", "Sala Comercial", "Loft", "Casa de Vila", "Apartamento Duplex", "Galpão Industrial", "Apartamento na Praia", "Casa Térrea", "Studio", "Fazenda", "Apartamento Garden", "Sobrado", "Terreno Comercial", "Apartamento 1 por andar", "Casa de Campo", "Flat/Aparthotel", "Prédio Comercial", "Ponto Comercial (Loja)", "Cobertura Penthouse", "Sítio", "Apartamento Compacto"];

    if (!tipo) {
        return res.status(400).json({
            success: false,
            message: "O campo 'tipo' é obrigatório"
        });
    }

    if (!endereco) {
        return res.status(400).json({
            success: false,
            message: "O campo 'endereco' é obrigatório"
        });
    }

    if (!area) {
        return res.status(400).json({
            success: false,
            message: "O campo 'area' é obrigatório"
        });
    }

    if (!quartos) {
        return res.status(400).json({
            success: false,
            message: "O campo 'quartos' é obrigatório"
        });
    }

    if (!preco) {
        return res.status(400).json({
            success: false,
            message: "O campo 'preco' é obrigatório"
        });
    }

    if (!disponivel) {
        return res.status(400).json({
            success: false,
            message: "O campo 'disponivel' é obrigatório"
        });
    }

    if (!proprietario) {
        return res.status(400).json({
            success: false,
            message: "O campo 'proprietario' é obrigatório"
        });
    }

    if (area > 0) {
        return res.status(400).json({
            success: false,
            message: "Área deve ser um número maior que 0 metros quadrados"
        })
    } 

    if (preco > 0) {
        return res.status(400).json({
            success: false,
            message: "Preço deve ser um número maior que 0"
        })
    }

    if (!tiposDeImoveis.includes(tipo)) {
        return res.status(400).json({
            success: false,
            message: `O tipo "${tipo}" não é válido. Tipos permitidos: ${tiposDeImoveis.join(", ")}.`
        });
    };


    const novoImovel = {
        id: imoveis.length + 1,
        tipo: tipo,
        endereco,
        area,
        quartos,
        preco,
        disponivel,
        proprietario
    };

    imoveis.push(novoImovel);

    res.status(201).json({
        success: true,
        message: "Novo imóvel Cadastrada com sucesso",
        data: novoImovel
    });

};

const deleteImovel = (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    };

    const idParaApagar = parseInt(id);

    const imovelParaRemover = imoveis.find(m => m.id === idParaApagar);

    if (!imovelParaRemover) {
        return res.status(404).json({
            success: false,
            message: "Imovel com esse id não existe"
        });
    };

    const imovelFiltrado = imoveis.filter(m => m.id !== id);

    imoveis.splice(0, imoveis.length, ...imovelFiltrado);

    return res.status(200).json({
        success: true,
        message: "O imovel foi removido com sucesso!"
    });
};

export { getAllImoveis, getImoveisByld, createImovel, deleteImovel };