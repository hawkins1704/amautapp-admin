import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { Header } from "../../components/header";
import imgLogo from "../../assets/logos/logo-2-blanco.png";
import { MyContext } from "../../providers/Context";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Layout = ({
    children,
    title,
    breadcrumbs,
    HeaderButtonGroup,
    isPrincipal,
}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { user, updateUser } = React.useContext(MyContext);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img
                        src={imgLogo}
                        className={styles.logo}
                        alt="Amautapp logo"
                    />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{ color: theme.palette.primary.main }}
                    >
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <ListItem
                        component={Link}
                        to={"/"}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <HomeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Principal"}
                                sx={{
                                    opacity: open ? 1 : 0,
                                    color: "black",
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        component={Link}
                        to={"/material-educativo"}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <MenuBookRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Material Educativo"}
                                sx={{ opacity: open ? 1 : 0, color: "black" }}
                            />
                        </ListItemButton>
                    </ListItem>
                    {user.userType === "admin" ? (
                        <ListItem
                            component={Link}
                            to={"/centros-educativos"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SchoolRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Centros Educativos"}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        color: "black",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ) : user.userType === "docente" ? (
                        <ListItem
                            component={Link}
                            to={"/mi-centro-educativo"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SchoolRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Mi Centro Educativo"}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        color: "black",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ) : null}

                    <ListItem
                        component={Link}
                        to={"/configuracion"}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <SettingsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Configuración"}
                                sx={{ opacity: open ? 1 : 0, color: "black" }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        component={Link}
                        to={"/soporte"}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <SupportAgentRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Ayuda y soporte"}
                                sx={{ opacity: open ? 1 : 0, color: "black" }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem
                        component={Link}
                        to={"/login"}
                        disablePadding
                        sx={{ display: "block" }}
                        onClick={() => updateUser(null)}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <ExitToAppRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Cerrar sesión"}
                                sx={{ opacity: open ? 1 : 0, color: "black" }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: isPrincipal ? 0 : 3,
                    minHeight: "100vh",
                }}
            >
                <DrawerHeader />
                {isPrincipal ? null : (
                    <Header
                        title={title}
                        breadcrumbs={breadcrumbs}
                        ButtonGroup={HeaderButtonGroup}
                    />
                )}
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
