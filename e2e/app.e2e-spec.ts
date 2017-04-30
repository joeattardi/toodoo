import { ToodooPage } from './app.po';

describe('toodoo App', () => {
  let page: ToodooPage;

  beforeEach(() => {
    page = new ToodooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
