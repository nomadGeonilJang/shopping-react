export const attachRef = ( base:any ) => {
  return ( ref: HTMLInputElement ) => {
    base.current = {
      ...base.current,
      [ ref?.name ]: ref
    };
  };
};
  