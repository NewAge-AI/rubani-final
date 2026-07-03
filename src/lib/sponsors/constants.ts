import {
  BankOfKigaliLogo,
  KenyaRevenueAuthorityLogo,
  SafaricomMpesaLogo,
} from "@/components/institution-logos";
import type { Sponsor } from "~types/sponsors";

export const SPONSORS: Sponsor[] = [
  {
    name: "Bank of Kigali",
    url: "https://bk.rw",
    description:
      "Regional banking workflows for risk, portfolio intelligence, and governed reporting.",
    logo: BankOfKigaliLogo,
  },
  {
    name: "M-PESA",
    url: "https://www.safaricom.co.ke/about/brand-toolkit/logos",
    description:
      "Mobile-money settlement and merchant signals for reconciliation workflows.",
    logo: SafaricomMpesaLogo,
  },
  {
    name: "KRA",
    url: "https://kra.go.ke",
    description:
      "Tax, registry, and eTIMS workflows for compliance intelligence.",
    logo: KenyaRevenueAuthorityLogo,
  },
];
