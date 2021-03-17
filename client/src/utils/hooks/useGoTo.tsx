import { useHistory, useRouteMatch } from "react-router-dom";

const useGoTo = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const goTo = ( path = "/" ) => {
    history.push( `${url}${path}` );
  };

  return goTo;
};

export default useGoTo;