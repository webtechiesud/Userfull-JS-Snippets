 $(document).ready(function(){
                    $('#first_name').on('change', function () {
                        var fname = $(this).val();
                         $('#datatables').dataTable().fnDestroy();
                            $('#datatables').DataTable({
                                dom: 'lBfrtip',
                                buttons: [
                                    {
                                        extend: 'copyHtml5',
                                        title: 'Magicloop Users',
                                        exportOptions: {
                                            columns: [ 0, ':visible' ]
                                        }
                                    },
                                    {
                                        extend: 'excelHtml5',
                                        title: 'Magicloop Users',
                                        exportOptions: {
                                            columns: ':visible'
                                        }
                                    },
                                    {
                                        extend: 'pdfHtml5',
                                        title: 'Magicloop Users',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3, 4, 5, 7]
                                        }
                                    }
                                ],
                                "processing": true,
                                "serverSide": true,
                                "scrollX": true,
                                "order": [],
                                "lengthMenu": [
                                 [50, 75, 100, -1],
                                 [50, 75, 100, "All"]
                                ],
                                "ajax": {
                                    "url": "<?php echo base_url('serverside/getUsers/'); ?>",
                                    "type": "POST",
                                    data: {'fname': fname},
                                },
                                "columnDefs": [{ 
                                    "targets": [0],
                                    "orderable": false
                                }]
                            });
                    });
                });
