/// <reference types="cypress" />

describe('Todo App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173')
    })
  
    it('добавляем тудушку', () => {
      cy.get('input[placeholder="What needs to be done?"]')
        .type('Купить хлеб{enter}')
  
      cy.contains('Купить хлеб').should('exist')
    })
  
    it('делитим по двойному клику', () => {
      cy.get('input').type('Удалить{enter}')
      cy.contains('Удалить').dblclick()
      cy.contains('Удалить').should('not.exist')
    })
  
    it('отмеачаем как выполненный, чекаем другую вкладку, и потом удаляем двойным кликом', () => {
      const task = 'Чекаем вкладки'
  
  
      cy.get('input').type(`${task}{enter}`)
      cy.contains(task).should('exist')
  
  
      cy.contains(task).parent().find('input[type="checkbox"]').check({ force: true })
  

      cy.contains(/completed/i).click()
      cy.contains(task).should('exist')
  

      cy.contains(/all/i).click()
      cy.contains(task).should('exist')
  
  
      cy.contains(task).dblclick()
      cy.contains(task).should('not.exist')
    })
  })
  