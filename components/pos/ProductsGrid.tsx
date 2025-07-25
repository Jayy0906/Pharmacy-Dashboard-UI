// components/pos/ProductsGrid.tsx
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  ageRestricted: boolean;
}

interface ProductsGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductsGrid({
  products,
  onAddToCart,
}: ProductsGridProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
        Available Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAdd={() => onAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}
