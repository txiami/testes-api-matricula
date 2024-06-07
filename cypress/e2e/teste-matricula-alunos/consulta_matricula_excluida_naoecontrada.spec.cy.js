
describe('Consulta de matrícula excluída ou nao encontrada', () => {
    it('Deve retornar erro de matrícula excluída', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/4653499',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('mensagem', 'A matrícula informada foi excluída de nossa base de dados!')
        })
    })

    it('Deve retornar erro de matrícula não encontrada', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/1234567',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('mensagem', 'A matrícula informada não foi localizada em nossa base de dados!')
        })
    })

})
