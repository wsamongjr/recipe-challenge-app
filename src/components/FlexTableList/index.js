import React, { Children } from "react";
import PropTypes from "prop-types";
import StyledFlexTable from "./StyledFlexTable";

function Table(props) {
    const { children } = props;
    return <StyledFlexTable>{Children.toArray(children)}</StyledFlexTable>;
}

Table.propTypes = {
    children: PropTypes.node,
};

export default Table;
