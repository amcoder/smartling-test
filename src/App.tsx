import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { intl } from './intl';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

function App() {
  return (
    <RawIntlProvider value={intl}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="edit-text"
              defaultMessage="Edit <code>{path}</code> and save to reload."
              values={{
                path: 'src/App.tsx',
                code: (chunks: ReactElement) => <code>{chunks}</code>
              }} />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="learn-react" defaultMessage="Learn React" />
          </a>
          <div>
            <FormattedMessage id="numbers" defaultMessage="There are {count, number} items out of {total, number} in the box."
              values={{
                count: 1024,
                total: 5923768
              }} />
          </div>
          <div>
            <FormattedMessage id="dates" defaultMessage="The event is on {date, date, medium} at {date, time, medium} in the office."
              values={{
                date: Date.now()
              }} />
          </div>
          <div>
            <FormattedMessage id="british" defaultMessage="There are {count, plural, =0 {no colors} one {1 color} other {{count, number} colors}} on the screen"
              values={{
                count: 16312
              }} />
          </div>
        </header>
      </div>
    </RawIntlProvider>
  );
}

export default App;
