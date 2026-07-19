import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { products } from "../data/products";
import { useCart } from "../store/useCart";

export default function CartPage() {
  const { items, setQuantity, removeItem, clearCart } = useCart();

  const cartProducts = items.flatMap((item) => {
    const product = products.find((currentProduct) => currentProduct.id === item.productId);

    return product
      ? [
          {
            product,
            quantity: item.quantity,
          },
        ]
      : [];
  });

  const subtotal = cartProducts.reduce((total, item) => total + item.product.price * item.quantity, 0);

  if (cartProducts.length === 0) {
    return (
      <section className="mx-auto grid min-h-[72vh] w-full max-w-7xl place-items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-md">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#e4e9e2] text-[#47564b]">
            <ShoppingBag size={28} />
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.05em]">Your cart is empty</h1>

          <p className="mt-4 leading-7 text-[#6b756d]">
            Browse the catalogue and add a few products to begin an order.
          </p>

          <Link
            to="/ecommerce/products"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#172019] px-6 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#29352d]"
          >
            Browse products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        to="/ecommerce/products"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#657068] hover:text-[#172019]"
      >
        <ArrowLeft size={17} />
        Continue shopping
      </Link>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#748078] uppercase">Your order</p>

          <h1 className="text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Shopping cart</h1>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="self-start text-sm font-bold text-[#8c4c47] hover:text-[#6f312d]"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-4">
          {cartProducts.map(({ product, quantity }) => (
            <article
              key={product.id}
              className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 rounded-3xl border border-[#dfe3dd] bg-white p-4 shadow-sm sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-center sm:p-5"
            >
              <Link to={`/ecommerce/products/${product.slug}`} className="overflow-hidden rounded-2xl bg-[#e8ece6]">
                <img src={product.imageUrl} alt={product.name} className="aspect-square h-full w-full object-cover" />
              </Link>

              <div className="min-w-0">
                <p className="text-xs font-bold tracking-[0.12em] text-[#7c857e] uppercase">{product.category}</p>

                <Link to={`/ecommerce/products/${product.slug}`} className="mt-1 block truncate text-lg font-extrabold">
                  {product.name}
                </Link>

                <p className="mt-2 text-sm text-[#707971]">€{product.price.toFixed(2)} each</p>

                <div className="mt-4 inline-flex items-center rounded-xl border border-[#dce0da] bg-[#f8faf7] p-1">
                  <button
                    type="button"
                    aria-label={`Decrease ${product.name} quantity`}
                    onClick={() => setQuantity(product.id, quantity - 1)}
                    className="grid size-9 place-items-center rounded-lg text-[#566259] transition hover:bg-white"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="min-w-9 text-center text-sm font-bold">{quantity}</span>

                  <button
                    type="button"
                    aria-label={`Increase ${product.name} quantity`}
                    onClick={() => setQuantity(product.id, quantity + 1)}
                    disabled={quantity >= product.stock}
                    className="grid size-9 place-items-center rounded-lg text-[#566259] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-between border-t border-[#e7eae5] pt-4 sm:col-span-1 sm:block sm:border-0 sm:pt-0 sm:text-right">
                <strong className="text-lg">€{(product.price * quantity).toFixed(2)}</strong>

                <button
                  type="button"
                  aria-label={`Remove ${product.name}`}
                  onClick={() => removeItem(product.id)}
                  className="mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#8c4c47] hover:text-[#6f312d] sm:mt-5"
                >
                  <Trash2 size={15} />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-3xl border border-[#dfe3dd] bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-xl font-extrabold">Order summary</h2>

          <dl className="mt-6 grid gap-4 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-[#687269]">Subtotal</dt>
              <dd className="font-bold">€{subtotal.toFixed(2)}</dd>
            </div>

            <div className="flex items-center justify-between">
              <dt className="text-[#687269]">Shipping</dt>
              <dd className="font-bold text-[#39704b]">Free</dd>
            </div>

            <div className="flex items-center justify-between border-t border-[#dfe3dd] pt-4 text-base">
              <dt className="font-extrabold">Total</dt>
              <dd className="text-xl font-extrabold">€{subtotal.toFixed(2)}</dd>
            </div>
          </dl>

          <button
            data-store-button="dark"
            type="button"
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
            }}
            onClick={() => window.alert("Checkout is intentionally disabled in this portfolio demo.")}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#172019] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#29352d]"
          >
            <span data-store-button-label>Proceed to checkout</span>
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-[#818a83]">
            Portfolio demonstration. No real payment will be processed.
          </p>
        </aside>
      </div>
    </section>
  );
}
