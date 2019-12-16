import React from 'react';
import Picture from '../../components/picture';
import Spinner from '../../components/spinner';
import Button from '../../components/button';

export default function View({
  fetchPicture,
  picture: { pictureUrl },
  loading,
}) {

  const getDisabledStyle = () => {
    if (loading) {
      return '--disabled';
    }
  }

  return (
    <>
      <div className='main-image-container col-11' >
        {loading
          ? (
            <Spinner />
          )
          : (
            <Picture
              {...{ pictureUrl }}
            />
          )
        }
      </div>
      <Button
        className={`-btn-primary ${getDisabledStyle()}`}
        onClick={fetchPicture}
        disabled={!!getDisabledStyle()}
      >
        Загрузить
      </Button>
    </>
  )
}
