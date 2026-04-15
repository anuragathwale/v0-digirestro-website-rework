import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function OnlineOrderingPage() {
  return (
    <ProductPageLayout
      eyebrow="Hungry — online ordering"
      title="Online Ordering App"
      lead="Your own ordering website and app—own the data, skip heavy aggregator commissions."
      heroImage={{
        src: "/images/suite/online-ordering.png",
        alt: "DigiRestro Hungry online ordering app and branded web experience",
        priority: true,
      }}
      introParagraphs={[
        "Paying steep commissions on third-party platforms while losing control of customer data is painful. Hungry lets you build your own online ordering website and mobile experience so guests order directly from you—and the data stays yours for campaigns and loyalty.",
        "DigiRestro POS and Hungry share one menu and one operational view: online orders land on the POS, and guests get real-time updates—accepted, being prepared, out for delivery, and more.",
        "Delivery does not have to be a separate headache. Integrations with partners such as Dunzo, Porter, and Shadowfax help get orders to the doorstep while you run the business from one stack.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
