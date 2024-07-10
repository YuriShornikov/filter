export const Toolbar = (filters, selected, onSelectFilter)  => {
    const handelClick = (filter) => {
        onSelectFilter(filter)
    }

    const getButtonClass = (filter) => {
        return filter === selected ? 'selected' : '';
      };
    return (
        <>
            {filters.map(filter => (
                <button key={filter} onClick={() => handelClick(filter)} className={getButtonClass(filter)}>
                    {filter}
                </button>
            ))}
        </>
    );
  }