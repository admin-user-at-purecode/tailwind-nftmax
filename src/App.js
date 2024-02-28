// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import MyCollection from "./pages/MyCollection";


function App() {
  return (
      <Default>
          <>
            <Layout>
              <MyCollection />
            </Layout>
          </>
      </Default>
  );
}

export default App;
