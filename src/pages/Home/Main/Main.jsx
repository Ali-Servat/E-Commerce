import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import Filterbar from "../../../components/Filterbar/Filterbar";
import ItemsList from "./ItemsList/ItemsList";
import { MainContainer } from "./styles";
import { SearchContextProvider } from "../../../Shared/context/search-context";
import { api } from "../../../Shared/utils/api";

const Main = () => {
  const [currentPagination, setCurrentPagination] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const firstFetch = async () => {
      const response = await fetch(api.getItems());
      const json = await response.json();
      setItems(json);
    };

    firstFetch();
  }, []);

  const pageSize = 8;

  return (
    <SearchContextProvider>
      <MainContainer>
        <Filterbar
          setItems={setItems}
          setCurrentPagination={setCurrentPagination}
        />
        <ItemsList
          items={items}
          currentPagination={currentPagination}
          pageSize={pageSize}
        />
        <Pagination
          currentPagination={currentPagination}
          setCurrentPagination={setCurrentPagination}
          pageSize={pageSize}
          allItemsCount={items ? items.length : 0}
        />
      </MainContainer>
    </SearchContextProvider>
  );
};

export default Main;
