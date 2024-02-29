// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import UserProfile from "./pages/UserProfile";


function App() {
  return (
      <Default>
          <>
            <Layout>
              <UserProfile />
            </Layout>
          </>
      </Default>
  );
}

export default App;
