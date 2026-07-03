import {
  BankOfKigaliLogo,
  ECitizenLogo,
  EquityBankLogo,
  IprsLogo,
  KenyaRevenueAuthorityLogo,
  MtnLogo,
  SafaricomMpesaLogo,
  TemenosLogo,
} from "@/components/institution-logos";
import type { ReactNode } from "react";

export const SHOWCASE_COMPANY_ICONS: Record<string, ReactNode> = {
  "bank-of-kigali": <BankOfKigaliLogo className="size-5 rounded" />,
  "equity-bank": <EquityBankLogo className="size-5 rounded" />,
  mpesa: <SafaricomMpesaLogo className="size-5 rounded" />,
  "kra-etims": <KenyaRevenueAuthorityLogo className="size-5 rounded" />,
  ecitizen: <ECitizenLogo className="size-5 rounded" />,
  "mtn-rwanda": <MtnLogo className="size-5 rounded" />,
  "temenos-t24": <TemenosLogo className="size-5 rounded" />,
  iprs: <IprsLogo className="size-5 rounded" />,
};
