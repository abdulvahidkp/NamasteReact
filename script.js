

const heading1 = React.createElement("h1", {id:'title2',class:'helloo'}, "Bismillah");

const heading2 = React.createElement('h2',{id:'title2'},'full set akkanam');

const heading3 = React.createElement('h3',{id:'end'},'appo ok');


const container = React.createElement('div',{id:'container'},[heading1,heading2,heading3])
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);