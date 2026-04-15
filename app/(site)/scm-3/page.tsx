import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function ScmPage() {
  return (
    <ProductPageLayout
      eyebrow="Supply chain"
      title="SCM — Supply Chain Management"
      lead="Source smarter, standardize recipes, and trace stock from vendor to plate."
      heroImage={{
        src: "/images/suite/scm.png",
        alt: "DigiRestro Supply Chain Management dashboard",
        priority: true,
      }}
      introParagraphs={[
        "DigiRestro Supply Chain Management (SCM) helps you manage the flow of raw materials and ingredients—from sourcing to what lands on the guest’s plate.",
        "Track contracts with suppliers so you can refine sourcing, negotiate with clarity, and keep procurement spend under control.",
        "Recipe and production tools help standardize taste and quality across locations, while integration with POS and accounting gives a fuller picture of inventory and cost of goods sold.",
        "Track expiry and batch numbers to cut waste and stay audit-ready.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
