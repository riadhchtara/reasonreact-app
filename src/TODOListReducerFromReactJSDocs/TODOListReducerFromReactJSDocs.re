// This is the ReactJS documentation's useReducer example, directly ported over
// https://reactjs.org/docs/hooks-reference.html#usereducer

// A little extra we've put, because the ReactJS example has no styling
let leftButtonStyle = ReactDOMRe.Style.make(~borderRadius="4px 0px 0px 4px", ~width="48px", ());
let rightButtonStyle = ReactDOMRe.Style.make(~borderRadius="0px 4px 4px 0px", ~width="48px", ());
let containerStyle = ReactDOMRe.Style.make(~display="flex", ~alignItems="center", ~justifyContent="space-between", ());

// Record and variant need explicit declarations.
type state = { todolist: list(string)};

type action =
  |AddToDoItem(string);
 
let initialState = { todolist: []
};
let reducer = (state, action) => {
  switch (action) {
  | AddToDoItem(item) => {todolist:List.append (state.todolist, [item ] )}

} ;
0  
};

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);

  // We can use a fragment here, but we don't, because we want to style the counter
  <div style=containerStyle>
    <div>
      {React.string("Count: ")}    </div>
    <div>

      <button style=rightButtonStyle onClick={_event => dispatch(
        AddToDoItem("")
      )}>
        {React.string("+")}
      </button>
    </div>
  </div>;
};
