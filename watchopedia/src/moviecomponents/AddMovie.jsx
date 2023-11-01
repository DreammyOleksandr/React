const AddMovie = () => {
  return (
    <form action="">
      <div className="row text-white">
        <div className="h-4 col-12 text-center py-1 text-success">
          Add Movie
        </div>
        <div className="col-8 offset-1">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Name..."
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};

export default AddMovie;
