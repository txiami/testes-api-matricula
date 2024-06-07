
describe('Consulta de matrícula inválida', () => {

    it('Deve retornar erro de matrícula inválida', () => {
        const invalidMatriculas = [1, 99, 'XPTO123', '999999999999']
        invalidMatriculas.forEach((matricula) => {
            cy.request({
                method: 'GET',
                url: `http://localhost:8080/v1/matriculas/${matricula}`,
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                },
                failOnStatusCode: false
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(400)
                expect(response.body).to.have.property('mensagem', 'A matrícula informada não parece ser válida!')
            })
        })
    })
})
