import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useME = () => {
  const { loading, data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>Loading ...</div>;

  return { me: data?.me };
};

export default useME;
