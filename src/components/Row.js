import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = props => {
  const cells = [];
  const y = props.y;
  for (let x = 0; x < props.x; x++) {
    cells.push(
      <Cell
        key={`${x}-${y}`}
        y={y}
        x={x}
        onChangedValue={props.handleChangedCell}
        updateCells={props.updateCells}
        value={props.rowData[x] || ''}
      />
    );
  }
  console.log(props.x);
  return <div>{cells}</div>;
};

Row.propTypes = {
  handleChangedCell: PropTypes.func.isRequired,
  updateCells: PropTypes.func.isRequired,
  // x: PropTypes.num.isRequired,
  // y: PropTypes.num.isRequired,
  rowData: PropTypes.shape({
    string: PropTypes.string
  }).isRequired
};

export default Row;
