import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function OwnerAppPage() {
  return (
    <ProductPageLayout
      eyebrow="Owner experience"
      title="Owner App"
      lead="Track performance, inventory, and menus across outlets—wherever you are."
      heroImage={{
        src: "/images/suite/owner-app.png",
        alt: "DigiRestro Owner App dashboard on mobile showing sales and outlet performance",
        priority: true,
      }}
      introParagraphs={[
        "As a business owner, it is not always possible to be present at the restaurant. With the DigiRestro Owner App, you track performance on your phone so you can decide faster and fix issues before they grow.",
        "Overcome understocking and overstocking with inventory that updates in real time—get alerts when stock is low and keep procurement aligned with what your kitchens actually use.",
        "Update menus, add or remove items, and adjust pricing from the app, including across multiple outlets in one go—so guests always see current offers and prices.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
