import { Provider } from "react-redux";
import Wrapper from "../components/Wrapper/Wrapper";
import { wrapper, store } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
