// / <reference types="Cypress" />

describe('FirstRunWizard Test language Auto-Install', () => {
    beforeEach(() => {
        // Clean previous state and prepare Administration
        cy.loginViaApi()
            .then(() => {
                cy.setLocaleToEnGb();
            })
            .then(() => {
                cy.openInitialPage(Cypress.env('admin'));
                cy.get('.sw-skeleton').should('not.exist');
                cy.get('.sw-loader').should('not.exist');
            });
    });

    it('@frw: Should fail to install Lingala', { tags: ['quarantined', 'pa-merchant-services'] }, () => {
        AddLanguageToLanguageTable('No Plugin Available Language', 'ln-CD', 'Lingala, Democratic Republic of the Congo');
        cy.visit(`${Cypress.env('admin')}#/sw/first/run/wizard/index`).then(() => {
            cy.get('.sw-notifications__notification--0 > .sw-alert__body').should('be.visible').then(() => {
                runTroughFirstRunWizard();
            });
            cy.get('.sw-context-button > .sw-icon > svg').click().get('.sw-notification-center-item__title')
                .contains('error');
        });
    });
});

/**
 * Adds a new language entry and checks if the creation was successful, fails if the language already existed
 * @param name
 * @param iso
 * @param contains
 */
function AddLanguageToLanguageTable(name, iso, contains) {
    cy.visit(`${Cypress.env('admin')}#/sw/settings/language/create`).then(() => {
        cy.get('input[name=sw-field--language-name]').type(name);
        cy.get('#iso-codes > .sw-block-field__block > .sw-select__selection > .sw-entity-single-select__selection > .sw-entity-single-select__selection-text')
            .type(iso).then(() => {
                cy.get('.sw-select-result-list__content').should('be.visible').contains(iso).click();
            });

        cy.get('#locales > .sw-block-field__block > .sw-select__selection > .sw-entity-single-select__selection > .sw-entity-single-select__selection-text')
            .type(iso).then(() => {
                cy.contains(contains).click();
            });
    }).then(() => {
        cy.get('.sw-button-process').click().then(() => {
            cy.visit(`${Cypress.env('admin')}#/sw/settings/language/index?`);
            cy.contains(contains);
        });
    });
}

function runTroughFirstRunWizard() {
    cy.get('.footer-right > .sw-button').click().then(() => {
        cy.get('.footer-right > .sw-button--primary').click().then(() => {
            cy.get('.footer-right > :nth-child(1)').click().then(() => {
                cy.get('.footer-right > :nth-child(1)').click().then(() => {
                    cy.get('.footer-right > .sw-button').click().then(() => {
                        cy.get('.footer-right > .sw-button').click().then(() => {
                            cy.get('.footer-right > :nth-child(1)').click().then(() => {
                                cy.get('.footer-right > :nth-child(1)').click().then(() => {
                                    cy.get('.footer-right > .sw-button').click().then(() => {

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
