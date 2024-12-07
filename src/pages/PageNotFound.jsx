import { useBack } from '../hooks/useBack';

function PageNotFound() {
  const back = useBack();

  return (
    <div>
      <p>The page you are looking for cannot be found.</p>
      <button onClick={back}>&larr; Go back</button>
    </div>
  );
}

export default PageNotFound;
