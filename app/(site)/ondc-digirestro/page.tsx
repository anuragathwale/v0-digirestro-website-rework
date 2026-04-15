import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function OndcPage() {
  return (
    <ProductPageLayout
      eyebrow="Open commerce"
      title="DigiRestro + ONDC"
      lead="Sell on India’s open network with one menu and one operations surface inside DigiRestro."
      heroImage={{
        src: "/images/suite/ondc.png",
        alt: "ONDC integration with DigiRestro POS and ordering",
        priority: true,
      }}
      introParagraphs={[
        "ONDC is an open network for digital commerce—helping restaurants build their own presence instead of relying only on high-commission aggregators. Consumers can discover and order through everyday apps such as Paytm, Pincode by PhonePe, IDFC, and others.",
        "Restaurant onboarding can be opaque; as an integrated partner, DigiRestro helps you get on ONDC without juggling yet another dashboard for orders and menu. Manage acceptance and catalogue from the DigiRestro platform you already use.",
        "That means fewer mismatches between what you sell in-store and what shows online—and a cleaner path from network orders to your kitchen and POS.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
