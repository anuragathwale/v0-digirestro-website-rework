import { ProductPageLayout } from "@/components/product-page-layout"

const RIDER_MOBILE_CHECKLIST = [
  "Receive runs with pickup, drop, and customer details in one place.",
  "Sync status with the kitchen and guests so everyone sees the same timeline.",
  "Reduce back-and-forth at the pass with clear handoff between prep and dispatch.",
  "Capture proof-of-delivery notes where your process needs them.",
  "Works with DigiRestro POS and online orders so riders stay on one workflow.",
] as const

export default function RiderAppPage() {
  return (
    <ProductPageLayout
      eyebrow="Delivery operations"
      title="Rider App"
      lead="Routes, handoffs, and live status so deliveries stay in sync with the kitchen and guests."
      heroImage={{
        src: "/images/suite/rider-app.png",
        alt: "DigiRestro Rider App showing delivery route and order status",
        priority: true,
      }}
      introParagraphs={[
        "Delivery should not mean chaos at the door. The DigiRestro Rider App gives your team a dedicated surface for assigned orders, ETAs, and customer communication—aligned with how tickets move from POS to pass to rider.",
        "Riders see what matters next: where to pick up, where to go, and any special instructions—without juggling chat threads or paper slips.",
        "Status updates flow back to operations so the kitchen and front desk know when an order is picked up, on the way, or delivered—fewer missed handoffs and happier guests.",
      ]}
      mobileChecklist={[...RIDER_MOBILE_CHECKLIST]}
    />
  )
}
