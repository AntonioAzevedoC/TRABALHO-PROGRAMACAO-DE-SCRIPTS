// I'm a file for the Products Page component
import Item from "./itens.js";

interface ProductsPageInterface {
  componentsData: object[];
}

const ProductsPage = function ({ componentsData }: ProductsPageInterface) {
  return (
    <>
      <main className="__main-body-products">
        {/* Looping over components and creating Itens */}
        {componentsData.map((item) => {
          return (
            <Item
              key={item[0]}
              nome={item[1]}
              preco={item[2]}
              estoque={item[3]}
              url={item[4]}
            />
          );
        })}
      </main>
    </>
  );
};

export default ProductsPage;
