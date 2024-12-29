import {useState, useTransition} from "react";
import {usePathname, useRouter} from "../../navigation";
import {locales} from "../../config";
import {Button, Col, Dropdown, Menu, Row, Typography} from "antd";
import {Globe} from "@phosphor-icons/react";
import {useChangeLocale} from "../../../locales/clients";

export default function LocaleSwitcher({color}) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const locale = useChangeLocale(/* { preserveSearchParams: true } */);

  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  const handleMenuClick = (locale) => {
    startTransition(() => {
      router.replace(pathname, {locale});
    });
    handleCloseUserMenu();
  };

  const menuItems = locales.map((loc) => ({
    key: loc,
    label: <Typography onClick={() => handleMenuClick(loc)}>{loc.toUpperCase()}</Typography>,
  }));
  const [theme] = useState("dark");

  const menu = (
    <Menu
      items={menuItems}
      style={{
        backgroundColor: theme === "dark" ? "#0c0d0f" : "#FFFFFF",
        color: theme === "dark" ? "#FFFFFF" : "#0c0d0f",
      }}
    />
  );

  return (
    <>
      <Button
        variant="text"
        onClick={handleOpenUserMenu}
        style={{
          border: "none",
          backgroundColor: theme === "dark" ? "#0c0d0f" : "#FFFFFF",
          color: theme === "dark" ? "#FFFFFF" : "#0c0d0f",
        }}
      >
        <Row
          align="middle"
          justify="space-between"
          style={{display: "flex", alignItems: "center", paddingLeft: "0px"}}
        >
          <Col>
            <Typography color={color}>{locale}</Typography>
          </Col>
          <Col style={{display: "flex"}}>
            <Globe color={color} size={20} />{" "}
          </Col>
        </Row>
      </Button>

      <Dropdown
        overlay={menu}
        trigger={["click"]}
        open={Boolean(anchorElUser)}
        onOpenChange={(open) => {
          if (!open) handleCloseUserMenu();
        }}
      />
    </>
  );
}
