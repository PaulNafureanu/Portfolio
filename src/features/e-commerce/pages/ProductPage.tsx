import { ArrowLeft, Check, PackageCheck, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCart } from "../store/useCart";

export default function ProductPage() {
  const { slug } = useParams();
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((currentProduct) => currentProduct.slug === slug);

  if (!product) {
    return (
      <section className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-[-0.05em]">Product not found</h1>

          <p className="mt-4 text-[#6d766f]">The requested product does not exist.</p>

          <Link
            to="/ecommerce/products"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#172019] px-5 font-bold text-white"
          >
            Return to shop
          </Link>
        </div>
      </section>
    );
  }

  const productId = product.id;
  const isAvailable = product.stock > 0;

  const relatedProducts = products
    .filter((currentProduct) => currentProduct.id !== product.id && currentProduct.category === product.category)
    .slice(0, 3);

  function handleAddToCart() {
    if (!isAvailable) {
      return;
    }

    addItem(productId, quantity);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1600);
  }

  return (
    <div className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <Link
          to="/ecommerce/products"
          className="mb-7 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#647068] transition hover:text-[#172019] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172019]"
        >
          <ArrowLeft size={17} />
          Back to products
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] lg:gap-16">
          <div className="overflow-hidden rounded-[2rem] border border-[#dfe3dd] bg-[#e7ebe5] shadow-sm">
            <img src={product.imageUrl} alt={product.name} className="aspect-square h-full w-full object-cover" />
          </div>

          <div className="self-center lg:py-6">
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#738077] uppercase">{product.category}</p>

            <h1 className="text-4xl leading-[0.98] font-extrabold tracking-[-0.06em] text-[#172019] sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-bold">€{product.price.toFixed(2)}</p>

            <p className="mt-6 text-base leading-8 text-[#626b64]">{product.description}</p>

            <div
              className={[
                "mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold",
                isAvailable ? "bg-[#e3f1e6] text-[#336244]" : "bg-[#f6e6e5] text-[#8a3d38]",
              ].join(" ")}
            >
              <span className="size-2 rounded-full bg-current" />

              {isAvailable ? `${product.stock} units available` : "Currently out of stock"}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="grid gap-2 sm:w-28">
                <span className="text-xs font-bold text-[#5f6961]">Quantity</span>

                <input
                  type="number"
                  min={1}
                  max={product.stock}
                  value={quantity}
                  disabled={!isAvailable}
                  onChange={(event) => {
                    const nextQuantity = Number(event.target.value);

                    setQuantity(Math.min(Math.max(nextQuantity || 1, 1), Math.max(product.stock, 1)));
                  }}
                  className="min-h-12 rounded-xl border border-[#d6dbd4] bg-white px-3 text-[#172019] outline-none focus:border-[#66746a] focus:ring-4 focus:ring-[#66746a]/10"
                />
              </label>

              <button
                data-store-button="dark"
                type="button"
                disabled={!isAvailable}
                onClick={handleAddToCart}
                style={{
                  color: "#ffffff",
                  WebkitTextFillColor: "#ffffff",
                }}
                className="mt-auto inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#172019] px-6 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#29352d] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {added ? <Check size={19} /> : <ShoppingBag size={19} />}

                <span data-store-button-label>
                  {added ? "Added to cart" : isAvailable ? "Add to cart" : "Out of stock"}
                </span>
              </button>
            </div>

            <div className="mt-9 border-t border-[#d9ded8] pt-7">
              <h2 className="text-lg font-extrabold">Product details</h2>

              <ul className="mt-5 grid gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#59645c]">
                    <Check className="mt-0.5 shrink-0 text-[#467154]" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <article className="rounded-2xl border border-[#dfe3dd] bg-white p-4">
                <Truck size={20} className="mb-3 text-[#55645a]" />

                <strong className="block text-sm">Fast delivery</strong>

                <span className="mt-1 block text-xs text-[#768078]">2–4 business days</span>
              </article>

              <article className="rounded-2xl border border-[#dfe3dd] bg-white p-4">
                <ShieldCheck size={20} className="mb-3 text-[#55645a]" />

                <strong className="block text-sm">Secure purchase</strong>

                <span className="mt-1 block text-xs text-[#768078]">Protected checkout</span>
              </article>

              <article className="rounded-2xl border border-[#dfe3dd] bg-white p-4">
                <PackageCheck size={20} className="mb-3 text-[#55645a]" />

                <strong className="block text-sm">Easy returns</strong>

                <span className="mt-1 block text-xs text-[#768078]">Within 14 days</span>
              </article>
            </div>

            <p className="mt-7 text-xs font-semibold text-[#89918b]">SKU: {product.sku}</p>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto mt-12 w-full max-w-7xl border-t border-[#dce1da] px-4 pt-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-[-0.045em]">Related products</h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
