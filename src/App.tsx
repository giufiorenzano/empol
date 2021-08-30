import React, { Fragment, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavbarEmpol from './components/NavbarEmpol/NavbarEmpol';
import { Routes } from './routes';

function App() {
  return (
    <>
      <NavbarEmpol />
      <Suspense fallback={<div>Carregando...</div>}>
        <Switch>
          {Routes.map((item) => (
            <Route
              key={`${item.component}-key`}
              path={item.path}
              component={item.component}
              exact
            />
          ))}
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>

    </>
  );
}

export default App;
