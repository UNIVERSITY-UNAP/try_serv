import $ from "jquery";
import DataTable from "datatables.net-dt";

$(document).on('load', () => {
  $('#myTable').DataTable();
})