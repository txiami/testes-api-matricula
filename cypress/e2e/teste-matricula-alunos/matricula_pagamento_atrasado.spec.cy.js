
describe('Consulta de matrícula com pagamento atrasado', () => {
    it('Deve retornar erro de pagamento em atraso', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/5566778',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(409)
            expect(response.body).to.have.property('mensagem', 'A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!')
        })
    })
})
