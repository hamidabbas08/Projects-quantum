import { getHeader } from "@/lib/contentful";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  const headerData = await getHeader();
  return <HeaderClient data={headerData} />;
};

export default Header;
