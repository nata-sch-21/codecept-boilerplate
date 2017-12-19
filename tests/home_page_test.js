
Feature('open page');

Scenario('test something', (I) => {
	I.amOnPage('/');
	I.see('About DuckDuckGo');
	I.fillField('q', 'john');
	I.click({id: 'search_button_homepage'}, 'form#search_form_homepage');
});
