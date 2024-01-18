const Error = ({ message }: { message: string }) => {
  return (
    <div className="error">
      <h2>Désolé, une erreur est survenue !</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
