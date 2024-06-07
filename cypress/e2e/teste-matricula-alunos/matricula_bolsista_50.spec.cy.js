
describe('Consulta de matrícula de bolsista 50%', () => {
    it('Deve retornar os dados da matrícula de bolsista 50% **E** não deve informar o STATUS: BOLSISTA_50 ', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/1113499',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', '1113499') 
            expect(response.body).to.have.property('courseName').and.to.be.a('string') 
            expect(response.body).to.have.property('tuition')
            expect(response.body.tuition).to.have.property('amount').and.to.be.a('number') 
            expect(response.body.tuition).to.have.property('formattedAmount').and.to.be.a('string') 
            expect(response.body.tuition).to.have.property('dueDate').and.to.be.a('string') 
            expect(response.body.student).to.have.property('firstName').and.to.be.a('string') 
            expect(response.body.student).to.have.property('lastName').and.to.be.a('string') 
            expect(response.body.student).to.have.property('birthDate').and.to.be.a('string') 
            expect(response.body.student).to.have.property('cpf').and.to.be.a('string')
            expect(response.body.tuition).to.not.have.property('status','BOLSISTA_50').and.to.be.a('string')
        })
    })
})
