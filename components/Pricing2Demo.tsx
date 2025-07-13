import { Pricing2 } from "./pricing2";

const demoData = {
  heading: "Pricing",
  description: "Check out our affordable pricing plans",
  plans: [
    {
      id: "plus",
      name: "Starter",
      description: "For early founders",
      monthlyPrice: "₹5,000",
      yearlyPrice: "$50",
      features: [
        { text: "1 Page website" },
        { text: "Copywriting" },
        { text: "Strategic design" },
        { text: "Calendly integrations" },
      ],
      button: {
        text: "Purchase",
        url: "https://calendly.com/aringawande7712/30min?month=2025-07",
      },
    },
    {
      id: "pro",
      name: "Client Magnet",
      description: "For growing founders",
      monthlyPrice: "₹10,000",
      yearlyPrice: "$35",
      features: [
        { text: "3-5 page website" },
        { text: "Copywriting" },
        { text: "Strategic design" },
        { text: "CTA funnels" },
        { text: "Analytics included" },
      ],
      button: {
        text: "Purchase",
        url: "https://calendly.com/aringawande7712/30min?month=2025-07",
      },
    },
  ],
};

function Pricing2Demo() {
  return <Pricing2 {...demoData} />;
}

export { Pricing2Demo };
