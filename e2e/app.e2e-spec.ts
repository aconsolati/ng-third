import { NgThirdPage } from './app.po';

describe('ng-third App', function() {
  let page: NgThirdPage;

  beforeEach(() => {
    page = new NgThirdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
