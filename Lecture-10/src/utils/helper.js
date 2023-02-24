const searchHandle = (data, query) => {
    let filterData = data.filter((item) =>
        item.data.name.toLowerCase().includes(query.toLowerCase())
    );
    return filterData;
};

export { searchHandle };