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

export { getAllImoveis, getImoveisByld };