export default function Img({ id }) {
  return (
    <div>
      <img src={id}></img>
      <style jsx>{`
        img {
          max-width: 500px;
          margin: auto;
        }
        `}</style>
      </div>
  );
}
