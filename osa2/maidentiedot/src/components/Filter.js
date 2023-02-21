const Filter = ({handleFilterChange, filterValue}) => {
    return (
        <div>
            find countries <input onChange={handleFilterChange} value={filterValue} />
        </div>
    )
}

export default Filter;