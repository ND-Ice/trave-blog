const getColSpan = (post, index) => {
  if (post.image.length === 1) return 2;
  if (index === 2 && post.image.length === 3) return 2;
};

export default getColSpan;
