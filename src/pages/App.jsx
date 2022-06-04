import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Detail from "./Detail";
import NewPost from "./NewPost";
import theme from "../theme/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={`/detail`} element={<Detail />} />
            <Route path={`/newPost`} element={<NewPost />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
