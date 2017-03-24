import { CoverFinderPage } from './app.po';

describe('cover-finder App', () => {
  let page: CoverFinderPage;

  beforeEach(() => {
    page = new CoverFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
