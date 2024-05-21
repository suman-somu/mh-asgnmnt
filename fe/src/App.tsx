import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserList onView={
        (id: string) => {
          console.log(id);
        }
      } />,
    },
    {
      path: "/form",
      element: <UserForm onSave={
        () => {
          console.log('saved');
        }} />
          ,
    }

  ]);



  return (
    <RouterProvider router={router} />
  );
};

export default App;
