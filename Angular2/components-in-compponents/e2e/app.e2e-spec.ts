import { ComponentsInCompponentsPage } from './app.po';

describe('components-in-compponents App', () => {
  let page: ComponentsInCompponentsPage;

  beforeEach(() => {
    page = new ComponentsInCompponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
