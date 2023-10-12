// This function will iterate page by page to provide the result set retrieved by the database as REST API output
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }
  
  module.exports = {
    getOffset,
    emptyOrRows
  }