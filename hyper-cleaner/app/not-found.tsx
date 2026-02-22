import ErrorNotFoundBase from './_components/ErrorNotFoundBase';

export default function NotFound() {
  return (
    <>
      <ErrorNotFoundBase
        title={"Oops. The page you were looking for doesn`t exist."}
        text={"Error (404). You may have mistyped the address or the page may have moved."}
        button={"Go home"}
      />

    </>
  );
}
