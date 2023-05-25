import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./Header.css";
import { Link } from "react-router-dom";

const pages = [
  { name: "Домой", link: "/", id: 1 },
  { name: "Найти работу", link: "/products", id: 2 },
  { name: "Доступтные ваканции", link: "/f", id: 3 },
];
const settings = [
  { name: "Профиль", link: "/l", id: 1 },
  { name: "Аккаунт", link: "/o", id: 2 },
  { name: "Панель", link: "/ol", id: 3 },
  { name: "Выйти", link: "/lol", id: 4 },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="NavMainContainer" position="static">
      <Container className="NavContainer" maxWidth="xl">
        <Toolbar className="NavToolbar" disableGutters>
          {/* ====================================logo iocn======================================== */}
          {/* <AdbIcon
            className="NavLogoImg"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          /> */}
          {/* ====================================logo iocn======================================== */}
          <Typography
            className="NavLogoText"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EMPLOYERS.KG
          </Typography>

          {/* ===========================ADAPTIV======================================== */}
          <Box
            className="NavBlockBurgerMenu"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              className="NavBurgerMenuBtn"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="NavBurgerMenuBtnIcon" />
            </IconButton>
            <Menu
              className="NavBurgerMenuItems"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link key={index} to={page.link}>
                  <MenuItem
                    className="NavBurgerMenuItemsMenu"
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      className="NavBurgerMenuItemsBtn"
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* ====================================logo iocn======================================== */}
          {/* 
          <AdbIcon
            className="NavBurgerMenuLogoImg"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          /> */}
          {/* ====================================logo iocn======================================== */}

          <Typography
            className="NavBurgerMenuLogoText"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EMPLOYERS.KG
          </Typography>
          {/* ===========================ADAPTIV======================================== */}

          <Box
            className="NavItemsBlock"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => (
              <Link key={index} to={page.link}>
                <Button
                  className="NavItemsBtn"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box className="NavSettingsMenuBlock" sx={{ flexGrow: 0 }}>
            <Tooltip
              className="NavSettingsMenuAvatarBlock"
              title="Открыть профиль"
            >
              <IconButton
                className="NavSettingsMenuAvatarBtn"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  className="NavSettingsMenuAvatar"
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              className="NavSettingsMenuItemsBlock"
              sx={{ mt: "45px" }}
              id="menu-appbar"
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
              {settings.map((setting, index) => (
                <Link key={index} to={setting.link}>
                  <MenuItem
                    className="NavSettingsMenuItem"
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography
                      className="NavSettingsMenuItemBtn"
                      textAlign="center"
                    >
                      {setting.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
