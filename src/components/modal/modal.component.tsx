import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "./modal.styles.scss";


const Modal = ( { children, onClose }:any ) => {

  const modalRoot = document.querySelector( "#modal" );

  if( !modalRoot ){
    throw new Error( "Can't use modal component without root modal container" );
  }

  const handleRemoveModal = () => {    
    onClose();
    requestAnimationFrame( ()=>{
      modalRoot.classList.remove( "open" );
      modalRoot.innerHTML = ``;
      document.body.style.overflow = "";
    } );
    
  };

  useEffect( ()=>{
    document.body.style.overflow = "hidden";
    modalRoot.classList.add( "open" );
  }, [] );


  
  return (
    <ModalContainer>
      <button className="close" onClick={handleRemoveModal}>✕</button>
      {children}
    </ModalContainer>
  );
};


const ModalContainer = ( { children }:any ) =>{
  const modalRoot = document.querySelector( "#modal" );

  if( !modalRoot ){
    throw new Error( "Can't use modal component without root modal continer by id modal" );
  }

  return ReactDOM.createPortal( children, modalRoot );
};

export const useModal = () => {
  const [ open, setOpen ] = useState( false );
  return {
    open,
    modalControl:{
      close:useCallback( ()=>{setOpen( false );}, [ open ] ),
      open:useCallback( ()=>{setOpen( true );}, [ open ] )
    }
  };
};



export default Modal;