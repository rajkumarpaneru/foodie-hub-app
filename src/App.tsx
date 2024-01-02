import { Show, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductsGrid from "./components/ProductsGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/getCategories";
import TypeSelector from "./components/TypeSelector";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [selectedType, setSelectedType] = useState<string | null>(null);

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <TypeSelector
          selectedType={selectedType}
          onSelectType={(type) => setSelectedType(type)}
        />
        <ProductsGrid
          selectedType={selectedType}
          selectedCategory={selectedCategory}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
