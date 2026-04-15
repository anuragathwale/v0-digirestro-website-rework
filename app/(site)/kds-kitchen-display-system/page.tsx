import { ProductPageLayout } from "@/components/product-page-layout"

export default function KdsPage() {
  return (
    <ProductPageLayout
      variant="article"
      showAdminControl={false}
      eyebrow="Kitchen display"
      title="KDS — Kitchen Display System"
      lead="One screen for every ticket—clear modifiers, color-coded urgency, and fewer missed orders."
      heroImage={{
        src: "/images/suite/kds.png",
        alt: "DigiRestro Kitchen Display System with color-coded orders",
        priority: true,
      }}
      introParagraphs={[
        "Paper KOTs and kitchen printers carry recurring cost—and paper can be lost or damaged in a busy kitchen. A Kitchen Display System (KDS) is a one-time screen investment that cuts roll costs and reduces human error.",
        "Unlike a silent printer, KDS can alert the line when a new order hits, so nothing gets missed in the noise of service.",
      ]}
      articleSections={[
        {
          heading: "Why KDS?",
          paragraphs: [
            "Traditional printers and paper tickets add up over time and still leave room for mistakes when a slip goes missing. KDS centralizes what the kitchen must cook next, with less physical clutter on the pass.",
          ],
        },
        {
          heading: "Consolidated screen for all your KOTs",
          paragraphs: [
            "Running and past orders from DigiRestro POS appear on one kitchen display as clear tickets with items and quantities. Mark items or orders ready from the same screen so service and expo know what is live.",
          ],
        },
        {
          heading: "Improved order accuracy",
          paragraphs: [
            "Modifiers, dish-level notes, and order-level instructions stay visible to the line so dishes match what the guest asked for.",
            "Tickets stay on screen until the kitchen marks them prepared—so nothing disappears until it is actually done.",
          ],
        },
        {
          heading: "Increase efficiency",
          paragraphs: [
            "Configure time-based color coding so tickets change appearance as they age. Set prep-time expectations to match your menu so chefs can spot delays and prioritize what needs attention first.",
          ],
        },
        {
          heading: "Data tracking",
          paragraphs: [
            "Kitchen operations generate useful signals: average preparation time, how many orders finish within target, and how many run late. Export KDS activity into reports to coach the line and refine recipes and staffing.",
          ],
        },
      ]}
    />
  )
}
