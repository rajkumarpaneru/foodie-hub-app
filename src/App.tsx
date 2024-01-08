import { Show, Grid, GridItem, HStack, Flex, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductsGrid from "./components/ProductsGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/getCategories";
import TypeSelector from "./components/TypeSelector";
import SortSelector from "./components/SortSelector";

export interface ProductQuery {
  category: Category | null;
  type: string | null;
  sortOrder: string | null;
  searchText: string;
}

const App = () => {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  // const [selectedCategory, setSelectedCategory] = useState<Category | null>(
  //   null
  // );

  // const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <TypeSelector
              selectedType={productQuery.type}
              onSelectType={(type) =>
                setProductQuery({ ...productQuery, type })
              }
            />
          </Box>
          <SortSelector
            sortOrder={productQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setProductQuery({ ...productQuery, sortOrder })
            }
          />
        </Flex>
        <ProductsGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
