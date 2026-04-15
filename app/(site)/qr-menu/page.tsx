import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function QrMenuPage() {
  return (
    <ProductPageLayout
      eyebrow="Contactless ordering"
      title="QR Ordering"
      lead="Guests scan, browse, and pay from the table—no paper menu, less wait time."
      heroImage={{
        src: "/images/suite/qr-ordering.png",
        alt: "DigiRestro QR menu and mobile ordering experience",
        priority: true,
      }}
      introParagraphs={[
        "QR code menus set a digital benchmark for your restaurant, especially in a contactless environment. DigiRestro QR ordering lets customers open the menu, place orders, and pay from their phone—reducing wait times and freeing staff for hospitality and prep.",
        "When guests order from the table, you save labor on manual order taking. Tight integration between the QR menu and POS cuts errors that happen when orders are re-keyed at the counter.",
        "Suggest add-ons and upgrades based on what guests pick, and surface offers as banners—so upsell is natural and revenue opportunities are not missed.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
