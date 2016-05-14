import {renderComponent, expect} from './test_helper';
import App from '../../src/components/app';

describe ("Main app", () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it("should display the welcome text", () => {
      expect(component.find('.app')).to.exist;
  });
});
