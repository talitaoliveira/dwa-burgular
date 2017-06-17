import { DwaBurgularPage } from './app.po';

describe('dwa-burgular App', () => {
  let page: DwaBurgularPage;

  beforeEach(() => {
    page = new DwaBurgularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
