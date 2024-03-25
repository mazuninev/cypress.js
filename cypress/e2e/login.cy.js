describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        // Найти поле логин и написать в него верный логин
        cy.get('#mail').type('german@dolnikov.ru');
        // Найти поле пароль и написать в него верный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Найти кнопку "Войти" и нажать на нее
        cy.get('#loginButton').click();
        // Проверить, что на странице есть текст = "Авторизация прошла успешно"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    it('Проверка логики востановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        // Найти кнопку "Забыли пароль" и нажать на нее
        cy.get('#forgotEmailButton').click();
        // Найти поле логин и написать в него логин
        cy.get('#mailForgot').type('german@olnikov.ru');
        // Найти кнопку "Отправить код" и нажать на нее
        cy.get('#restoreEmailButton').click();
        // Проверить, что на странице есть текст = "Успешно отправили пароль на e-mail"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        })
    it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        // Найти поле логин и написать в него верный логин
        cy.get('#mail').type('german@dolnikov.ru');
        // Найти поле пароль и написать в него не верный пароль
        cy.get('#pass').type('Loveqastudio1');
        // Найти кнопку "Войти" и нажать на нее
        cy.get('#loginButton').click();
        // Проверить, что на странице есть текст = "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        // Найти поле логин и написать в него не верный логин
        cy.get('#mail').type('erman@dolnikov.ru');
        // Найти поле пароль и написать в него верный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Найти кнопку "Войти" и нажать на нее
        cy.get('#loginButton').click();
        // Проверить, что на странице есть текст = "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    it('Правильный логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        // Найти поле логин и написать в него не верный логин
        cy.get('#mail').type('germandolnikov.ru');
        // Найти поле пароль и написать в него верный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Найти кнопку "Войти" и нажать на нее
        cy.get('#loginButton').click();
        // Проверить, что на странице есть текст = "Нужно исправить проблему валидации"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        // Найти поле логин и написать в него верный логин
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        // Найти поле пароль и написать в него верный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Найти кнопку "Войти" и нажать на нее
        cy.get('#loginButton').click();
        // Проверить, что на странице есть текст = "Авторизация прошла успешно"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    
})

describe('Покупка аватара', function () {                               
   it('e2e тест на покупку нового аватара для тренера', function () {   
        cy.visit('https://pokemonbattle.me/'); 
        // Найти поле логин и написать в него верный логин                         
        cy.get('input[type="email"]').type('USER_LOGIN'); 
        // Найти поле пароль и написать в него верный пароль     
        cy.get('input[type="password"]').type('USER_PASSWORD'); 
        // Найти кнопку "Войти" и нажать на нее 
        cy.get('button[type="submit"]').click(); 
        // Найти кнопку "Магазин" и нажать на нее                       
        cy.get('.header__btns > [href="/shop"]').click();   
        // Найти первого аватара и нажать на кнопку "Купить"             
        cy.get('.available > button').first().click();    
        // Найти поле Номер карты и написать в него номер             
        cy.get('.credit').type('4620869113632996');
        // Найти поле Код карты и написать в него код 
        cy.get('.k_input_ccv').type('125'); 
        // Найти поле Срок карты и написать в него срок дейсвия                           
        cy.get('.k_input_date').type('1225'); 
        // Найти поле Имя карты и написать в него Имя                           
        cy.get('.k_input_name').type('NAME'); 
        // Найти кнопку "Оплатить" и нажать на нее                          
        cy.get('.pay-btn').click();     
        // Найти поле Код из пуша или СМС карты и написать в него код                                  
        cy.get('#cardnumber').type('56456');   
        // Найти кнопку "Отправить" и нажать на нее  
        cy.get('.payment__submit-button').click(); 
        // Проверить, что на странице есть текст = "Покупка прошла успешно"                    
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });
});
