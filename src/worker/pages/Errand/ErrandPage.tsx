import { useParams } from "react-router-dom";

const ErrandPage = () => {
  const { errandId } = useParams<{ errandId: string }>();
  return <div></div>;
};

export { ErrandPage };
