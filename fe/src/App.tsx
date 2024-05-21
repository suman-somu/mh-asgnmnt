// src/App.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Layout from "./components/Layout";

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <UserList onView={
            (id: string) => {
              console.log(id);
            }
          } />
        </Layout>
      ),
    },
    {
      path: "/form",
      element: (
        <Layout>
          <UserForm onSave={
            () => {
              console.log('saved');
            }} />
        </Layout>
      ),
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
