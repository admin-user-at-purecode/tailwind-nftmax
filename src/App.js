// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import Sell from "./pages/Sell";


function App() {
  return (
      <Default>
          <>
          <Layout>
            <Sell />
          </Layout>
          </>
      </Default>
  );
}

export default App;
