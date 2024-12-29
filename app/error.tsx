"use client";

interface Props {
  error: Error;
  reset: () => void;
}
const Error = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button onClick={reset} className="btn">
        Retry
      </button>
    </>
  );
};

export default Error;
