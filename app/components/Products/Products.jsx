import { products } from "@/app/data/data";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Shared/Container";

const Products = () => {
  return (
   <Container>
     <section className=" py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 my-4 lg:my-10">
        {products &&
          products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </section>
   </Container>
  );
};

export default Products;
