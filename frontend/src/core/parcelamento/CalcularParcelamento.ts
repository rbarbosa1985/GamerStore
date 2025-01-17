import { QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL } from "../constants";
import Parcelamento from "./Parcelamento"

export default class CalcularParcelamento {
    executar (valor: number, qtdeParcelas: number = QTDE_MAX_PARCELAS, taxaJuros: number = TAXA_JUROS_MENSAL): Parcelamento {
        if (qtdeParcelas < 2 || qtdeParcelas > QTDE_MAX_PARCELAS) {
            throw new Error(`Quantidade de parcelas deve ser entre 2 e ${QTDE_MAX_PARCELAS}`)
        }

        const totalComJuros = this.calcularJurosCompostos(valor, taxaJuros, qtdeParcelas)

        return {
            valorTotal: this.comDuasCasasDecimais(totalComJuros),
            valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdeParcelas),
            qtdeParcelas,
            taxaJuros
        }
    }

    private calcularJurosCompostos (valor: number, taxaJuros: number, qtdeParcelas: number): number {
        return valor * Math.pow(1 + taxaJuros, qtdeParcelas)
    }

    private comDuasCasasDecimais (valor: number): number {
        return Math.round(valor * 100) / 100
    }
}