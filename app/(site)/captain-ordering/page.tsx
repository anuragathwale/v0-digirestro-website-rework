import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function CaptainOrderingPage() {
  return (
    <ProductPageLayout
      eyebrow="Floor service"
      title="Captain Ordering App"
      lead="Table management, faster KOTs, and confident upsell from the service floor."
      heroImage={{
        src: "/images/suite/captain-app.png",
        alt: "DigiRestro Captain App for table-side ordering and billing",
        priority: true,
      }}
      introParagraphs={[
        "Connect service, kitchen, and billing in one flow. Captains take orders at the table, fire KOTs with clarity, and keep the floor organized—without running back to a fixed terminal for every change.",
        "Table layout and ongoing orders stay visible so turns, splits, and add-ons are easier to manage during peak hours.",
        "Pair with DigiRestro POS and KDS so the right station sees the right ticket, and guests get accurate, timely food.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
