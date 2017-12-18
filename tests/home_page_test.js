
Feature('open page');

Scenario('test page content', (I) => {
	I.amOnPage('/');
	I.see('About DuckDuckGo');
});
