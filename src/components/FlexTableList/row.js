import React, { Children } from "react";
import PropTypes from "prop-types";
import StyledFlexTableRow from "./StyledFlexTableRow";

function TableRow(props) {
    const { children, className } = props;
    return <StyledFlexTableRow className={className}>{Children.toArray(children)}</StyledFlexTableRow>;
}

TableRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default TableRow;
