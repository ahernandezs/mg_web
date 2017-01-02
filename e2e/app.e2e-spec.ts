import { MetricgraphicV1Page } from './app.po';

describe('metricgraphic-v1 App', function() {
  let page: MetricgraphicV1Page;

  beforeEach(() => {
    page = new MetricgraphicV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
