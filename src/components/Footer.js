import { getFooter } from "@/lib/contentful";
import FooterClient from "./FooterClient";

const Footer = async () => {
  const footerData = await getFooter();
  return <FooterClient footerData={footerData} />;
};

export default Footer;
