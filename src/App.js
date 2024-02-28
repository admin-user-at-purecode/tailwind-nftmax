// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import MyWallet from "./pages/MyWallet";


function App() {
  return (
      <Default>
          <>
          <Layout>
            <MyWallet />
          </Layout>
          </>
      </Default>
  );
}

export default App;
