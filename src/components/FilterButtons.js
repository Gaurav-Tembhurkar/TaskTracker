function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <button 
        onClick={() => setFilter("all")} 
        className={filter === "all" ? "filter-btn active" : "filter-btn"}
      >
        All
      </button>
      <button 
        onClick={() => setFilter("active")} 
        className={filter === "active" ? "filter-btn active" : "filter-btn"}
      >
        Active
      </button>
      <button 
        onClick={() => setFilter("completed")} 
        className={filter === "completed" ? "filter-btn active" : "filter-btn"}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
