import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { removeClase } from "../../../../../services/clase";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "titulo",
        numeric: false,
        disablePadding: true,
        label: "Título",
    },
    {
        id: "propietario",
        numeric: false,
        disablePadding: true,
        label: "Propietario",
    },
    {
        id: "semana",
        numeric: true,
        disablePadding: false,
        label: "Semana",
    },
    {
        id: "fechaCreacion",
        numeric: true,
        disablePadding: false,
        label: "Creado",
    },
    {
        id: "fechaActualizacion",
        numeric: true,
        disablePadding: false,
        label: "Actualizado",
    },
];


const DEFAULT_ROWS_PER_PAGE = 5;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "seleccionar todas las clases",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected, eliminarClase } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected === 1 ? (
                        <>1 seleccionado</>
                    ) : (
                        <>{numSelected} seleccionados</>
                    )}
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Lista de clases
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip
                    title="Eliminar clases seleccionadas"
                    onClick={eliminarClase}
                >
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    eliminarClase: PropTypes.func.isRequired,
};

const ClasesTable = ({ rows, gradoId, materiaId }) => {
    console.log("CLASES RECIBIDAS EN TABLE: ", rows);
    const [localData, setLocalData] = React.useState(rows);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("semana");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    // const [visibleRows, setVisibleRows] = React.useState(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
    const [dense, setDense] = React.useState(false);
    const navigate = useNavigate();

    // console.log("DATA EN TABLA DE MATERIA.JSX: ", rows);
    React.useEffect(() => {
        console.log("ESTOY RENDERIZANDO NUEVAMENTE");
        setLocalData(rows);
      }, [rows]);
    console.log("LOCAL DATA: ",localData);
    const eliminarClase = () => {
        const eliminados = selected.map((e) => {
            removeClase(gradoId, materiaId, e);
        });

        navigate("/sincronizador");
    };
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    // console.log("ORDER: ", order);
    // console.log("ORDER BY: ", orderBy);
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = localData.map((n) => n.titulo);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(localData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    eliminarClase={eliminarClase}
                />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 200 }}
                        aria-labelledby="tableTitle"
                        size={"medium"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={localData.length}
                        />
                        <TableBody>
                            {visibleRows
                                ? visibleRows.map((row, index) => {
                                      const isItemSelected = isSelected(
                                          row.titulo
                                      );
                                      const labelId = `enhanced-table-checkbox-${index}`;

                                      return (
                                          <StyledTableRow
                                              hover
                                              role="checkbox"
                                              aria-checked={isItemSelected}
                                              tabIndex={-1}
                                              key={row.titulo}
                                              selected={isItemSelected}
                                              sx={{ cursor: "pointer" }}
                                          >
                                              <StyledTableCell padding="checkbox">
                                                  <Checkbox
                                                      onClick={(event) =>
                                                          handleClick(
                                                              event,
                                                              row.titulo
                                                          )
                                                      }
                                                      color="primary"
                                                      checked={isItemSelected}
                                                      inputProps={{
                                                          "aria-labelledby":
                                                              labelId,
                                                      }}
                                                  />
                                              </StyledTableCell>
                                              <StyledTableCell
                                                  component="th"
                                                  id={labelId}
                                                  scope="row"
                                                  padding="none"
                                              >
                                                  <Button
                                                      component={RouterLink}
                                                      to={`${row.titulo}`}
                                                      state={{
                                                          claseId: row.titulo,
                                                          contenido:
                                                              row.contenido,
                                                      }}
                                                  >
                                                      {row.titulo}
                                                  </Button>
                                              </StyledTableCell>
                                              <StyledTableCell
                                                  align="left"
                                                  padding="none"
                                              >
                                                  {row.propietario}
                                              </StyledTableCell>
                                              <StyledTableCell
                                                  align="right"
                                                  padding="normal"
                                              >
                                                  {row.semana}
                                              </StyledTableCell>
                                              <StyledTableCell
                                                  align="right"
                                                  padding="normal"
                                              >
                                                  {new Date(
                                                      row.fechaCreacion
                                                  ).getFullYear()}
                                              </StyledTableCell>
                                              <StyledTableCell
                                                  align="right"
                                                  padding="normal"
                                              >
                                                  {new Date(
                                                      row.fechaActualizacion
                                                  ).getFullYear()}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                      );
                                  })
                                : null}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={localData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};
export default ClasesTable;
