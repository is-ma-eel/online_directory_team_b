import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "../theme/globalStyle";
import Header from "../components/Header";
import AddBusiness from "../components/AddBusiness";
import BusinessList from "../components/BusinessList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route component={BusinessList} path="/" exact={true} />
        <Route component={AddBusiness} path="/add" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
