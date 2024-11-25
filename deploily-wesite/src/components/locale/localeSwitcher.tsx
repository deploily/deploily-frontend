import { useLocale } from 'next-intl';
import { FormControl, MenuItem, IconButton, Menu, Typography, Grid, Button } from '@mui/material';
import { useState, useTransition } from 'react';
import { usePathname, useRouter } from '../../navigation';
import { locales } from '../../config';
import LanguageIcon from '@mui/icons-material/Language';



export default function LocaleSwitcher({ color }) {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
        null
    );
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    const locale = useLocale();


    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();



    return (


        <FormControl >
            <Button size="medium" onClick={handleOpenUserMenu}>
                <Grid container direction="row" spacing="10px" sx={{ display: "flex", alignItems: "center", paddingLeft: "0px" }}>
                    <Grid item>
                        <Typography variant='appBarSubTitle' textAlign="center" paddingLeft={1} color={color} >{locale.toUpperCase()}</Typography>
                    </Grid>
                    <Grid item display={{ sm: "flex", md: "flex", xs: "none" }}>
                        <LanguageIcon htmlColor={color} />  </Grid>
                </Grid>
            </Button>
            <Menu
                id="menu-AImodels"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",

                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {locales.map((loc) => (
                    <MenuItem key={`${loc}`} onClick={() => {
                        startTransition(() => {
                            router.replace(pathname, { locale: loc });
                        });
                        handleCloseUserMenu();
                    }}
                    >
                        <Typography textAlign="center">{loc.toUpperCase()}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </FormControl>
    );
}