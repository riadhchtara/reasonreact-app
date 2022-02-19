'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ArrayLabels = require("bs-platform/lib/js/arrayLabels.js");

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
  switch (action.TAG | 0) {
    case /* AddToDoItem */0 :
        return {
                todolist: List.append(state.todolist, {
                      hd: state.item,
                      tl: /* [] */0
                    }),
                item: state.item
              };
    case /* SetItem */1 :
        return {
                todolist: state.todolist,
                item: action._0
              };
    case /* DeleteItem */2 :
        var i = action._0;
        return {
                todolist: (console.log(i), ArrayLabels.to_list(ArrayLabels.of_list(state.todolist).splice(i + 1 | 0, 1))),
                item: state.item
              };
    
  }
}

function TODOListReducerFromReactJSDocs(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("div", undefined, React.createElement("div", undefined, $$Array.of_list(List.mapi((function (i, x) {
                                return React.createElement("div", {
                                            key: String(i)
                                          }, x, React.createElement("button", {
                                                style: rightButtonStyle,
                                                onClick: (function (_event) {
                                                    return Curry._1(dispatch, {
                                                                TAG: /* DeleteItem */2,
                                                                _0: i
                                                              });
                                                  })
                                              }, "-"));
                              }), state.todolist))), React.createElement("input", {
                      type: "text",
                      value: state.item,
                      onChange: (function ($$event) {
                          return Curry._1(dispatch, {
                                      TAG: /* SetItem */1,
                                      _0: $$event.target.value
                                    });
                        })
                    })), React.createElement("div", undefined, React.createElement("button", {
                      style: rightButtonStyle,
                      onClick: (function (_event) {
                          return Curry._1(dispatch, {
                                      TAG: /* AddToDoItem */0,
                                      _0: ""
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
