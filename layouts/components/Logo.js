import config from "@config/config.json";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="navbar-brand block">
    {config.site.logo_text}
  </Link>
);

export default Logo;
