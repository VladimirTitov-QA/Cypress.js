describe('Проверка формы логина и пароля на сайте Staya', function () {
   it('Позитивный кейс: верный логин и пароль', function () {
        cy.visit('https://staya.dog/');

        cy.get('.header-bottom__right--link').click();

        cy.get('.auth-form > form > [type="email"]').type('ВСТАВЬ ВЕРНЫЙ ЛОГИН');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('ВСТАВЬ ВЕРНЫЙ ПАРОЛЬ');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();

        cy.contains('Мои заказы');

    })  

    it('Негативный кейс: верный логин, неверный пароль', function () {
        cy.visit('https://staya.dog/');
        
        cy.get('.header-bottom__right--link').click();
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
        cy.get('.header-bottom__right--link').click();

        cy.get('.auth-form > form > [type="email"]').type('ВСТАВЬ ВЕРНЫЙ ЛОГИН');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('ВСТАВЬ НЕВЕРНЫЙ ПАРОЛЬ');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();

        cy.contains('Невозможно войти с предоставленными учетными данными.');



    })
})

