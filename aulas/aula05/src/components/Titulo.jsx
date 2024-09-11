

function Titulo() {
  return <h1></h1>;
}

export default Titulo;

Link;

function Link(props) {
  return (
    <a href="" onClick={(e) => {}}>
      {props.texto}
    </a>
  );
}
