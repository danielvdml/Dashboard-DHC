'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /profesor when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/profesor");
  });


  describe('profesor', function() {

    beforeEach(function() {
      browser.get('index.html#!/profesor');
    });


    it('should render profesor when user navigates to /profesor', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('cursos', function() {

    beforeEach(function() {
      browser.get('index.html#!/cursos');
    });


    it('should render cursos when user navigates to /cursos', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
