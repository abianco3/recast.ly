var Autoplay = ({toggleAutoplay}) => (
  <div>
    <input onClick={(event) => toggleAutoplay(event.target.checked)} type="checkbox" value="autoplay"/>
    Autoplay
  </div>
);