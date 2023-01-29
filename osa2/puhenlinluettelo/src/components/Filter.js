const Filter = ({handleFilterChange, filterValue}) => {
    return (
        <div>
            filter shown with <input onChange={handleFilterChange} value={filterValue} />
        </div>
    )
}

export default Filter;