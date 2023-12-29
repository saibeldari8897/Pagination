const Paginate = ({ allposts, handlePostsperpage }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allposts.length / 5); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <ul className="pagination">
          {pageNumbers.map((numbers) => (
            <li className="page-item" key={numbers}>
              <a
                className="page-link"
                href="#"
                onClick={() => handlePostsperpage(numbers)}
              >
                {numbers}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};
export default Paginate;
