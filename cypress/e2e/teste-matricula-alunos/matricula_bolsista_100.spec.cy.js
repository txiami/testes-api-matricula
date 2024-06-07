
describe('Consulta de matrícula de bolsista 100%', () => {
    it('Deve retornar os dados da matrícula de bolsista 100% **E** não deve ser retornado o valor da mensalidade **E** não deve ser retornada a data de vencimento da mensalidade', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/7890123',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', '7890123') 
            expect(response.body).to.have.property('courseName').and.to.be.a('string') 
            expect(response.body).to.have.property('tuition')
            expect(response.body.tuition).to.have.property('status','BOLSISTA_100').and.to.be.a('string')
            expect(response.body.student).to.have.property('firstName').and.to.be.a('string') 
            expect(response.body.student).to.have.property('lastName').and.to.be.a('string') 
            expect(response.body.student).to.have.property('birthDate').and.to.be.a('string') 
            expect(response.body.student).to.have.property('cpf').and.to.be.a('string')
            
            expect(response.body.tuition).to.have.property('amount',0).and.to.be.a('number') 
            expect(response.body.tuition).to.have.property('formattedAmount',"R$ 0.00").and.to.be.a('string') 
            expect(response.body.tuition).to.have.property('dueDate',null)
        })
    })
})
