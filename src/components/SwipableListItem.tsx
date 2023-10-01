import React, { ReactNode, useState } from 'react';
// import  {Swipeable}  from 'react-swipeable';

interface ISwipeToDeleteItem {
    children : ReactNode;
    onDelete : (id : string | number) => void;
    id : string | number
}

const SwipeToDeleteItem = ({id , children, onDelete }: ISwipeToDeleteItem ) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipe = () => {
    setIsSwiped(true);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    // <Swipeable onSwipedLeft={handleSwipe} onSwipedRight={() => setIsSwiped(false)}>
      <div className={`list-item ${isSwiped ? 'swiped' : ''}`}>
        {children}
        {isSwiped && (
          <div className="delete-button" onClick={handleDelete}>
            Delete
          </div>
        )}
      </div>
    // </Swipeable>
  );
};

export default SwipeToDeleteItem;
