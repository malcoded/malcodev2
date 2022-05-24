
const Rating = ({handleOnClick, post}: {handleOnClick: () => void, post: {claps: number}}) => {
  return (
    <div className="gv-rating-container">
      <button onClick={handleOnClick}>
        👏
        <span className="gv-item-counter-claps gv-pl-2">
          {(post && post.claps) || 0}
        </span>
      </button>
    </div>
  )
}

export default Rating