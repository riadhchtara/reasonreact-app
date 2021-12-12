'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var leftButtonStyle = {
  width: "48px",
  borderRadius: "4px 0px 0px 4px"
};

var rightButtonStyle = {
  width: "48px",
  borderRadius: "0px 4px 4px 0px"
};

var containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

var initialState = {
  todolist: /* [] */0,
  item: ""
};

function reducer(state, action) {
  if (action.TAG === /* AddToDoItem */0) {
    return {
            todolist: List.append(state.todolist, {
                  hd: action._0,
                  tl: /* [] */0
                }),
            item: state.item
          };
  } else {
    return {
            todolist: state.todolist,
            item: action._0
          };
  }
}

function TODOListReducerFromReactJSDocs(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("div", undefined, React.createElement("div", undefined, $$Array.of_list(List.map((function (x) {
                                return React.createElement("div", undefined, x);
                              }), match[0].todolist)))), React.createElement("div", undefined, React.createElement("button", {
                      style: rightButtonStyle,
                      onClick: (function (_event) {
                          return Curry._1(dispatch, {
                                      TAG: /* AddToDoItem */0,
                                      _0: "mmm"
                                    });
                        })
                    }, "+")));
}

var make = TODOListReducerFromReactJSDocs;

exports.leftButtonStyle = leftButtonStyle;
exports.rightButtonStyle = rightButtonStyle;
exports.containerStyle = containerStyle;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
