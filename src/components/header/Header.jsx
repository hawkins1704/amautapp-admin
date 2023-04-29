import {
    Breadcrumbs,
    Button,
    Container,
    Grid,
    IconButton,
    Typography,
    Link,
    Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const OptionalButtonGroup = () => {
    return <div className=""></div>;
};
const Header = ({ title, breadcrumbs, ButtonGroup }) => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        function handleResize() {
            setWidth(window.innerWidth);
          }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[]);
    let generalBreadcrumbs = [
        <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            key="1"
            color="inherit"
            component={RouterLink}
            to="/"
        >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Principal
        </Link>,
        breadcrumbs,
    ];
    const ComponenteRecibido = ButtonGroup || OptionalButtonGroup;

    return (
        <Container maxWidth={"xl"} sx={{ mb: 3 }}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant={"h4"}
                        component={"h1"}
                        className={styles.title}
                    >
                        {title.toUpperCase()}
                    </Typography>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        maxItems={(width<480)?2:6}
                        sx={{textTransform:'Capitalize'}}
                    >
                        {generalBreadcrumbs}
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ComponenteRecibido />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
