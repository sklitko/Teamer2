import { TeamerPage } from './app.po';

describe('teamer App', () => {
  let page: TeamerPage;

  beforeEach(() => {
    page = new TeamerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
