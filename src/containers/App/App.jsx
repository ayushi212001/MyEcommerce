/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import 'bootstrap/dist/css/bootstrap.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../../scss/app.scss';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';
import { config as i18nextConfig } from '../../translations';





i18n.init(i18nextConfig);

const ThemeComponent = ({ children, themeName }) => {
  const theme = createMuiTheme({
    palette: {
      type: themeName === 'theme-dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.shape().isRequired,
  themeName: PropTypes.string.isRequired,
};

const ConnectedThemeComponent = connect(state => ({ themeName: state.theme.className }))(ThemeComponent);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 500);
    });
  }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ScrollToTop>
        {!isLoaded && (
          <div className={`load${isLoading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <svg className="load__icon">
                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
              </svg>
            </div>
          </div>
        )}
        <ConnectedThemeComponent>
        <div>
          <Router />
        </div>
        </ConnectedThemeComponent>
      </ScrollToTop>
      </I18nextProvider>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
