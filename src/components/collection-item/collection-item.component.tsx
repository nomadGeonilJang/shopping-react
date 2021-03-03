import React from "react";
import "./collection-item.styles.scss";

import Modal, { useModal } from "components/modal/modal.component";

type CollectionItem = {
    id:number|string;
    name:string;
    price:string | number;
    imageUrl:string
}

const CollectionItem = ( { id, name, price, imageUrl } :CollectionItem ) => {
  const { open, modalControl } = useModal();


  const handleOpenModal = () => {
    modalControl.open();
  };
  const handleClose = () => {
    modalControl.close();
  };

  return (
    <>
      <div className="collection-item" onClick={handleOpenModal}>
        <div className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
      {open && (
        <Modal onClose={handleClose}>
          <div className="collection-footer" style={{ color: 'white' }}>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CollectionItem;