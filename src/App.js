import logo from './logo.svg';
import { useState } from 'react';
import { Stack, Text, TextField, DefaultButton, Link, FontWeights } from '@fluentui/react';
import './App.css';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens = { childrenGap: 15 };

function App() {

  const [result, setResult] = useState()
  const [query, setQuery] = useState(`query  {\n   hello\n}`)

  function onClick() {
    fetch(`/api/graphql?query=${query}`)
      .then(response => response.text()).then(r => setResult(r))
  }

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c',
        },
      }}
      tokens={stackTokens}
    >
      <img
        className="App-logo"
        src={logo}
        alt="logo"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Azure Static Website with GraphQL API
      </Text>
      <Text variant="large">
        Example deployment of a Azure Static website built with React, that calls a GrpahQL API
      </Text>
      <Text variant="large" styles={boldStyle}>
        Try it
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <TextField
          label="Enter your GraphQL query"
          multiline={true}
          rows={5}
          onChange={(e, v) => setQuery(v)}
          // eslint-disable-next-line react/jsx-no-bind
          defaultValue={query}
        />
        <DefaultButton text="Call" onClick={onClick} allowDisabledFocus />
        <TextField
          label="Results"
          multiline={true}
          rows={5}
          disabled={true}
          value={result}
        />


      </Stack>

    </Stack>
  );
}

export default App;
