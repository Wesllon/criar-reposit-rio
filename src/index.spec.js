import { describe, expect, it } from "vitest";

describe("Função de soma",() => {
    it("deveria retornar a soma dos dois números" , () => {
        const resultado = soma(2,2)
        
        expect(resultado).toEqual(4)
    })
})
describe("Função de subtração",() => {
    it("deveria retornar a soma dos dois números" , () => {
        const resultado = soma(2,2)
        expect(resultado).toEqual(0)
    })
})
    