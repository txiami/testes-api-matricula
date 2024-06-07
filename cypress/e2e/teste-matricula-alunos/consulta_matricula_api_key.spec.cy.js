
describe('Consulta de matrícula com X-API-KEY ausente ou inválida', () => {
    it('Deve retornar erro de API Key ausente', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/4653421',
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('mensagem', 'A API Key informada é inválida!')
        })
    })

    it('Deve retornar erro de API Key inválida', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/4653421',
            headers: {
                'X-API-KEY': 'chave-invalida'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('mensagem', 'A API Key informada é inválida!')
        })
    })
})
