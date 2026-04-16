const Shimmer = () => {
  return (
    <div className="shimmer_container">
      {Array(20).fill("").map((_, index) => (
        <div className="shimmer_card" key={index}>
          <div className="shimmer_img"></div>
          <div className="shimmer_text">
            <div className="shimmer_title"></div>
            <div className="shimmer_description"></div>
            <div className="shimmer_description short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;