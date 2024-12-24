import {FormControl, MenuItem, Select} from "@mui/material";
import {useLocale} from "next-intl";

import {useTransition} from "react";
import {locales} from "../../config";
import {usePathname, useRouter} from "../../navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const handleChange = (event: {target: {value: string}}) => {
    startTransition(() => {
      router.replace(pathname, {locale: event.target.value});
    });
  };
  return (
    <FormControl required>
      <Select
        sx={{
          width: "70px",
          height: "40px",
          fontSize: "14px",
          fontWeight: 400,
          borderRadius: "8px",
          color: "white",
        }}
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={locale}
        onChange={handleChange}
      >
        {locales.map((loc) => (
          <MenuItem key={loc} value={loc} sx={{color: "white"}}>
            {loc.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
