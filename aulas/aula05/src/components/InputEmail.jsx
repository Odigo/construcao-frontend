function InputEmail(props) {
  return (
    <>
      <label htmlFor="email">{props.texto}</label>
      <input type="email" id="email" name="email" required value={props.valor} onChange={(e) => {props.mudaValor}} >
      </input>
    </>
  );
}

export default InputEmail;
