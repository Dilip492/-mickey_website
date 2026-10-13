import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/ui/Button.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { mockOrders } from "../../data/mockdata.js";
import { formatCurrency, formatDate } from "../../lib/utils.js";

export default function OrderDetail() {
  const { id } = useParams();
  const order = mockOrders.find((o) => o.id === id);

  if (!order) {
    return (
      <EmptyState
        icon={ArrowLeft}
        title="Order not found"
        description="We couldn't find that order."
        action={<Link to="/my-mickeys/orders" className="inline-flex min-h-[44px] items-center rounded-full bg-copper px-5 text-sm font-medium text-cream">Back to Orders</Link>}
      />
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/my-mickeys/orders" className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Orders
      </Link>

      <header>
        <p className="eyebrow">Order Detail</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">#{order.id}</h1>
        <p className="mt-2 text-plum/60">
          {formatDate(order.date)} • {order.type} • {order.location}
        </p>
      </header>

      <div className="card-warm divide-y divide-cream-200">
        {order.items.map((it, i) => (
          <div key={i} className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium text-plum">{it.name}</p>
              <p className="text-xs text-plum/50">Qty {it.qty} · {formatCurrency(it.price)} each</p>
            </div>
            <span className="font-serif text-base font-semibold text-plum">
              {formatCurrency(it.price * it.qty)}
            </span>
          </div>
        ))}
      </div>

      <div className="card-warm space-y-2 p-6">
        <Row label="Subtotal" value={formatCurrency(order.subtotal)} />
        <Row label="Tax" value={formatCurrency(order.tax)} />
        <div className="divider-dotted my-2" />
        <Row label="Total" value={formatCurrency(order.total)} bold />
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="copper">Order Again</Button>
        <Button variant="outline">Get Receipt</Button>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm ${bold ? "font-semibold text-plum" : "text-plum/70"}`}>{label}</span>
      <span className={`text-sm ${bold ? "font-serif text-lg font-semibold text-plum" : "text-plum"}`}>{value}</span>
    </div>
  );
}