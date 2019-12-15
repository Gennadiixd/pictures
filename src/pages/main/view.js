import React from 'react';
import Picture from '../../components/picture';
import Spinner from '../../components/spinner';

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
      <button
        onClick={fetchPicture}
        className={`-btn -btn-primary ${getDisabledStyle()}`}
        disabled={!!getDisabledStyle()}
      >
        Загрузить
      </button>
    </>
  )
}
