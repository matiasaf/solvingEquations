import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { matrix, inv, multiply } from 'mathjs';

import './solvingEcuations.css';

export default function SolvingEcuations() {
  const [state, setState] = useState({
    firstRowEqual: 8,
    secondRowEqual: 6,
    firstColumnEqual: 13,
    secondColumnEqual: 8,
    solution: {},
  });

  const resolveEcuation = () => {
    const matrixS = inv(
      matrix([
        [1, 1, 0, 0],
        [0, 0, 1, -1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
      ])
    );
    const b = matrix([
      [state.firstRowEqual],
      [state.secondRowEqual],
      [state.firstColumnEqual],
      [state.secondColumnEqual],
    ]);
    const solutionVector = multiply(matrixS, b);
    setState({
      ...state,
      solution: {
        a: solutionVector._data[0][0],
        b: solutionVector._data[1][0],
        c: solutionVector._data[2][0],
        d: solutionVector._data[3][0],
      },
    });
  };

  return (
    <div className="container">
      <h1>Solución</h1>
      <div className="play-area">
        <div id="block_0" className="block">
          {state.solution.a}
        </div>
        <div id="block_1" className="block">
          +
        </div>
        <div id="block_2" className="block">
          {state.solution.b}
        </div>
        <div id="block_2" className="block">
          =
        </div>
        <div id="block_3" className="block">
          <input
            type="number"
            className="block"
            value={state.firstRowEqual}
            onChange={(e) =>
              setState({
                ...state,
                firstRowEqual: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div id="block_0" className="block">
          +
        </div>
        <div id="block_1" className="block"></div>
        <div id="block_2" className="block">
          +
        </div>
        <div id="block_2" className="block"></div>
        <div id="block_3" className="block"></div>

        <div id="block_4" className="block">
          {state.solution.c}
        </div>
        <div id="block_5" className="block">
          -
        </div>
        <div id="block_6" className="block">
          {state.solution.d}
        </div>
        <div id="block_7" className="block">
          =
        </div>
        <div id="block_8" className="block">
          <input
            type="number"
            className="block"
            value={state.secondRowEqual}
            onChange={(e) =>
              setState({
                ...state,
                secondRowEqual: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div id="block_0" className="block">
          ||
        </div>
        <div id="block_1" className="block"></div>
        <div id="block_2" className="block">
          ||
        </div>
        <div id="block_2" className="block"></div>
        <div id="block_3" className="block"></div>

        <div id="block_0" className="block">
          <input
            type="number"
            className="block"
            value={state.firstColumnEqual}
            onChange={(e) =>
              setState({
                ...state,
                firstColumnEqual: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div id="block_1" className="block"></div>
        <div id="block_2" className="block">
          <input
            type="number"
            className="block"
            value={state.secondColumnEqual}
            onChange={(e) =>
              setState({
                ...state,
                secondColumnEqual: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div id="block_2" className="block"></div>
        <div id="block_3" className="block"></div>
      </div>

      <br />
      <br />

      <Button
        color="primary"
        variant="contained"
        onClick={() => resolveEcuation()}
      >
        Resolver
      </Button>
    </div>
  );
}
