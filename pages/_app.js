import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import '../styles/globals.css';

 function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp);
