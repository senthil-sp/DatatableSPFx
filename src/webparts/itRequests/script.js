$(document).ready(function () {
  $('#requests').DataTable({
      'ajax': {
          'url': "../_api/web/lists/getbytitle('Datatable')/items?$select=ID,Title,Name,Age,Dept,Designation",
          'headers': { 'Accept': 'application/json;odata=nometadata' },
          'dataSrc': function (data) {
              return data.value.map(function (item) {
                  return [
                      item.ID,
                      item.Title,
                      item.Name,
                      item.Age,
                      item.Dept,
                      item.Designation

                  ];
              });
          }
      }
  });
});
