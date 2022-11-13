import PropTypes from "prop-types";

// const PerroMascota = () => {
//   return <div>Es divertido tener mascota en Casa 🤩🤩🤩. </div>;
// };

// const newMessage = {
//   message: "HolaMundo",
//   title: "Marly Patricia",
// };

export const FirstApp = ({ title, Subtitle, cod }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{Subtitle}</p>
      <p>{cod}</p>

      {/* {<h3>{JSON.stringify(newMessage)}</h3>} */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  Subtitle: PropTypes.string.isRequired,
  cod: PropTypes.number,
};

FirstApp.defaultProps = {
  title: "No hay título",
  Subtitle: "😎 Esto es un subtítulo",
  name: "Nazhir González",
  cod: 1234567898,
};
