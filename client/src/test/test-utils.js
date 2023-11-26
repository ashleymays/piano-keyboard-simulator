import { describe, expect, test } from 'jest';
import { render } from '@testing-library/react';
import GlobalContext from 'src/providers';

function CustomContext({ children }) {
  return <GlobalContext>{children}</GlobalContext>;
}

function customRender(ui, options) {
  render(ui, { wrapper: CustomContext, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
